import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const year = new Date().getFullYear();

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/guide">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
     
      <div className="footer" >
        <Typography.Title level={5} style={{ color: "white", textAlign: "right", fontWeight: "80", opacity: "0.5" }}>
          <Typography.Title level={5} className="logo-footer">
            <span style={{ color: "white", textAlign: "right", fontWeight: "100", }}>Select market data provided by </span> <Link to="">Coinranking</Link>
          </Typography.Title>
          © {year} CryptoView
        </Typography.Title>
      </div>


    </div>
  </div>
);

export default App;
