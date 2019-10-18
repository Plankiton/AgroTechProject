import React from "react";
import Footer from "./footer";
import mvv from './mvv.png';

export default function About() {
  return (
    <>
      <Footer/>
      <br/>
      <img src={mvv} style={{width: '850px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', borderRadius: '6px'}} alt="missao visao e valores"/>
      <br/>
      <h2>Missão</h2>
      <p className="sobre">
A Agrotech tem como missão contribuir de forma participativa na sociedade, expondo as diferentes variedades de preços de produtos e equipamentos agrícolas de lojas e comércios agropecuários locais, para produtores rurais ou qualquer consumidor de tais produtos oferecidos. Essa exposição será feita através de mecanismos digitais sites e apps,  assim garantindo uma melhor divulgação e acesso, podendo contribuir para melhoria da qualidade de obtenção de produtos.
      </p>
      <br/>
      <h2>Visão</h2>
      <p className="sobre">
a agrotech, tem como visão, facilitar a vida do consumidor, de modo que, possa se tornar referência por sua praticidade e associação com o conforto de sua casa, na busca de equipamentos, medicamentos e produtos agropecuários.
      </p>
      <br/>
      <h2>Valores</h2>
      <p className="sobre">
Integridade, ética, melhoria contínua, qualidade, praticidade .
      </p>

    </>
  )
}
