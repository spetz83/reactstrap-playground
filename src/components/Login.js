import React, { Component } from "react";
import { Button, Form, Label, Input } from "reactstrap";

class Login extends Component {
  render() {
    return (
      <Form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

        <Label for="inputEmail" className="sr-only">
          Email address
        </Label>
        <Input
          type="email"
          id="inputEmail"
          placeholder="Email address"
          required
          autoFocus
        />

        <Label for="inputPassword" className="sr-only">
          Email address
        </Label>
        <Input
          type="password"
          id="inputPassword"
          placeholder="Password"
          required
        />

        <div className="checkbox mb-3">
          <Label check>
            <Input type="checkbox" /> Remember me
          </Label>
        </div>

        <Button color="primary" size="lg" type="submit" block>
          Submit
        </Button>
        <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
      </Form>
    );
  }
}

export default Login;
