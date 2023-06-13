/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  InputGroup,
  InputRightElement,
  Flex,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useState } from "react";

const HomePage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box position={"relative"}>
        <Flex
          w={"full"}
          h={"100vh"}
          backgroundImage={"url(/img/success.jpg)"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, brand.200, transparent)"}
          >
            <Container
              as={SimpleGrid}
              maxW={"7xl"}
              h="100vh"
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 10, lg: 32 }}
              py={{ base: 10, sm: 20, lg: 32 }}
            >
              <Stack spacing={{ base: 10, md: 20 }}>
                <Heading
                  lineHeight={1.1}
                  fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                >
                  Sistema Medusa
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, brand.400, brand.800)"
                    bgClip="text"
                  >
                    !<br />
                  </Text>
                  Controle{" "}
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, brand.400, brand.800)"
                    bgClip="text"
                  >
                    &
                  </Text>{" "}
                  Estoque
                </Heading>
                <Stack direction={"row"} spacing={4} align={"center"}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={{ base: "xl", md: "2xl" }}
                  >
                    Tudo para sua Empresa.
                  </Text>{" "}
                </Stack>
              </Stack>
              <Stack
                bgGradient="linear(to-r, brand.200, brand.600)"
                rounded={"xl"}
                p={{ base: 4, sm: 6, md: 8 }}
                mt={{ base: -150, sm: 2, md: 4 }}
                spacing={{ base: 8 }}
                maxW={{ lg: "lg" }}
                maxH={{ base: "sm", sm: "sm", md: "md", lg: "sm" }}
              >
                <Stack spacing={4}>
                  <Heading
                    color={"gray.800"}
                    lineHeight={1.1}
                    fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  >
                    Medusa
                  </Heading>
                  <Text
                    color={"primary.100"}
                    fontSize={{ base: "sm", sm: "md" }}
                  >
                    Sistema de controle de caixa e de estoque para empresas!
                  </Text>
                </Stack>
                <Box as={"form"} mt={10}>
                  <Stack spacing={4}>
                    <Input
                      type="text"
                      placeholder="Usuário"
                      bg={"gray.100"}
                      border={0}
                      color={"gray.500"}
                      _placeholder={{
                        color: "gray.500",
                      }}
                    />
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Senha"
                        bg={"gray.100"}
                        border={0}
                        color={"gray.500"}
                        _placeholder={{
                          color: "gray.500",
                        }}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          bg="gray.100"
                          size="sm"
                          color="brand.600"
                          onClick={handleClick}
                        >
                          {show ? <MdVisibility /> : <MdVisibilityOff />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Stack>
                  <Button
                    fontFamily={"heading"}
                    mt={8}
                    w={"full"}
                    // bgGradient="linear(to-r, red.400,pink.400)"
                    bgGradient="linear(to-r, teal.400, green.400)"
                    color={"white"}
                    _hover={{
                      bgGradient: "linear(to-r, teal.500, green.500)",
                      boxShadow: "xl",
                    }}
                  >
                    Entrar
                  </Button>
                </Box>
                form
              </Stack>
            </Container>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};
export default HomePage;
