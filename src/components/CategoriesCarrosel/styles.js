import { Link } from "react-router-dom";
import styled from "styled-components";





export const Container = styled.div`
.carousel-item{
    padding-right:40px;
}

.react-multiple-carousel__arrow--left {

   

left: 15px;

top: 15px;

}

.react-multiple-carousel__arrow--right {





top: 15px;

}

padding-left: 40px;
`



export const Title = styled.h2`
font-size: 32px;
color: ${(props)=> props.theme.purple};
padding-bottom:12px;
position: relative;
text-align: center;
font-weight:800;

margin-bottom:40px;
margin-top: 20px;



&::after{
    content: "";
    position: absolute;

    bottom:0;
    width: 56px;
    height: 4px;
    background-color: ${(props)=> props.theme.purple};

    left: 50%;
    transform:translateX(-50%);
}



`




export const ContainerItens = styled.div`
background-image: url("${(props)=> props.imageUrl}");
background-position:center;
background-size:cover;

border-radius: 20px;



display: flex;
align-items: center;
padding: 20px 10px;
width: 100%;
height: 250px;




`


export const CategoryButton = styled(Link)`


color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 500;
    margin-top: 50px;
    text-decoration: none;


    &:hover {
        background-color: ${(props)=> props.theme.purple};

        color: #fff;
    }
    
    
    
    `

