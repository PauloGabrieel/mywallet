import styled from "styled-components";
import { useEffect,useState } from "react";
import axios from "axios";
import exit from "../assets/image/exit.svg";
import minus from "../assets/image/minus.svg";
import plus from  "../assets/image/plus.svg";

export default function Mywallet(){
    
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        const token = localStorage.getItem("token")
        const config = {
            headers:{
                "Authorization": `Bearer ${token}` 
            }
        }
        
        const promise = axios.get("http://localhost:5000/mywallet", config);
        promise.then(response =>{
            console.log(response);
            setUserData(...userData, response.data);
            ;
        }).catch(error =>{
            console.error("deu ruim");
        })
    },[])
    
    return(
        <Container>
            <Header>
            <h1>Ola, {} </h1>
                <img src={exit} alt=""/>
            </Header>
            <Wallet>
                <span>Não há registros de entrada ou saída</span>
            </Wallet>
            <Buttons>
                <button><img src={plus} alt="" /> <span>Nova entrada</span></button>
                <button><img src={minus} alt=""/> <span>Nova saída</span></button>
            </Buttons>
        </Container>
    )
};
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    padding: 25px;
    width:100%;
`    
const Header = styled.div`
    position: fixed;
    top:25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:calc(100% - 50px);

    h1{
        font: 700 26px 'Raleway', sans-serif;
        color: #FFFFFF;
    }
` 
const Wallet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 446px;
    width: 100%;
    background-color: #FFFFFF;
    margin-top: 50px;
    border-radius: 5px;

    span{
        font: 400 20px 'Raleway', sans-serif; 
        color: #868686;
        width:180px;
        text-align: center;
    }
`
const Buttons = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;

    button{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        background-color: #A328D6;
        height: 114px;
        width:155px;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        font: 700 17px 'Raleway', sans-serif; 
        cursor: pointer;
    }
`