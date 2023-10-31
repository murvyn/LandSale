import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  Stack,
  Link,
} from "@chakra-ui/react";
import useCustomColors from "../hooks/useCustomColors";
import ColorModeSwitch from "./ColorModeSwitch";
import { useNavigate } from "react-router-dom";

const links = [
  { id: 1, name: "Discover", path: '/' },
  { id: 2, name: "Find", path: '/search' },
  { id: 3, name: "Pricing", path: 'pricing' },
  { id: 4, name: "About Us", path: 'about-us' },
  { id: 5, name: "Contact", path: 'contact' },
];

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { navBackground } = useCustomColors();
  const navigate = useNavigate()
  return (
    <>
      <Box marginY={7}>
        <Container minWidth={{ md: "90vw", lg: "80vw" }}>
          <HStack
            justifyContent={"space-between"}
            spacing={3}
            paddingBottom={4}
          >
            <IconButton
              aria-label="Open Menu"
              onClick={isOpen ? onClose : onOpen}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              size={"md"}
              display={{ md: "none" }}
              bg={"none"}
            />
            <HStack
              as={"nav"}
              display={{ base: "none", md: "flex" }}
              spacing={{ lg: "6", md: "1", xl: "7" }}
              justifyContent={"space-between"}
            >
              {links.map((link) => (
                <Box rounded={"md"} key={link.id} fontWeight={"bold"}>
                  {link.name === "Discover" ? (
                    <Link
                      fontSize={25}
                      _hover={{
                        textDecoration: "none",
                        bg: "none",
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                    onClick={() => navigate(link.path)}
                      px={2}
                      py={1}
                      _hover={{
                        textDecoration: "none",
                        bg: navBackground,
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </Box>
              ))}
            </HStack>
            <ColorModeSwitch />
            <Box>
              <Text display={"inline"}>Login</Text>
              <Button colorScheme="whatsapp" borderRadius={0} marginStart={3}>
                Sign Up
              </Button>
            </Box>
          </HStack>
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {links.map((link) => (
                  <Box
                    as="a"
                    px={2}
                    py={1}
                    rounded={"md"}
                    display={"flex"}
                    _hover={{
                      textDecoration: "none",
                      bg: navBackground,
                    }}
                    href={"#"}
                    key={link.id}
                    onClick={() => {
                      onClose()
                      navigate(link.path)}}
                  >
                    {link.name}
                  </Box>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Container>
        <hr />
        
      </Box>
    </>
  );
};

export default NavBar;
