import Icon from "@chakra-ui/icon";
import { Link as ChakraLink, Text, LinkProps as chackraLinksProps } from "@chakra-ui/layout";
import { ElementType } from "react"; 
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends chackraLinksProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({icon, children, href, ...rest} : NavLinkProps) {
    return(
        <ActiveLink  href={href} passHref>
        <ChakraLink display="flex" aling="center" color="pink.400"  {...rest}>
            <Icon as={icon} font-size="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}