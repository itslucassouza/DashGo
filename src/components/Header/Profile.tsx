import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData = true }: ProfileProps) {
    return(
        <Flex aling="center">
        { showProfileData && (
            <Box mr="4" text-align="right" >
            <Text>Lucas Souza</Text>
            <Text color="gray.300">lucasvini193@hotmail.com</Text>
    </Box>    
        )}

        <Avatar size="md" name="Lucas"  src="https://github.com/itslucassouza.png"/> 
    </Flex>      
    )
}