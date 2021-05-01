import { Button } from "@chakra-ui/button";
import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registerPerPages?: number;
    currentPage?: number;
    onPageChange?: (page: number) => void;
}
const siblingsCount = 1;

function generatePagesArray(from: number, to:number){
    return[...new Array(to - from)]
    .map((_, index) => {
        return from + index + 1;
    })
    .filter(page => page > 0)
}

export function Pagination({ 
    totalCountOfRegisters,
    registerPerPages = 10,
    currentPage = 1,
    onPageChange,
 }: PaginationProps) {
    const lastPage = Math.floor(totalCountOfRegisters / registerPerPages);

    const previusPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

    return(
        <HStack direction={["column", "row"]} mt="8" spacing="6" justify="space-between" align="center">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

           <Stack direction="row" spacing="2">
               {currentPage > (1 + siblingsCount) && (
                   <>
                       <PaginationItem number={1} onPageChange={onPageChange} />
                       { currentPage > (2 + siblingsCount) && <Text>...</Text>}
                    </>
               )}
               {previusPages.length> 0 && previusPages.map(page => {
                   return <PaginationItem number={page} key={page} onPageChange={onPageChange} />
               })}

            <PaginationItem number={currentPage} isCurrent  onPageChange={onPageChange} />

            {
                nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
                })
            }

             {(currentPage + siblingsCount) > lastPage && (
                 <>
                 {(currentPage + 1 + siblingsCount) < lastPage && <Text>...</Text>}
                       <PaginationItem number={lastPage}  onPageChange={onPageChange}/>
                </>
               )}
           </Stack>
        </HStack>
    )
}