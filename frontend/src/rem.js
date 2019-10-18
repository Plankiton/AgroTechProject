import React, {useState, useEffect} from 'react';
import ReactDOMServer from 'react-dom/server';
import Search from './search.svg'
import MDReactComponent from 'markdown-react-js';
import axios from 'axios';
import Footer from './footer';
import url from './url'
import {Link, useHistory} from 'react-router-dom';

const api = axios.create({
  baseURL: url
});

export default function RemProduct () {
  let history = useHistory();

  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await api.post(`/rem`, {name});
    history.push('/rem')
  }

  async function loadProducts() {
    const response = await api.get('/');

    setProducts ( response.data );
  }

  function isin(substring, string){
    if (!RegExp(substring).exec(string)){
      return false;
    }
    return true;
  }

  function send () {
    var list_products = [];
    if (searchText !==''){
      loadProducts();
      var item = 0;
      for (item in products){
        if ( isin(searchText, products[item].name.toLowerCase()) || isin(searchText, products[item].desc.toLowerCase()) ){
          list_products.push(products[item])
        }
      }
    } else {
      loadProducts();
      list_products = products;
    }

    var HTML = '';
    var list_html_prod = list_products.map(
        prod => ReactDOMServer.renderToString(
                <label key={prod.name} htmlFor={prod.name}>
                  <div>
                  <li className="rmproduct">
                    <p className="price">R$ {prod.price}</p>

                    <input id={prod.name}
                      type="submit"
                      className="dostyle"
                      onClick={
                        event => {
                        setName(prod.name);
                        handleSubmit(event);
                        }
                      }
                      style={{display: 'none'}}/>

                    <h2>{prod.name}</h2>
                    <img className="rmproduct" src={prod.image} alt={prod.name}/>
                    <MDReactComponent className="desc" text={prod.desc} />
                  </li>
                </div>
                </label>
        )
      );

    for ( var i in list_html_prod ){
      HTML += list_html_prod[i];
    }
    document.getElementById('productsroot').innerHTML = HTML
  }

  useEffect(() => {
    loadProducts();
  }, [])
  return (
    <>
      <Footer/>

      <div className="searchbar">
        <input type="text" style={{backgroundImage: Search}} placeholder="Buscar" onChange={event => setSearchText(event.target.value.toLowerCase())}/>
        <button style={{width: '35px', height: '35px'}} onClick={send}>
          <img className="search" src={Search} alt="searchimage"/>
        </button>
      </div>


      <form>

        <ul className="listproducts" id='productsroot'>
          {
            products.map(
              prod => (
                <label key={prod.name} htmlFor={prod.name}>
                  <div>
                    <li
                      onClick={
                        event => {
                        setName(prod.name);
                        handleSubmit(event);
                        }
                      }
                      className="rmproduct">
                    <p className="price">R$ {prod.price}</p>

                    <input id={prod.name}
                      type="submit"
                      className="dostyle"
                      onClick={
                        event => {
                        setName(prod.name);
                        handleSubmit(event);
                        }
                      }
                      style={{display: 'none'}}/>

                    <h2>{prod.name}</h2>
                    <img className="rmproduct" src={prod.image} alt={prod.name}/>
                    <MDReactComponent className="desc" text={prod.desc} />
                  </li>
                </div>
                </label>
              )
            )
          }
        </ul>

        <br/>
        <br/>

        </form>
      </>
  );
}
