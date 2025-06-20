import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Another from './components/another';
import Signup from "./components/Signup.jsx";
import Team from "./components/Team.jsx";

function App() {
  return (
    <>
        <Content />
        <Team></Team>
        <Signup></Signup>
      <Another />
    </>
  );
}
export default App;
