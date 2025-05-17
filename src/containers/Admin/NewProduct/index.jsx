import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from "@phosphor-icons/react"

import { Container, Form, Label, InputGroup, LabelUpload, Select, ErrorMessage, SubmitButton, Input, ContainerCheclbox } from "./styles"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../../services/api"
import { toast } from "react-toastify"


const schema = yup
    .object({
        name: yup.string().required("Digite o nome do produto"),
        price: yup.number().required("Digite o preço do produto").typeError("Digite o preço do produto"),
        category: yup.object().required("Escolha uma categoria"),
        offer:yup.bool(),
        file: yup.mixed()
        .test("required", "Escolha um arquivo para continuar", (value) => {
            return value && value.length > 0;
        })
        .test("fileSize", "Carregue um arquivo até 3MB", (value) => {
            if (!value || value.length === 0) return true; // Deixa para o "required" lidar com ausência
            return value[0].size <= 3 * 1024 * 1024; // 3MB = 3145728 bytes
        })
        .test("fileType", "Carregue apenas imagem PNG ou JPEG", (value) => {
            if (!value || value.length === 0) return true;
            return ["image/jpeg", "image/png"].includes(value[0].type);
        })
    

    })




export function NewProduct() {
    const [fileName, setfileName] = useState(null)
    const [categories, setCatgeories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get("/categories")




            setCatgeories(data)
        }
        loadCategories()
    }, [])


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const productFormData = new FormData()

        productFormData.append("name", data.name)
        productFormData.append("price", data.price * 100)
        productFormData.append("category_id", data.category.id)
        productFormData.append("file", data.file[0])
        productFormData.append("offer", data.offer)


        await toast.promise(api.post("/products", productFormData),{

            pending: "Adiconando o produto...",
            success:"Produto criado com sucesso!",
            error:"Falha ao adicionar produto, tente novamente"
        })
        setTimeout(() => {
            navigate("/admin/produtos")  
          }, 2000);
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}  >
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload >
                        <Image />
                        <input type="file" {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setfileName(value?.target?.files[0]?.name)
                                register("file").onChange(value)
                            }}
                        />
                        {fileName || "Upload do Produto"}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>

                    <Controller
                        name="category"
                        control={control}
                        render={({field}) => (
                            <Select

                                {...field}
                                options={categories}
                                getOptionLabel={category => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Categorias"
                                menuPortalTarget={document.body}




                            />

                        )} />

                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                     <InputGroup>
                                <ContainerCheclbox>
                <input type="checkbox"  {...register("offer")}/>
                <Label>Produto em Oferta ?</Label>
                
                
                
                                </ContainerCheclbox>
                                </InputGroup>

                <SubmitButton>Adiconar produto</SubmitButton>

            </Form>


        </Container>
    )
}