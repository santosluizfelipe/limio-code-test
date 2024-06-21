// @flow
import React, { useState } from "react";
import BasketButton from "./components/BasketButton";
import "./index.css";

export const LimioHeader = ({ basket, openModal }) => {

  return (
    <nav className={"navbar navbar-expand-lg navbar-light shadow"}>
      <input type="checkbox" id="navbar-toggle-cbox" />
      <a className="navbar-brand" href={"/"}>
        <img
          src={
            "https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png"
          }
          alt="Header logo"
        />
      </a>
      <BasketButton basketItems={basket} mobile={false} onClick={openModal} />
      <label
        htmlFor="navbar-toggle-cbox"
        className="navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <span className="navbar-toggler-icon" />
      </label>
    </nav>
  );
};

export default LimioHeader;
