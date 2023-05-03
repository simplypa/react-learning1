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
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <p className="underline text-3xl bg-red-400">这是一个tailwind 测试</p>
  </>
);

export default App;
