import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>
    <p>This is my dashboard component</p>
  </div>
);
const AddExpensePage = () => (
  <div>
    <p>This is my expense component</p>
  </div>
);
const EditExpensePage = () => (
  <div>
    <p>This is my edit expense component</p>
  </div>
);
const HelpPage = () => (
  <div>
    <p>This is my help component</p>
  </div>
);
const NotFoundPage = () => (
  <div>
    <p>
      404! <Link to="/">Go home</Link>
    </p>
  </div>
);

const Header = () => (
  <header>
    <h1>Budget App</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);
const routes = (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </div>
);
ReactDOM.render(routes, document.getElementById("app"));
