import { useColorModeValue } from "@chakra-ui/react";

const useCustomColors = () => {
  const navBackground = useColorModeValue("gray.200", "gray.700");
  return {
    navBackground,
  };
};

export default useCustomColors;
