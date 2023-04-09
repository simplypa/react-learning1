import React from 'react'

const Info = () => {
  let friends = ['小明', '小红', '小刚']
  return (
    <div>
      <h1>这是INFO的组件</h1>
      {friends.map((item, index) => { 
        return <li key={index}>{item}</li>})
       }
    </div>
  )
}

export default Info
