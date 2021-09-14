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
import Tab from './tab';
import Quote from './quote';
import Services from './services';

export default function HomePage() {
    return (
      <Router>
        <Layout>
          <Navbar />
          <Routes />
          <Tab />
          <Services />
          <Quote />
          <Footer />
        </Layout>
      </Router>
    );
  }