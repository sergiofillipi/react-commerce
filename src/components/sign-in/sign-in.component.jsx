import React from "react";
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  handleSubmit = () => {
    this.setState({ email: "", password: "" });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [ name ]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>Já possuo uma conta</h2>
        <span>Entre com seu usuário e senha</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email"
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            label="Senha"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
