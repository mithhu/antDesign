import React from "react";
import { Button } from "antd";

export default function ButtonLarge(props) {
  console.log(props);
  return (
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button"
      block
    >
      {props.buttonText}
    </Button>
  );
}
