import React, { useState } from "react";

import Header from "./components/Header";

function App(){
    const [projects,setprojects] = useState(['Desenvolvimento de backend', 'Desenvolvimento Mobile']);

    // useState ta retorna um array k 2 possison
    // 1. valor de variavel work 
    // 2. funson pa atualisa variavel

    function addproject() {

        setprojects([...projects,`Novo Projeto at: ${Date.now()}`]);

        console.log(projects);
    }

    return (
        <>
        <Header title="Home"/>

        <ul>
            {projects.map(project =><li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={addproject} > Add novo projeto </button>
        </>
    );
}

export default App;