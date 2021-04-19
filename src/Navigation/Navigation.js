import React from "react";

const Navigation = ({ onRouteChange, isSignedin }) => {
  if (isSignedin) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          className="f4 link dim black underline pa3 pointer button"
          onClick={() => onRouteChange("signout")}
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          className="f4 link dim black underline pa3 pointer button"
          onClick={() => onRouteChange("signin")}
        >
          Sign in
        </p>
        <p
          className="f4 link dim black underline pa3 pointer button"
          onClick={() => onRouteChange("register")}
        >
          Register
        </p>
      </nav>
    );
  }
};
export default Navigation;
