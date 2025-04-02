import { useForm } from "react-hook-form";


import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { userUser } from "../../hooks/UserContext";

import { api } from "../../services/api";

import { toast } from "react-toastify"// biblioeteca para notificar ao usuario se a senha esta correta ou incorreta//








import { Container, Form, Inputcontainer, Leftcontainer, Link, Rightcontainer, Title } from "./styles"   //
import Logo from "../../assets/logo.png"

import { Button } from "../../components/button"





export function Login() {

    const navigate = useNavigate()

    const {putUserData} = userUser()


    const schema = yup.object({
        email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
        password: yup.string().min(6, "A senha tem que ter pelo menos 6 caracteres").required("Digite uma senha"),
    }).required();



    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {

        const {data:userData} = await toast.promise(api.post("/session",   //aqui esta vindo la da api, pegando da rota de session - e isso e uma biblioetca//
            {       
            email: data.email,
            password: data.password,
        }),
            {

                pending: 'Verificando seus dados',

                success: {
                    render(){


                        setTimeout(() => {

                            if(userData?.admin){
                                navigate("/admin/pedidos")
                            } else{
                                navigate("/home")
                            }
                            
                            
                        }, 2000);
                      return 'Seja Bem-vindo(a) 👌'
                    },
                },
                
                error: 'Email ou Senha Incorretos🤯',

            },


        )

        putUserData(userData)


    }

    return (
        <Container>
            <Leftcontainer>
                <img src={Logo} />
            </Leftcontainer>
            <Rightcontainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br></br>
                    Acesse com seu <span> Login e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Inputcontainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />

                        <p>{errors?.email?.message}</p>

                    </Inputcontainer>

                    <Inputcontainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>

                    </Inputcontainer>


                    <Button type="submit">
                        Entrar
                    </Button>
                    <p>Não possui conta? <Link to= "/cadastro">Clique aqui.</Link></p>
                </Form>

            </Rightcontainer>
        </Container>

    )
}


//local storage: basicamente para guardar suas infrmações, e gravar no seu computador.









//
