import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

export function Header() {
    return(
        <Flex as="header" w="100%" my="6" maxWidth={1480} mx="auto" px="6" h="20'"  mt="40px" align="center">

            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                DashGo
                <Text as="span" marginLeft="1" color="pink.500">.</Text>
            </Text>

            <Flex as="label" 
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input  color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="buscar na plataforma"
                    _placeholder={{ color: 'gray.400'}}
                /> 
            <Icon as={RiSearchLine } font-size="20" />
            </Flex>

            <Flex
            aling="right"
            ml="auto"
            mr="10px"
            pr="10px"
            pf="10px"
            py="1"
            color="gray.300"
            borderRight="1px"
            borderColor="gray.400"
            >
                <HStack spacing="4" >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

            </Flex>
              <Flex aling="center">
                <Box mr="4" text-align="right">
                        <Text>Lucas Souza</Text>
                        <Text color="gray.300">lucasvini193@hotmail.com</Text>
                </Box>     

                <Avatar size="md" name="Lucas"  src="https://github.com/itslucassouza.png"/> 
            </Flex>      
        </Flex>
    )
}