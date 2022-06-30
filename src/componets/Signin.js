import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import dotenv from "dotenv";

import FormUsers from "../shared/FormUsers.js"

dotenv.config();
export default function Signin(){

    const [userData, setUserData] = useState({
        email:"",
        password: ""
    });
    function handleForm(data){
        setUserData({
            ...userData,
            [data.target.name]: data.target.value
        });
    };
    function login(){
        
        const promise = axios.post()
        
    }
    return(
        <Container>
            <h1>Mywallet</h1>
            <FormUsers >
                <input 
                onChange={handleForm} value={userData.email} 
                name="email" type="email" placeholder="E-mail"></input>
                <input onChange={handleForm} value={userData.password} 
                name="password" type="password" placeholder="Senha"></input>
                <button>Entrar</button>
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

