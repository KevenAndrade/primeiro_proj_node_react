import React, { useState, useEffect } from "react";
import api from "./services/api";

import './App.css';
/* import IMGbackground from "./assets/Background.jpg"; */

import Header from "./components/Header";

function App(){
    const [projects,setprojects] = useState([]);

    // useState ta retorna um array k 2 possison
    // 1. valor de variavel work 
    // 2. funson pa atualisa variavel

    async function addproject() {

        /* setprojects([...projects,`Novo Projeto at: ${Date.now()}`]);
        console.log(projects); */

        const response = await api.post('/projects',{
            title: `Front-end Proj at: ${Date.now()}`,
	        owner: "Keven Andrade"
        })

        const project = response.data;

        setprojects([...projects,project]);
    }

    useEffect(() =>{
        api.get('/projects').then(response =>{
            setprojects(response.data);
        });
    },[]);

    return (
        <>
        <Header title="Home"/>
        {/* <img width={300} src={IMGbackground} alt=""/> */}

        <ul>
            {projects.map(project =><li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={addproject} > Add novo projeto </button>
        </>
    );
}

export default App;