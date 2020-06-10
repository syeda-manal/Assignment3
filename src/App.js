import React from 'react';
import Button from "@material-ui/core/Button";
import './MediaCard.js'
import images from './images.png';

import logo from './logo.svg';
import './App.css';
import MediaCard from './MediaCard.js';

function App() {
  // return <div>Hello World from <strong>Syeda Manal</strong>
  // <p>This is my first React static page</p>
  // 5+3 = {5+3}</div>;

  // return (
  //   <Button variant="contained" color="primary">
  //     Hello World
  //   </Button>
  // );

  return(
    <div className= 'MediaCard'>
      <MediaCard title = "Chief Executive Officer" body = {{Name: "Muhammad Motakif", FatherName: "Khalil", ID : "xxxxxxx"}} image = {images}  />
    </div>
  )
}

export default App;
