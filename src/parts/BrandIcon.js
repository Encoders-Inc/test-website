/* eslint-disable react/jsx-filename-extension */
import React from "react";
import logo from "assets/images/logo2.png";

export default function BrandIcon() {
  return (
    <a href="/">
      <img
        src={logo}
        alt="logo"
        style={{ height: "70px", borderRadius: "15%" }}
      />
    </a>
  );
}
