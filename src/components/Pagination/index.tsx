import { Button } from "@chakra-ui/button";
import { Box, HStack, Stack } from "@chakra-ui/layout";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return(
        <HStack direction={["column", "row"]} mt="8" spacing="6" justify="space-between" align="center">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

           <Stack direction="row" spacing="2">
            <PaginationItem number={1} isCurrent />
            <PaginationItem number={2} />
            <PaginationItem number={3} />
           </Stack>
        </HStack>
    )
}