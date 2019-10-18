import React, {useState} from 'react';
import axios from 'axios';
import Footer from './footer';

const api = axios.create({
  baseURL: 'http://xkkkf.sse.codesandbox.io'
});

export default function RemProduct ({ history }) {

  const [name, setName] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    await api.post('/rem', {"name": name} );
    history.push('/');
  }

  return (
    <>
      <Footer/>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Nome</label><br/>
        <input
          id="name"
          placeholder="Nome do produto ou ferramenta"
          value={name}
          onChange={event => setName(event.target.value)}
        /><br/>

        <input type="submit" value="Enviar"/>

      </form>
    </>
  );
}
