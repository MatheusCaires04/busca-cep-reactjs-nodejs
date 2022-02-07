import React, { useState } from 'react'

import DadosBusca from '../dadosBusca'

import './style.css'

function Principal() {

  const [mostrar, setMostrar] = useState([])

  // Converte para array os dados encontrados
  const converteArray = (obj) => {
    const arr = [obj]
    return arr
  }

  // Realiza a busca do cep pela API do Correios
  const buscarCep = (e) => {
    e.preventDefault()

    const inputDados = new FormData(e.target)
    const dados = Object.fromEntries(inputDados)

    fetch(`http://localhost:3001/?buscaCep=${dados.buscaCep}`)
    .then(response => response.json())
    .then(dados => {
      const array = converteArray(dados)
      setMostrar(array)
    })
    .catch(error => console.error)
  }

  return (
      <main className='pagina--total'>
          <div className='pagina--cabecalho'>
            <h1 className='header--nome--logo'>Consulte seu CEP grátis aqui!</h1>
          </div>
          <div className='pagina--busca'>
            <form className='form--busca' onSubmit={buscarCep}>
              <h3 className='busca--nome'>Insira seu CEP, e veja seu endereço:</h3>
              <input type='number' autoFocus name='buscaCep' placeholder='Apenas números (ex: 16200000)' className='busca--cep' />
              <button className='btn--buscar--cep' type='submit'>Buscar</button>
            </form>
          </div>
          <DadosBusca mostrar={mostrar} />
          <div className='pagina--rodape'>
            <h1 className='rodape--title'>Desenvolvido por Matheus Bini Caires</h1>
          </div>
      </main>
  );
}

export default Principal;
/**
 * cep: '16201-181',
  logradouro: 'Rua Severo Xavier Soares',
  complemento: '',
  bairro: 'Parque das Nações',
  localidade: 'Birigüi',
  uf: 'SP',
  ibge: '3506508',
  gia: '2148',
  ddd: '18',
  siafi: '6229'
}
 */