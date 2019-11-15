import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Introduction from "./components/introduction/introduction";
import Details from "./components/details/details";
import Footer from "./components/footer/footer";
import {Container} from "@material-ui/core";

const App: React.FC = () => {
  return (
      <React.Fragment>
          <Header/>
          <Introduction/>
          <Container>
              <Details/>
          </Container>
          <Footer/>
      </React.Fragment>
  );
};

export default App;
