import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Navbar from './navbar/';
import Layout from './Layout';
import Routes from './Routes';
import Footer from './footer';


export default function HomePage() {
    return (
      <Router>
        <Layout>
          <Navbar />
          <Routes />
          <Footer />
        </Layout>
      </Router>
    );
  }