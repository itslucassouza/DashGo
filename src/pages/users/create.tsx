
import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/layout";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import {Sidebar} from '../../components/Sidebar';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const createUserFormSchema = yup.object().shape({
      bane: yup.string().required('Nome obrigatório').email('Email invalido'),
      email: yup.string().required('Email obrigatório').email('Email invalido'),
    password: yup.string().required('Senha obrigatória').min(6, 'A senha precisa no minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([ null, yup.ref('password')], 'as senha precisam ser iguais')
  })

export default function CreateUser() {

    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema )
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        console.log(values)
    }

    const {errors} = formState
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box as="form" flex="1" borderRadius={["6", "8"]} bg="gray.800" p="8" onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading size="lg" fontWeight="normal" >Criar usuário</Heading>

                <Divider my="6" borderColor="gray.700" />

                <VStack spacing="8">
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                        <Input name="name" label="Nome Completo" error={errors.name}  {...register}></Input>
                        <Input name="Email" label="Email" error={errors.email}  {...register}></Input>
                    </SimpleGrid>
                    <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
                        <Input name="password" type="password" label="Digite a senha" error={errors.password}  {...register}></Input>
                        <Input name="password_confirmation" type="password" label="Confirme a senha" error={errors.password_confirmation}  {...register}></Input>
                    </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                    <HStack spacing="4">
                        <Link href="/users/create" passHref>
                        <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                        </Link>
                        <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
                    </HStack>
                </Flex>
                </Box>
                </Flex>
                </Box>
    )
}