import React, { Component } from "react";
import { Steps, Button, message, Icon } from "antd";

const { Step } = Steps;
const steps = [
  {
    title: "Company Details",
    content: "First-content",
    key: 1
  },
  {
    title: "Product Details",
    content: "Second-content",
    key: 2
  },
  {
    title: "Additional Info",
    content: "Third-content",
    key: 3
  },

  {
    title: "Personal Details",
    content: "Last-content",
    key: 4
  }
];

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step
              key={item.title}
              title={item.title}
              icon={
                item.key !== 1 && item.key === current + 1 ? (
                  <Icon type="loading" />
                ) : (
                  ""
                )
              }
            />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>

        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
