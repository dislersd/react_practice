import React, { useState } from "react";
import CounterOne from "../components/CounterOne";
import CounterTwo from "../components/CounterTwo";

function CountWithHook() {
  return (
    <>
      <CounterOne />
      <CounterTwo />
    </>
  );
}

export default CountWithHook;
