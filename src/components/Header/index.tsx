import { Icon, IconButton } from '@chakra-ui/react'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const {onOpen} = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return(
        <Flex as="header" w="100%" my="6" maxWidth={1480} mx="auto" px="6" h="20'"  mt="40px" align="center">
            { !isWideVersion && (
                <IconButton 
                aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                />
            ) }
            <Logo />

           {isWideVersion && <SearchBox />}

            <Flex aling="right" ml="auto" >
            <NotificationsNav />
            </Flex>
             <Profile  showProfileData={isWideVersion}  />
        </Flex>
    )
}