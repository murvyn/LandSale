import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface PhotoProps {
  url: string;
  id: number;
}

const Find = () => {
  const [photos, setPhoto] = useState<PhotoProps[]>([]);
  useEffect(() => {
    const retreive = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const filteredData = res.data.filter(
        (photo: PhotoProps) => photo.id >= 1 && photo.id <= 50
      );
      setPhoto(filteredData);
    };
    retreive();
  }, []);
  return (
    <>
      <Flex gap={10} px={200}>
        <Box textAlign="left"  width={"xl"}>
          <Heading mb={6} fontSize={'3xl'} fontWeight={'bold'}>Filter Options</Heading>
          <Accordion  allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Plot Type
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                <Button>Click here</Button>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Size(in acres)
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                <Button>Click here</Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Price range
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                <Button>Click here</Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Availability
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                <Button>Click here</Button>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Location
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel textAlign="left" pb={4}>
                <Button>Click here</Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Grid templateColumns="repeat(4, 1fr)" >
            {photos.map((photo) => (
              <GridItem>
                <Card>
                  <CardBody textAlign={"start"}>
                    <Image key={photo.id} width={"100%"} src={photo.url} />
                    <Text mt={5}>Residential Plots</Text>
                    <Button mt={5}>Contact</Button>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default Find;
