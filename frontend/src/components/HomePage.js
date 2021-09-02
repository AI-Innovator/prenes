import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Navbar from './navbar/'
import Layout from './Layout';
import Routes from './Routes';

export default function HomePage() {
    return (
      <Router>
        <Layout>
          <Navbar />
          <Routes />
        </Layout>
      </Router>
    );
  }