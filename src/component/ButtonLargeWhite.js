import React from "react";
import { Button } from "antd";

export default function ButtonLargeWhite(props) {
  console.log(props);
  return (
    <Button
      style={{ color: "#5BB0AC" }}
      htmlType="submit"
      className="login-form-button"
      block
    >
      {props.buttonText}
    </Button>
  );
}
