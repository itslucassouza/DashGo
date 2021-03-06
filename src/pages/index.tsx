import { Flex, Button, Stack } from '@chakra-ui/react' 
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'

type signInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email obrigatório').email('Email invalido'),
  password: yup.string().required('Senha obrigatória'),
})


export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const {errors} = formState
  
  const handleSignIn: SubmitHandler<signInFormData> = (values, event) => {
    console.log(values)
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify='center'>

     <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" 
     borderRadius="8px" flexDir="column" onSubmit={handleSubmit(handleSignIn)}>

      <Stack spacing="4">
      <Input name="email" type="email" label="E-mail" error={errors.email}  {...register}  />
      <Input name="password" type="password" label="Senha" {...register}  error={errors.password} />

      </Stack>

    <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button> 
     </Flex>
    </Flex>
  )
}
