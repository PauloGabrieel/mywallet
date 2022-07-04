import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import FormUsers from "../shared/FormUsers.js"


export default function Expense(){
    const [userData, setUserData] = useState({
        value: "",
        description: ""
    });
    
    let navigate = useNavigate();

    function handleForm(e){
        setUserData(
            {...userData,
            [e.target.name]: e.target.value
            }
        )
    };
    function salveExpense(e){
        e.preventDefault();
        const token = localStorage.getItem("token");

        const config = {
            headers : {
                "Authorization": `Bearer ${token}`
            }
        };

        
        const promise = axios.post("https://driven-myywallet.herokuapp.com/expense", userData, config);
        promise.then(response => {
            console.log(response.data);
            navigate("/mywallet");
        })
        .catch(error =>{
            console.log(error.response);
        });
    }
    console.log(userData);
    return (
        <Container>
            <FormUsers onSubmit={salveExpense}>
                <input onChange={handleForm} value={userData.value} name="value" type="text" placeholder="Valor"></input>
                <input onChange={handleForm} value={userData.description} name="description" type="text" placeholder="Descrição"></input>
                <button onClick={salveExpense}>Salvar saída</button>
            </FormUsers>
        </Container>
    );
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