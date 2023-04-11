import React from 'react';
import Nav from 'components/Nav';
import Button from 'components/Button';
import 'styles/global.css';

const App = () => (
  <div className="App">
    <h1 className="info">这是在app就是根component的位置制作的一个标题</h1>
    <Button Name="测试按钮" />
    <Nav />
  </div>
);

export default App;
