import React from 'react'
import Logo from "./logo.svg"
import {Link} from 'react-router-dom';

export default function Footer() {

  return (
    <>
      <br/>
      <br/>
      <nav>
      <Link to='/'><button>Home</button></Link>
      <Link to='/about'><button>Sobre</button></Link>
        <Link to="/add">
          <button>Adicionar um produto</button>
        </Link>
        <Link to="/rem">
          <button>Deletar um produto</button>
        </Link>
      </nav>
      <br/>
      <br/>
      <div>
        <img className='logo' src={Logo} alt='AgroTech logotipo svg'/>
        <h1>AgroTech</h1>
      </div>
    </>
  );
}
