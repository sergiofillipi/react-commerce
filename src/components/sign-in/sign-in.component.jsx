import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { SigninWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
    }
    handleSubmit = () => {
        this.setState({ email: "", password: "" });
    };
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className="sign-in">
                <h1 className="title">Sign In</h1>
                <h2>Já possuo uma conta</h2>
                <span>Entre com seu usuário e senha</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email || ""}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        id="password"
                        name="password"
                        type="password"
                        label="Senha"
                        value={this.state.password || ""}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type="submit">Go</CustomButton>
                    <CustomButton className="google-signin" onClick={SigninWithGoogle}>
                        Login com Google
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
