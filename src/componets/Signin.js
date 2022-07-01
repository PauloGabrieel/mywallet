
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";

import FormUsers from "../shared/FormUsers.js"

dotenv.config();
export default function Signin(){
    const [loader, setLoader] = useState(false);
    const [userData, setUserData] = useState({
        email:"",
        password: ""
    });
    console.log(loader);
    
    

    function handleForm(e){
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    function login(e){
        e.preventDefault();
        const promise = axios.post("localhost:5000/signin",userData);
        promise.then(response =>{
            console.log(response);
        }).catch(error =>{
            console.log(error.response);
        })
    }
    return(
        <Container>
            <h1>Mywallet</h1>
            <FormUsers onSubmit={login}>
                <input 
                onChange={handleForm} value={userData.email} 
                name="email" type="email" placeholder="E-mail"></input>
                
                <input onChange={handleForm} value={userData.password} 
                name="password" type="password" placeholder="Senha"></input>
                
                {loader ? <ContainerLoader><div></div></ContainerLoader>:<button onClick={login}>Entrar</button>}
            
            </FormUsers>
            <Link to="/signup">Primeira vez? Cadastre-se!</Link>
            
        </Container>
            
        
    )
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font: 400 32px 'Saira Stencil One', cursive;
        color: #FFFFFF;
        margin-bottom: 24px;
    };
    a{
        margin-top: 36px;
        font: 700 15px 'Raleway', sans-serif;
        color: #FFFFFF;
        text-decoration: none;
    }

`
const ContainerLoader = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        width: 100%;
        background-color: #A328D6;
        border-radius: 5px;

    div{
        width: 30px;
        height: 30px;    
        border: 2px solid rgba(0,0,0,.1);
        border-left-color:#690096;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    };
    @keyframes spin{
        to{ transform: rotate(360deg);}
    }
`
