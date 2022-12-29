import { HStack, Icon, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import {
  SiReact,
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiChakraui,
  SiMysql,
} from "react-icons/si";

function Skills() {
  return (
    <VStack>
      <Text
        fontSize={"4xl"}
        mb="5"
        fontWeight={"bold"}
        bgGradient={"linear(to-r , cyan.400 , cyan.500 , cyan.600)"}
        bgClip="text"
      >
        Skills{" "}
      </Text>
      <SimpleGrid columns={[3, 3, 6, 6]} spacing="12">
        <Icon as={SiReact} boxSize="50" />
        <Icon as={SiExpress} boxSize="50" />
        <Icon as={SiTypescript} boxSize="50" />
        <Icon as={SiPrisma} boxSize="50" />
        <Icon as={SiChakraui} boxSize="50" />
        <Icon as={SiMysql} boxSize="50" />
      </SimpleGrid>
    </VStack>
  );
}

export default Skills;
