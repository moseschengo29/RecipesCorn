import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  username: "John",
  email: "johndoe@gmail.com",
  password: "password",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };

    default:
      return "Invalid action type!";
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(username, email, password) {
    if (
      username === FAKE_USER.username &&
      email === FAKE_USER.email &&
      password === FAKE_USER.password
    ) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      alert("Wrong user info!");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) throw new Error("Context used outside provider!");
  return context;
}

export { AuthProvider, useAuth };
