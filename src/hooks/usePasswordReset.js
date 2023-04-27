import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export const usePasswordReset = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const passwordreset = (email) => {
    setError(null);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch({ type: "RESET" });
        navigate("/");
        console.log("Password Reset Email sent");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { error, passwordreset };
};
