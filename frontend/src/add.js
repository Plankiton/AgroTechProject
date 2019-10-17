import React, {useState} from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xkkkf.sse.codesandbox.io/'
});

export default function AddProduct ({ history }) {

  const [name, desc, image, category, price] = useState('');

  async function Submit(event) {
    const response = await api.post('add', {name, desc, image, category, price});

    console.log(response);

    history.push('/');
  }

  return (
    <>
      <form onSubmit={Submit}>


      </form>
    </>
  );
}
