import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <Link
        to={"/main-page/projects"}
        className="flex items-center justify-center text-6xl mt-20 text-cyan-500"
      >
        Click to Login
      </Link>
    </div>
  );
};

export default Login;
