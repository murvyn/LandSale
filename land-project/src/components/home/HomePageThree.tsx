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
import home2 from "../../assets/home3.png";

const HomePageThree = () => {
  return (
    <Container minWidth={"80vw"} marginY={"10rem"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        columnGap={"10rem"}
        rowGap={"2rem"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Image src={home2} width={{ lg: "50%", base: "100%", xl: "50%" }} />
        <VStack alignItems={"start"} alignSelf={"center"}>
          <Box textAlign={"start"}>
            <Text fontSize={"13px"} fontWeight={"bold"}>
              Smartsave
            </Text>
            <Heading
              width={{ sm: "20rem", md: "30rem", lg: "19rem", xl: "auto" }}
              paddingY={4}
              fontWeight={"semibold"}
              fontFamily={"Poppins"}
              fontSize={{
                xl: "3vw",
                lg: "3vw",
                md: "2.5rem",
                sm: "1.5rem",
                base: "1.5rem",
              }}
            >
              All your plots are safe with us
            </Heading>
            <Text mb={8} width={"19rem"} fontSize={{ xl: "auto", lg: "16px" }}>
              We take the security of your plots seriously. GhanaLand uses
              advanced encryption protocols to protect your information. Your
              plots are safe and secure with us.
            </Text>
          </Box>
          <HStack>
            <Button borderRadius={0}>Buy now</Button>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default HomePageThree;
