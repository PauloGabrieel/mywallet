import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

import FormUsers from "../shared/FormUsers"
export default function Signup(){
    let navigate = useNavigate();
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const [loader, setLoader] = useState(false);
    
    function handleForm(e){
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
       
    }
    function signupForm(e){
        e.preventDefault();
       
        const promise = axios.post("http://localhost:5000/signup", userData);
        
        promise.then(response =>{
            console.log(response);
           
            if(response.status== 201){
                alert(response.data)
                navigate("/");
                
            }
            
        }).catch(error =>{
            console.log(error.response);
        });
    };
    return(
        <Container>
            <h1>Mywallet</h1>
            <FormUsers onSubmit={signupForm}>
                <input onChange={handleForm} name="name" value={userData.name} type="text" placeholder="Nome"></input>
                <input onChange={handleForm} name="email" value={userData.email} type="email" placeholder="E-mail"></input>
                <input onChange={handleForm} name="password" value={userData.password} type="password" placeholder="Senha"></input>
                <input onChange={handleForm} name="confirmPassword" value={userData.confirmPassword} type="password" placeholder="Confirme a senha"></input>
                {loader?<ContainerLoader><div></div></ContainerLoader>:<button onClick={signupForm}>Cadastrar</button>}
            </FormUsers>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
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