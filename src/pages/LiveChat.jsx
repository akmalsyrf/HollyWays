// import useContext hook
import React, { useState, useEffect, useContext } from "react";

import { Container, Row, Col } from "react-bootstrap";
// import chat component
import Contact from "../components/LiveChat/Contact/Contact";
import Chat from "../components/LiveChat/Chat/Chat";

// import user context
import { UserContext } from "../context/UserContext";

// import socket.io-client
import { io } from "socket.io-client";

// initial variable outside socket
let socket;
export default function LiveChat() {
  document.title = "Live Chat | Hollyways";
  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);
  // create messages state
  const [messages, setMessages] = useState([]);

  // consume user context
  const [state] = useContext(UserContext);

  useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      query: {
        id: state.user.id,
      },
    });

    // define corresponding socket listener
    socket.on("new message", () => {
      console.log("contact", contact);
      console.log("triggered", contact?.id);
      socket.emit("load messages", contact?.id);
    });

    // listen error sent from server
    socket.on("connect_error", (err) => {
      console.error(err.message); // not authorized
    });
    loadContacts();
    loadMessages();

    return () => {
      socket.disconnect();
    };
  }, [messages]);

  const loadContacts = () => {
    socket.emit("load contacts");
    socket.on("contacts", (data) => {
      const cutMessage = (str) => {
        if (str.length > 75) {
          return (str = str.substring(0, 74) + "...");
        } else {
          return str;
        }
      };
      let dataContacts = data.filter((item) => item.id !== state.user.id);
      dataContacts = dataContacts.map((item) => ({
        ...item,
        message:/*
          item.senderMessage.length > 0
          // ? item.senderMessage[item.senderMessage.length - 1] !== "" || item.recipientMessage[item.senderMessage.length - 1] !== ""
            ? item.senderMessage[item.senderMessage.length - 1].createdAt > item.recipientMessage[item.recipientMessage.length - 1].createdAt
              ?  cutMessage(item.senderMessage[item.senderMessage.length - 1].message) 
              : item.recipientMessage[item.recipientMessage.length - 1].message
            // : "Click here to start message"
          : */ "Click here to start message"
      }));
      setContacts(dataContacts);
      console.log(contacts);
    });
  };

  // used for active style when click contact
  const onClickContact = (data) => {
    setContact(data);
    // emit event load messages
    socket.emit("load messages", data.id);
  };

  const loadMessages = () => {
    // define listener on event "messages"
    socket.on("messages", async (data) => {
      // get data messages
      setMessages([])
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
        }));
        console.log(dataMessages);
        setMessages(dataMessages);
      }
      const chatMessagesElm = document.getElementById("chat-messages");
      chatMessagesElm.scrollTop = chatMessagesElm?.scrollHeight;
    });
  };
  const onSendMessage = (e) => {
    // listen only enter key event press
    if (e.key === "Enter") {
      const data = {
        idRecipient: contact.id,
        message: e.target.value,
      };

      //emit event send message
      socket.emit("send message", data);
      e.target.value = "";
    }
  };

  return (
    <>
      <Container fluid style={{ height: "89.5vh" }} className="bg-light px-5">
        <Row>
          <Col md={3} style={{ height: "89.5vh" }} className="px-3 border-end border-dark overflow-auto">
            <Contact dataContact={contacts} clickContact={onClickContact} contact={contact} />
          </Col>
          <Col md={9} style={{ maxHeight: "89.5vh" }} className="px-0">
            <Chat contact={contact} messages={messages} user={state.user} sendMessage={onSendMessage} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
