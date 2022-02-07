import React from 'react'

import './style.css'

function DadosBusca({ mostrar }) {
  if (!mostrar || mostrar.lenght === 0) return null

  return (
      <div className='mostrar--resultado'>
          <ul className='listagem--resultado'>
              {mostrar.map(dadosBuscados => 
                    <li className='lista' key={dadosBuscados.cep}>
                        <h3 className='resultado--cepencontrado'>CEP informado para busca {dadosBuscados.cep}</h3>
                        <div className='dados--cep'>
                            <h4><span>Endereço:</span> {dadosBuscados.logradouro} </h4>
                            <h4><span>Complemento:</span> {dadosBuscados.complemento} </h4>
                            <h4><span>Bairro:</span> {dadosBuscados.bairro} </h4>
                            <h4><span>Cidade:</span> {dadosBuscados.localidade} / {dadosBuscados.uf} </h4>
                            <h4><span>DDD:</span> {dadosBuscados.ddd} </h4>
                        </div>
                    </li>
                )}
          </ul>
      </div>
  )
}

export default DadosBusca;







/*



*/