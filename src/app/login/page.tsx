"use client";

import { auth } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export default function Login() {
// 
  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(result.user);
      alert("Login Successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">

      <button
        onClick={googleLogin}
        className="bg-red-500 text-white px-6 py-3 rounded-lg"
      >
        Sign in with Google
      </button>

    </div>
  );
}