import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import {
  SiReact,
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiChakraui,
  SiNodedotjs,
} from "react-icons/si";
import React from "react";

function Profile() {
  return (
    <Flex
      // bg={"tomato"}
      w={"100%"}
      direction={["column", "column", "row", "row"]}
      // maxW={{ base: "100vh", md: "130vh", lg: "130", xl: "130" }}
    >
      <Box alignSelf={"center"} mt={10} py="16" px={"32"}>
        <Heading fontWeight={"extrabold"} color="cyan.500" fontSize={"4xl"}>
          1+
        </Heading>
        <Text fontSize={"2xl"} color="gray.400">
          {" "}
          years of Experience{" "}
        </Text>
      </Box>
      <Box alignSelf={"center"} py="16" px={"32"}>
        <Text fontWeight={"bold"} fontSize="2xl">
          Web app Developer{" "}
        </Text>
        <Flex direction={["column", "column", "row", "row"]} mt={8}>
          <Flex
            justify="flex-end"
            bg="blue.400"
            direction="column"
            rounded="xl"
            w="30vh"
            h="30vh"
            cursor="pointer"
            mt={4}
            p="4"
          >
            <Flex gap={2}>
              <Icon as={SiReact} color="whitesmoke" h="10" w="10" />
              <Icon as={SiChakraui} color="whitesmoke" h="10" w="10" />
            </Flex>

            <Text fontSize="xl" color="whitesmoke" fontWeight="semibold">
              Front-end Apps
            </Text>
          </Flex>
          <Flex
            justify="flex-end"
            bg="gray.100"
            direction="column"
            rounded="xl"
            w="30vh"
            h="30vh"
            mt={4}
            cursor="pointer"
            ml={[0, 0, 4, 4]}
            p="4"
            color={"black"}
            _hover={{ bg: "teal.400", color: "whitesmoke" }}
          >
            <Flex gap={4}>
              <Icon as={SiExpress} h="10" w="10" />
              <Icon as={SiPrisma} h="10" w="10" />
              <Icon as={SiNodedotjs} h="10" w="10" />
            </Flex>
            <Text fontSize="xl" fontWeight="semibold">
              Back-end Apps
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
