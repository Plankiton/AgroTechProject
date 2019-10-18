import MDReactComponent from 'markdown-react-js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xkkkf.sse.codesandbox.io/'
});

export default function Products ({ history }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/');

      console.log(response);
      setProducts ( response.data );
    }

    loadProducts();
  }, [])

  return (
    <>
      <ul className="listproducts">
        {
          products.map(
            prod => (
              <li key={prod.name}>
                <h2>{prod.name}</h2>
                <img src={prod.image} alt={prod.name}/>
                <MDReactComponent className="desc" text={prod.desc} />
                <p className="price">{prod.price} $</p>
              </li>
            )
          )
        }
      </ul>
    </>
  );
}
 
