import React from 'react';
import Nav from 'components/Nav';
import { Outlet } from 'react-router-dom';
import Footer from 'applications/Footer';
import Header from 'applications/Header';

const Layout = () => (
  <div>
    <Header />
    <Nav />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
