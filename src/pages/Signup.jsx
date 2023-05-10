import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="container">
      <div>
        <h2>Signup</h2>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <span>email:</span>
              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
          </div>
          <div>
            <label>
              <span>password:</span>
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
          </div>
          <div>
            <label>
              <span>confirm password:</span>
              <input required type="password" />
            </label>
          </div>
          <div>
            <button
              style={{
                borderRadius: 25,
                backgroundColor: "#613cf5",
                padding: "18px 36px",
                fontSize: "25px",
                color: "#f2fafc",
              }}
            >
              Sign up
            </button>
          </div>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
