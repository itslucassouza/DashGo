import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import {Sidebar} from '../../components/Sidebar';

export default function UserList() {
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                    <Heading size="lg" fontWeight="normal">Listagem de usuários</Heading>
                    <Button as="a" size="sm" fontSize="20" colorScheme="pink" leftIcon={<Icon as={RiAddLine} />} >Criar novo</Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                             <Tr>
                                 <Th px="6" color="gray.300" width="8" >
                                     <Checkbox colorScheme="pink" />
                                 </Th>
                                 <Th>Usuário</Th>
                                 <Th>Data de cadastro</Th>
                                 <Th w="8"></Th>
                             </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                <Checkbox colorScheme="pink" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Lucas Souza</Text>
                                        <Text fontSize="sm" color="gray.300">lucasvini193@hotmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>
                                    04, de novembro de 1980
                                </Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />} >Editar</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
        
            </Flex>
        </Box>
    );  
}