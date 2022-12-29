import {
  Stack,
  Circle,
  useColorMode,
  Flex,
  Text,
  Box,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack>
      <Circle
        position={"absolute"}
        bg="blue.500"
        size={300}
        alignSelf="flex-end"
        opacity="0.1"
      />
      <Flex
        direction={["column", "column", "row", "row"]}
        p={[0, 0, 32, 32]}
        alignSelf="flex-start"
      >
        <Box mt={[10, 10, 0, 0]} alignItems="flex-start">
          <Text
            fontWeight={"semibold"}
            fontSize={"5xl"}
            _hover={{ textDecoration: "Underline", cursor: "pointer" }}
          >
            Hi, I'm
          </Text>
          <Text
            fontSize={["5xl", "7xl", "7xl", "7xl"]}
            fontWeight={"bold"}
            bgGradient={"linear(to-r , cyan.400 , cyan.500 , cyan.600)"}
            bgClip="text"
          >
            Nasser Naif
          </Text>
          <Text color={isDark ? "gray.200" : "gray.800"} fontWeight="semibold">
            I'm Full-stack Developer with strong knowlage in web development
          </Text>
          <Button
            mt="2"
            color={"whitesmoke"}
            bg={"cyan.600"}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/nasser-alotaibi-7b0a821a2"
              )
            }
          >
            Hire me
          </Button>
        </Box>
        <Image
          mt={[12, 12, 0, 0]}
          mb={[12, 12, 0, 0]}
          alignSelf={"center"}
          boxSize="300px"
          src="image/hero.jpg"
          borderRadius={"full"}
          boxShadow="lg"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
