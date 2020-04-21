import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./homepage.styles.scss";
import { Auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
    console.log(currentUser);
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
            <nav className="header__nav">
                <Link className="header__nav-item" to="/shop">
                    Departamentos
                </Link>
                <Link className="header__nav-item" to="/contact">
                    Contato
                </Link>
                {currentUser ? (
                    <div> {currentUser.displayName} <span onClick={ () => Auth.signOut() }>( sair )</span></div>
                ) : (
                    <Link className="header__nav-item" to="/signin">
						Login
					</Link>
                )}
            </nav>
        </div>
    );
};

export default Header;
