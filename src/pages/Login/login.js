import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./login.scss";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false,
      errorMessage: "Incorrect username or password",
    };
  }
  login = (e) => {
    e.preventDefault();
    // let history = useHistory();
    let thisView = this;
    this.setState({
      username:this.state.username,
      password:this.state.password
    }) 
    if (
      this.state.username === "nabeeltayyab@gmail.com" && this.state.password === "1221"
    ) 
      
    {
      console.log("username..",this.state);
      thisView.props.history.push("./dashboard");
    } else {
      this.setState({
        error: true,
      });
    }
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo"></div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="email"
                      placeholder="Username"
                      name="username"
                      onChange={this.handleChange}
                      size="lg"
                      className="h-auto"
                    />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChange}
                      size="lg"
                      className="h-auto"
                    />

                   
                  </Form.Group>
                  {this.state.error ? <p className="error">{this.state.errorMessage}</p> : null}
                  
                  <div className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.login}>
                   
                      SIGN IN
                    
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a
                      href="!#"
                      onClick={(event) => event.preventDefault()}
                      className="auth-link text-black"
                    >
                      Forgot password?
                    </a>
                  </div>
                 
                  
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
