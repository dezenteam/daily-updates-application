import React, { Component } from "react";
import "./setPassword.css";

import { Label, Row, Input, Button } from "reactstrap";

export class SetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      error: false,
    };
  }

  setNewPassword = (e) => {
    let thisView = this;
    let Password = localStorage.getItem("password");
    if (Password === this.state.oldPassword) {
      this.setState({
        newPassword: this.state.newPassword,
      });
      console.log(this.state.newPassword);
      localStorage.setItem("password", this.state.newPassword);
      thisView.props.history.push("/profile");
    } else {
      this.setState({
        error: true,
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Row className="setpassword-table">
          <Row className="setpassword-content">
            <Row className="changePassword-title">
              <h2>Change Password</h2>
            </Row>
            <Row className="setpassword-lable">
              <Label> Enter Old Password</Label>
              <Input
                name="oldPassword"
                placeholder="EnterOldPassword"
                onChange={(e) => this.handleChange(e)}
              />
            </Row>
            <Row className="setpassword-lable">
              <Label>Set New Password</Label>
              <Input
                name="newPassword"
                placeholder="Set New password"
                onChange={(e) => this.handleChange(e)}
              />
            </Row>
            <Row className="setpassword-lable">
              <Label>ConfirmPassword</Label>
              <Input
                name="confirmPassword"
                placeholder=" Confirm New password"
                onChange={(e) => this.handleChange(e)}
              />
            </Row>{" "}
            {this.state.error ? (
              <Row className="setpassword-lable">
                <Label> incorrect Password</Label>
              </Row>
            ) : null}
            <Row>
              <Button
                className="btn-title"
                onClick={(e) => this.setNewPassword(e)}
              >
                SetPassword
              </Button>
            </Row>
          </Row>
        </Row>
      </div>
    );
  }
}

export default SetPassword;
