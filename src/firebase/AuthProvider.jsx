import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import PropTypes from "prop-types";

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./firebase.config";

//--------------------------------------

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
//----------------------------

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //---------------------------------
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //----------------------
  const updateUserProfile = (name, image) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: image,
    });
  };
  //--------------------------------

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //----------------------
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //---------------
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  //----------------------

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //---------------------------

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log(loggedUser);

      //  console.log("currenct users", currentUser);
      setUser(currentUser);
      setLoading(false);

    });
    return () => {
      unSubscribe();
    };
  }, []);

  //----------------------------------
  const authInFo = {
    user,
    loading,
    setUser,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
    signInWithGithub,
    updateUserProfile,
    auth,
  };

  return (
    <AuthContext.Provider value={authInFo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};