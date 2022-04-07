import "./App.css"
import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParmetro from './components/basicos/ComParamentro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMenbro from "./components/basicos/FamiliaMenbro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProduto from "./components/repeticao/ListaProduto";


export default _ => 
<div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
        <Card titulo="#08 - Renderizacao Condicional" color="#dec3c3">
                <ParOuImpar numero={2}/>
                <ParOuImpar numero={3}/>
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo />
        </Card>

        <Card titulo="#07 - Desafio Repeticao" color="#451e3e">
                <ListaProduto/>
            </Card>

            <Card titulo="#06 - Familia" color="#CCCCFF" >
                <ListaAlunos/>
            </Card>            

            <Card titulo="#05 - Familia" color="#6495ED" >
                <Familia sobrenome="Silva">
                    <FamiliaMenbro nome="Vander"/>
                    <FamiliaMenbro nome="Junior"/>
                    <FamiliaMenbro nome="Clovis"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#FFBF00" >
                <Aleatorio
                    min={1}
                    max={10}
                />
            </Card>

            <Card titulo="#03 - Fragmento" color="#FF7F50" >
                <Fragmento/>
            </Card>

            <Card titulo="#02 - Com Parametro" color="#DE3163" >
                <ComParmetro 
                    titulo="Segundo compoenente"
                    subtitutlo="muito Legal!"
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#9FE2BF" >
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>