import React, { useState } from "react";
import { usePasswordReset } from "../hooks/usePasswordReset";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { error, passwordreset } = usePasswordReset();

  const handleSubmit = (e) => {
    e.preventDefault();
    passwordreset(email);
  };

  return (
    <div>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
