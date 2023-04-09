import React from 'react';

function Info() {
  const friends = ['小明', '小红', '小刚'];
  return (
    <div>
      <h1>这是INFO的组件</h1>

      {friends.map((item) => <p>{item}</p>)}
    </div>
  );
}

export default Info;
