import { useState } from "react";
import {
  Flex,
  Heading,
  IconButton,
  Spacer,
  VStack,
  useColorMode,
} from "@chakra-ui/react";

import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w={"100%"}>
        <Heading ml="8" color={`cyan.400`} fontWeight="semibold" size={"lg"}>
          Nasser
        </Heading>
        <Spacer />
        <IconButton
          ml="2"
          aria-label=""
          icon={<FaLinkedin />}
          onClick={() =>
            window.open("https://www.linkedin.com/in/nasser-alotaibi-7b0a821a2")
          }
        />{" "}
        <IconButton
          ml="2"
          aria-label=""
          icon={<FaGithub />}
          onClick={() => window.open("https://github.com/NasserNaif")}
        />
        <IconButton
          ml="8"
          aria-label=""
          icon={isDark ? <FaSun color="orange" /> : <FaMoon color="" />}
          onClick={toggleColorMode}
        />
      </Flex>
      <Header />
      <Skills />
      <Profile />
    </VStack>
  );
}

export default App;
