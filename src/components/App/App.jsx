import React from 'react';
// import Nav from 'components/Nav';
// import DisplayInput from 'applications/DisplayInput';
import 'styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'applications/Layout';
import HomePage from 'applications/HomePage';
import About from 'applications/About';
import PageNotFound from 'applications/PageNotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>

  // <div className="App">
  //   <h1 className="info">这是在app就是根component的位置制作的一个标题</h1>
  //   <DisplayInput />
  //   <Nav />
  // </div>
);

export default App;
