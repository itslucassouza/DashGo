import Icon from "@chakra-ui/icon";
import { Box, Link, Stack, Text } from "@chakra-ui/layout";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" aling="flex-start">
                <Box>
                <Text fontWeight="bold" color="gray.400" fontSize="small">Geral</Text>
                <Stack spacing="4" mt="8" aling="stretch">
                    <Link display="flex" aling="center" color="pink.400">
                    <Icon as={RiDashboardLine} font-size="20" />
                    <Text ml="4" fontWeight="medium">Dashboard</Text>
                    </Link>
                    <Link display="flex" aling="center" color="pink.400">
                    <Icon as={RiContactsLine} font-size="20" />
                    <Text ml="4" fontWeight="medium">Usuários</Text>
                    </Link>
                </Stack>
                </Box>

                <Box>
                <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
                <Stack spacing="4" mt="8" aling="stretch">
                    <Link display="flex" aling="center" color="pink.400">
                    <Icon as={RiInputMethodLine} font-size="20" />
                    <Text ml="4" fontWeight="medium">Formulários</Text>
                    </Link>
                    <Link display="flex" aling="center" color="pink.400">
                    <Icon as={RiGitMergeLine} font-size="20" />
                    <Text ml="4" fontWeight="medium">Automação</Text>
                    </Link>
                </Stack>
                </Box>
            </Stack>
        </Box>
    )
}