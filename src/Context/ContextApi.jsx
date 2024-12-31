import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
export const ContextMain = createContext();
const ContextApi = ({ children }) => {
  //User State
  const [user, SetUser] = useState(null);
  //User Moninitoring in App
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log("Current user", currentUser);
        SetUser({
          name: currentUser.displayName,
          photo: currentUser.photoURL,
          email: currentUser.email,
        });
      } else {
        console.log("no user");
        SetUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);
  const items = {
    user,
  };
  return <ContextMain.Provider value={items}>{children}</ContextMain.Provider>;
};

export default ContextApi;
