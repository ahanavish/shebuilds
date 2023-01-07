import React from "react";
import Header from "./Header.jsx";
import Form from "./Form";
import Heading from "./Heading";
import HeadText from "./HeadText.jsx";
import {
  BrowserRouter as Router, Switch,
  Route, Redirect,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Heading></Heading>
      <HeadText></HeadText>
      <Form></Form>
    </div>
  );
}

export default App;
