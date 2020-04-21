import React from "react";
import "./App.css";
import HomePage from "./pages/homepage.page.jsx";
import Shop from "./pages/shop/shop.page.jsx";
import SignInSignOutPage from "./pages/sign-in-sign-out/sign-in-sign-out.component.jsx";
import Header from "./components/header/header.component.jsx";
import { Route, Switch } from "react-router-dom";
import { Auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/signin" component={SignInSignOutPage} />
          <Route path="/bones" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = Auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
}

export default App;
