import { createContext, useReducer } from "react";

export const UserContext = createContext();
const initialState = { isLogin: false, user: {} };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log(payload);
      return { isLogin: true, user: payload.userSession, token: payload.token };
    case "AUTHENTICATED":
      return { isLogin: true, user: payload?.userSession, token: payload?.token };
    case "LOGOUT":
      return { isLogin: false, user: {}, token: sessionStorage.clear() };
    default:
      throw new Error();
  }
};

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
}
