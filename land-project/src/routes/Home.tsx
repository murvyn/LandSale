import { Container } from "@chakra-ui/react";
import HomePageOne from "../components/home/HomePageOne";
import HomePageTwo from "../components/home/HomePageTwo";
import HomePageThree from "../components/home/HomePageThree";

const Home = () => {
  return (
    <Container minWidth={"80vw"}>
      <HomePageOne />
      <HomePageTwo />
      <HomePageThree />
    </Container>
  );
};

export default Home;
