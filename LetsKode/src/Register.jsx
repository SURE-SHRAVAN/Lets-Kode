import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth-container">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%);
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          overflow-x: hidden;
        }

        .auth-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%);
        }

        .auth-box {
          backdrop-filter: blur(25px) saturate(180%);
          -webkit-backdrop-filter: blur(25px) saturate(180%);
          background: rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 60px 80px;
          width: 400px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
          text-align: center;
          animation: fadeInUp 1s ease 0.3s both;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        h2 {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 25px;
          background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(180,180,180,0.6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        input {
          padding: 16px 20px;
          border: none;
          border-radius: 14px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 16px;
          outline: none;
          border: 1px solid rgba(255,255,255,0.15);
          transition: background 0.3s ease, border 0.3s ease;
        }

        input:focus {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
        }

        button {
          margin-top: 10px;
          padding: 16px;
          border: none;
          border-radius: 50px;
          background: rgba(255,255,255,0.15);
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        button:hover {
          background: rgba(255,255,255,0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255,255,255,0.2);
        }

        .alt {
          margin-top: 20px;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
        }

        .alt a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          font-weight: 600;
        }

        .alt a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="auth-box">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="alt">
          Already have an account? 
          <Link to="/Login" className="btn btn-primary">
                       Get Started
                       </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
