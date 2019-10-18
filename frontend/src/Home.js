import React from "react";
import Products from './get';
import {Link} from 'react-router-dom';
import Footer from './footer';


class HomePage extends React.Component {
  render() {
    return (
      <div  className="footer">
        <Footer className="footer"/>
        <Products/>
        <br/>
        <br/>
        <Link to="/add">
          <button className="btn">Alterar ou cadastrar um novo produto</button>
        </Link>
        <Link to="/rem">
          <button className="btn">Deletar um produto</button>
        </Link>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default HomePage;
