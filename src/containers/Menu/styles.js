import styled from "styled-components";


import Bannerhamburguer from "../../assets/banner-hamburguer.svg"



export const Container = styled.div`

width: 100%;
min-height:100vh;

background-color: #f0f0f0;


`

export const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 480px;

position: relative;

background:url("${Bannerhamburguer}") no-repeat;
background-color: #1f1f1f;
background-position: center;
background-size:cover;
width: 100%;

h1{

    font-family: "Road Rage", sans-serif;
font-size: 80px;
line-height: 65px;
color: #fff;
position: absolute;
right: 20%;
top: 30%;

span{
    display: block;
    color: #fff;

    font-size: 20px;

    font-weight:400;
    font-family: "Poppins", sans-serif;
}

}

`

export const CategoryMenu = styled.div``

export const ProductContainer = styled.div``