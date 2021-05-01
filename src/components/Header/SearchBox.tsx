import { useRef, useState } from "react";
import Icon from "@chakra-ui/icon";
import { Input } from "@chakra-ui/input";
import { Flex } from "@chakra-ui/layout";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

    const searchInputRef = useRef<HTMLInputElement>(null)


    return(
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
            ref={searchInputRef}
        /> 
    <Icon as={RiSearchLine} font-size="20" />
    </Flex>
    )
}