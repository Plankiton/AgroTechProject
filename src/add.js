import React, {useState, useMemo} from 'react';
import axios from 'axios';
import camera from './camera.svg'
import Footer from './footer';

const api = axios.create({
  baseURL: 'https://xkkkf.sse.codesandbox.io'
});

export default function AddProduct ({ history }) {

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
    history.push('/');
  }

  return (
    <>
      <Footer/>
      <p>Se o item já existir, ele será substituído!!</p>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Nome</label><br/>
        <input
          id="name"
          placeholder="Nome do produto ou ferramenta"
          value={name}
          onChange={event => setName(event.target.value)}
        /><br/>

        <label htmlFor="price">Preço</label><br/>
        <input
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

        <input type="submit" value="Enviar"/>

      </form>
    </>
  );
}
