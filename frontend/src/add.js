import React, {useState, useMemo} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import camera from './camera.svg'
import Footer from './footer';
import url from './url';

const api = axios.create({
  baseURL: url
});

export default function AddProduct () {
  let history = useHistory();

  const response = async () => await api.get('/');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const preview = useMemo(
    () => {
      return image ? URL.createObjectURL(image): null;
    },
    [image]
  );

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData();
    data.append('image', image);
    data.append('name', name);
    data.append('desc', desc);
    data.append('price', price);

    await api.post('/add', data);
    history.push('/add')
  }

  function isin(substring, string){
    if (!RegExp(substring).exec(string)){
      return false;
    }
    return true;
  }

  return (
    <>
      <Footer/>
      <p>Se o item já existir, ele será substituído!!</p>
      <form onSubmit={handleSubmit} action="/">

        <label htmlFor="name">Nome</label><br/>
        <input
          className="dostyle"
          id="name"
          placeholder="Nome do produto ou ferramenta"
          value={name}
          onChange={event => setName(event.target.value)}
        /><br/>

        <label htmlFor="price">Preço</label><br/>
        <input
          className="dostyle"
          id="price"
          placeholder="Diga o preço o produto ou ferramenta"
          value={price}
          onChange={event => setPrice(event.target.value)}
        /><br/>

        <label htmlFor="desc">Descrição</label><br/>
        <textarea
          id="desc"
          placeholder="Descreva o produto ou ferramenta"
          value={desc}
          onChange={event => setDesc(event.target.value)}
        /><br/>

        <label id="image">
          <input type="file" className="selectimage" onChange={event => setImage(event.target.files[0])}/>
            <img src={camera} alt="Imagem" className="selectimage" style={{backgroundImage: `url(${preview})`, backgroundSize: 'cover'}}/>
          </label><br/><br/>


          <label htmlfor="send">
            <button>Enviar</button>
            <input id="send" type="submit" style={{display: 'none'}}/>
          </label>

      </form>
    </>
  );
}
