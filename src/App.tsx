import React, { Fragment } from 'react';
import './App.css';
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";
import Details from "./components/details/details";
import Contact from "./components/contatc/contact";
import Footer from "./components/footer/footer";


const App: React.FC = () => {
  return (
      <Fragment>
        <Header/>
        <Introduction/>
        <Details/>
        <Details/>
        <Contact/>
        <Footer/>
      </Fragment>
  );
};

export default App;
