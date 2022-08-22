import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
const INITIAL_STATE = {
  user: {
    _id: "62ffc7aa3b4c53f4f3c9f5df",
    username: "s1een",
    email: "s1een@gmail.com",
    profilePicture: "person/2.jpeg",
    coverPicture: "post/3.jpeg",
    isAdmin: false,
    desc: "Hellooooooo",
    followers: ["62fe97da4ba4470efe0cf4b2", "62feb5e3135377fbf236fbd9"],
    followings: ["62fe97da4ba4470efe0cf4b2", "62feb5e3135377fbf236fbd9"],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
