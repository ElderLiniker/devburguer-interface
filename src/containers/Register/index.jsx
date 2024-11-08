import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { toast } from "react-toastify"// biblioeteca para notificar ao usuario se a senha esta correta ou incorreta//







import { Link } from "./styles"; //esse link vem la dos estilos que eu criei, mais ele vem la do recat router dom//
import { Container, Form, Inputcontainer, Leftcontainer,  Rightcontainer, Title } from "./styles"
import Logo from "../../assets/logo.png"

import { Button } from "../../components/button"





export function Register() {


    const navigate = useNavigate()

    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("Digite um email válido").required("O email é obrigatório"),
        password: yup.string().min(6, "A senha tem que ter pelo menos 6 caracteres").required("Digite uma senha"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "AS senhas devem ser iguais").required("Confirme sua senha")  //onof para comparar se as senhas sao iguais//
    })
        .required()



    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = async data => {

try {
    const { status } = await api.post("/users",   //aqui esta vindo la da api, pegando da rota de session - e isso e uma biblioetca//
        {
            name: data.name,
            email: data.email,
            password: data.password,
        },
        {
            validateStatus: () => true,
        },
    )


    if (status === 200 || status === 201) {
setTimeout(() => {
    navigate("/login")//para caso dê sucesso ao criar conta ir para tela de login//
    
},2000);
        toast.success("Conta criada com sucesso")
    }
    else if (status === 400) {
        toast.error("Email já cadastrado, faça login para continuar.")}

        else{
throw new Error()
        }

    }


    
 catch (error) {

    toast.error("🥹 Falha no sistema ! Tente novamente")
    
}


        
     
    }

    return (
        <Container>
            <Leftcontainer>
                <img src={Logo} />
            </Leftcontainer>
            <Rightcontainer>
                <Title>
                    Criar conta
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Inputcontainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />

                        <p>{errors?.name?.message}</p>

                    </Inputcontainer>

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


                    <Inputcontainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>

                    </Inputcontainer>





                    <Button type="submit">
                        Criar conta
                    </Button>
                    <p>Já possui conta? <Link to="/login" >Clique aqui.</Link></p>
                </Form>

            </Rightcontainer>
        </Container>

    )
}
