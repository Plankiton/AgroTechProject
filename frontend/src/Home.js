import React from "react";
import Logo from "./logo.svg"
import Products from './get';

class Footer extends React.Component {
  render() {
    return (
      <>
        <div>
          <img className='logo' src={Logo} alt='AgroTech logotipo svg'/>
          <h1>AgroTech</h1>
        </div>
      </>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <div  className="footer">
        <br/>
        <Footer className="footer"/>
        <Products/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default HomePage;
