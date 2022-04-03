import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParmetro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParmetro 
            titulo="Segundo compoenente"
            subtitutlo="muito Legal!"
        />
        <Fragmento/>
    </div>,
    el
)