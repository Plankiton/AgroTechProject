import React from 'react'
import Logo from "./logo.svg"

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

export default Footer;
