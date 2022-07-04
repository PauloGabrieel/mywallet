import styled from "styled-components";
import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import exit from "../assets/image/exit.svg";
import minus from "../assets/image/minus.svg";
import plus from  "../assets/image/plus.svg";

export default function Mywallet(){
    const [userData, setUserData] = useState([]);
    let navigate = useNavigate();

    const token = localStorage.getItem("token")
        const config = {
            headers:{
                "Authorization": `Bearer ${token}` 
            }
        }
    

    useEffect(()=>{
        
        const promise = axios.get("http://localhost:5000/mywallet", config);
        promise.then(response =>{
            console.log(response.data);
            setUserData(...userData, response.data);
            
        }).catch(error =>{
            console.error("deu ruim");
        })
    },[]);
    function logout(){
        const promise = axios.delete("http://localhost:5000/mywallet", config);

        promise.then(response => {
            console.log(response.data);
            navigate("/")
        }).catch(error => {
            console.log(error.response);
        })
    }
    function renderExpense(){   
        if(userData.length === 0){
            return <span>Não há registros de entrada ou saída</span>
        }else if(userData.expense.length !== 0){
            return (
                userData.expense.map((item, index) => {
                    return( 
                        <li key={index}>
                            <div><span>{item.date}</span>{item.description}</div>
                            <div style={{color:"#C70000"}}>{item.value}</div>
                        </li>
                    )
        }))
        
    }
    }
    
    function renderIncome(){
        if(userData.length === 0){
            return <span>Não há registros de entrada ou saída</span>
        }else if(userData.income.length !== 0){
            return (
                userData.income.map((item, index) => {
                    return( 
                        <li key={index}>
                            <div><span>{item.date}</span>{item.description}</div>
                            <div style={{color: "#03AC00"}}>{item.value}</div>
                        </li>
                    )
        }))
        
        }
    }
    const expense = renderExpense();
    const income = renderIncome();
    return(
        <Container>
            <Header>
            <h1>Ola, {userData.name} </h1>
                <img onClick={logout} src={exit} alt=""/>
            </Header>
            <Wallet>
                {expense}
                {income}
            </Wallet>
            <Buttons>
                <Link to="/income">
                    <button><img src={plus} alt="" /> <span>Nova entrada</span></button>
                </Link>
                <Link to="/expense">
                    <button><img src={minus} alt=""/> <span>Nova saída</span></button>
                </Link>
                
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
    };
    img{
        cursor: pointer;
    };
` 
const Wallet = styled.ul`

    height: 446px;
    width: 100%;
    background-color: #FFFFFF;
    margin-top: 50px;
    border-radius: 5px;
    padding: 24px 14px;
    
    li{
        margin-bottom: 10px;
        width:100%; 
        display: flex;
        justify-content: space-between;
        font: 400 16px 'Raleway', sans-serif;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            color: ${pros=> pros.color} ;
            span{
                color:#C6C6C6;
            };
      
        };
    };
 
`
const Buttons = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;

    a{
        text-decoration: none;
    }
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
    };
`