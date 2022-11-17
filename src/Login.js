import React from "react";
import "./Login.css";
import mainLogo from "./assets/PodPal.png"
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src={mainLogo}
        alt="podpal"
      />
      <h2 className="h2">Powered By:</h2>
      <div className="login2">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      /></div>

      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;