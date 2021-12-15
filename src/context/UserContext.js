import { createContext, useReducer } from "react";

export const UserContext = createContext();
const initialState = { isLogin: false, user: {} };

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return { isLogin: true, user: payload };
    case "LOGOUT":
      return { isLogin: false, user: {} };
    default:
      throw new Error();
  }
};

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
}
