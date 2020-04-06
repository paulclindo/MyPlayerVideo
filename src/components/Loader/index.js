import React from "react";
import { WrapperLoader } from "./style";

const Loader = () => (
  <WrapperLoader>
    <div className="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </WrapperLoader>
);

export default Loader;
