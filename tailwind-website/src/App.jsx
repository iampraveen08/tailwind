import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Another from './components/another';
import Signup from "./components/Signup.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";
import Create from "./components/Create.jsx";
import New from "./components/New.jsx";

function App() {
  return (
    <>
        <Content />
        <Team></Team>
        <Signup></Signup>
        <Another />
        <Footer></Footer>
        <Create></Create>
        <Navbar></Navbar>
        <New></New>
    </>
  );
}
export default App;
