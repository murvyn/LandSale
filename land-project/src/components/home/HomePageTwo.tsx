import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import home2 from "../../assets/home2.png";

const HomePageTwo = () => {
  return (
    <Container minWidth={"80vw"} marginY={"10rem"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        columnGap={"6rem"}
        rowGap={"2rem"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <VStack alignItems={"start"} alignSelf={"center"}>
          <Box textAlign={"start"}>
            <Heading
              width={{ sm: "20rem", md: "30rem", lg: "19rem", xl: "auto" }}
              paddingY={4}
              fontWeight={"semibold"}
              fontFamily={"Poppins"}
              fontSize={{
                xl: "4vw",
                lg: "4vw",
                md: "3.7rem",
                sm: "2rem",
                base: "2rem",
              }}
            >
              Introducing Ghanaland
            </Heading>
            <Text mb={8} width={"18rem"} fontSize={{ xl: "20px", lg: "16px" }}>
              Join our community and own a piece of Ghana!
            </Text>
          </Box>
          <HStack>
            <Button colorScheme="whatsapp" borderRadius={0}>
              Get started
            </Button>
          </HStack>
        </VStack>

        <Image src={home2} width={{ lg: "50%", base: "100%" }} />
      </Box>
    </Container>
  );
};

export default HomePageTwo;
