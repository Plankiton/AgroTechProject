import MDReactComponent from 'markdown-react-js';
import ReactDOMServer from 'react-dom/server';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import url from './url'
import Search from './search.svg'

const api = axios.create({
  baseURL: url
});

export default function Products ({ history }) {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [name, setName] = useState('');


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

    console.log(
      list_products.map(
      prod => ReactDOMServer.renderToString(
              <li key={prod.name}>
                <h2>{prod.name}</h2>
                <img src={prod.image} alt={prod.name}/>
                <MDReactComponent className="desc" text={prod.desc} />
                <p className="price">{prod.price} $</p>
              </li>
        )
    )

    )

    var HTML = '';
    var list_html_prod = list_products.map(
        prod => ReactDOMServer.renderToString(
          <li key={prod.name}>
            <h2>{prod.name}</h2>
            <img src={prod.image} alt={prod.name}/>
            <MDReactComponent className="desc" text={prod.desc} />
            <p className="price">{prod.price} $</p>
          </li>
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
      <div className="searchbar">
        <input type="text" style={{backgroundImage: Search}} placeholder="Buscar" className="dostyle" onChange={event => setSearchText(event.target.value.toLowerCase())}/>
        <button style={{width: '35px', height: '35px'}} onClick={send}>
          <img className="search" src={Search} alt="searchimage"/>
        </button>
      </div>
      <ul className="listproducts" id='productsroot'>
        {
          products.map(
            prod => (
                <label htmlFor={prod.name} className="radiobutton">
                  <li key={prod.name}>
                    <input type="radio" className="radio" value={prod.name} onChange={event => setName(prod.name)} id={prod.name}/>

                    <h2>{prod.name}</h2>
                    <img src={prod.image} alt={prod.name}/>
                    <MDReactComponent className="desc" text={prod.desc} />
                    <p className="price">{prod.price} $</p>
                  </li>
                </label>
            )
          )
        }
      </ul>
    </>
  );
}
 
