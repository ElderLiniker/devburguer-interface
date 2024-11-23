import styled from "styled-components";


import Bannerhamburguer from "../../assets/banner-hamburguer.svg"

import Background from "../../assets/background-from.png"
import { Link } from "react-router-dom";



export const Container = styled.div`

width: 100%;
min-height:100vh;

background-color: #f0f0f0;


background: linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)), url("${Background}");


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

export const CategoryMenu = styled.div`

display: flex;
justify-content: center;
gap: 50px;

margin-top: 30px;

`


export const CategoryButton = styled(Link)`
text-decoration: none;
cursor: pointer;
background: none;
color: #9758a6;
font-size: 24px;

font-weight:500;

padding-bottom: 5px;

line-height: 20px;

border-bottom:3px solid #9758a6

;

`

export const ProductContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 60px;
padding: 40px;

justify-content: center;
max-width: 1280px;

margin: 50px auto 0;



`