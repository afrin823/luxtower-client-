import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import PropTypes from "prop-types";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./firebase.config";
import useAxiosPublic from "./hook/useAuth/useAxiosPublic/useAxiosPublic";

//--------------------------------------

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

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
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //---------------------------

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     //  console.log("currenct users", currentUser);
  //     setUser(currentUser);
  //     if (currentUser) {
  //       //get token and store client
  //       const userInfo = {email: currentUser.email}
  //       axiosPublic.post('/jwt', userInfo)
  //       .then(res => {
  //         if (res.data.token){
  //             localStorage.setItem('access-token', res.data.token)
  //         }
  //       }
         
  //       )
  //     } else {
  //       localStorage.removeItem('access-token');
  //     }
  //     setLoading(false);

  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, [axiosPublic]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            console.log("the token is", res.data);
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {

        localStorage.removeItem("access-token");
      }
      console.log("Absorbing user", currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, [axiosPublic]);

  //----------------------------------
  const authInFo = {
    user,
    loading,
    setUser,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
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