import {
    Box,
    Button,
    Container,
    HStack,
    Heading,
    Image,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import home1 from "../../assets/Image (1).png";
  
  const HomePageOne = () => {
    return (
      <Container minWidth={"80vw"} marginTop={'6rem'}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          columnGap={'6rem'}
          rowGap={'2rem'}
          flexDirection={{base: 'column', lg: 'row'}}
        >
          <VStack alignItems={"start"} >
            <Box textAlign={"start"}>
              <Text fontSize={"13px"} fontWeight={"bold"}>
                -Start your journey today
              </Text>
              <Heading
                paddingY={4}
                fontWeight={"semibold"}
                fontFamily={"Poppins"}
                fontSize={{xl: "5.5vw", lg: '4vw', md: '5rem', sm: '3rem', base: '3rem'}}
              >
                The best way to find your dream plot.
              </Heading>
              <Text mb={8} fontSize={{xl: "20px", lg: '16px'}}>Explore available plots in Ghana</Text>
            </Box>
            <HStack>
              <Button colorScheme="whatsapp" borderRadius={0}>
                Search now
              </Button>
              <Button>View details</Button>
            </HStack>
          </VStack>
  
          <Image src={home1} width={{lg: "50%", base: '100%'}} />
        </Box>
      </Container>
    );
  };
  
  export default HomePageOne;
  