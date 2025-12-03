import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const GoogleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createAccount,
    updateUserProfile,
    signOutUser,
    userSignIn,
    loading,
    setLoading,
    googleSignIn,
    passwordReset,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
