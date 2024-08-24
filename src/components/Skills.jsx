import React from "react";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import cssIcon from "../assets/Skills icons/css-icon.svg";
import jsIcon from "../assets/Skills icons/javascript-icon.svg";
import reactIcon from "../assets/Skills icons/react-js-icon.svg";
import gitIcon from "../assets/Skills icons/git-icon.svg";
import htmlIcon from "../assets/Skills icons/html-icon.svg";
import mongodbIcon from "../assets/Skills icons/mongodb-icon.svg";
import nodejsIcon from "../assets/Skills icons/node-js-icon.svg";
import mysqlIcon from "../assets/Skills icons/mysql-icon.svg";
import { motion } from "framer-motion";

const Skills = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#3d3d3d" : "#ffffff";
  const skillBoxStyle = {
    width: ["100%", "calc(50% - 10px)", "calc(33.33% - 10px)"],
    height: "150px",
    textAlign: "center",
    p: 2,
    my: 3,
    mx: 2,
    border: "2px",
    borderColor: "gray.400",
    margin: { base: "10px", md: "2" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    as: motion.div,
    whileHover: { scale: 0.8, rotate: 3, borderRadius: "100%" },
    whileTap: {
      scale: 0.8,
      rotate: 10,
      borderRadius: "100%",
    },
  };
  return (
    <section id="skills">
      <Box bgColor={bgColor} textAlign={"center"} pt={100} pb={100}>
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight={"bold"}
          textShadow={"0 0 15px #7b66ff"}
        >
          My Skills
        </Text>
        <Box
          h={1}
          w={"20%"}
          margin={"auto"}
          bg={"#7b66ff"}
          borderRadius={"full"}
          mb={5}
        ></Box>
        <br />
        <Text
          fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
          fontWeight={"bold"}
          color={"7b66ff"}
          textShadow={"0 0 15px #7b66ff"}
        >
          Languages & Frameworks
        </Text>
        <br />
        <Flex
          maxW={{ base: "80%", md: "60%", lg: "60%" }}
          wrap={"wrap"}
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box {...skillBoxStyle}>
            <Image src={htmlIcon} height={"50%"} />
            <Text>HTML</Text>
          </Box>
          <Box {...skillBoxStyle}>
            <Image src={cssIcon} height={"50%"} />
            <Text>CSS</Text>
          </Box>
          <Box {...skillBoxStyle}>
            <Image src={jsIcon} height={"50%"} />
            <Text>JavaScript</Text>
          </Box>

          <Box {...skillBoxStyle}>
            <Image src={reactIcon} height={"50%"} />
            <Text>React</Text>
          </Box>
        </Flex>
        <br />
        <Text
          fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
          fontWeight={"bold"}
          color={"7b66ff"}
          textShadow={"0 0 15px #7b66ff"}
        >
          Tools and Techs
        </Text>
        <br />
        <Flex
          maxW={{ base: "80%", md: "60%", lg: "60%" }}
          wrap={"wrap"}
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box {...skillBoxStyle}>
            <Image src={nodejsIcon} height={"50%"} />
            <Text>Node</Text>
          </Box>
          <Box {...skillBoxStyle}>
            <Image src={gitIcon} height={"50%"} />
            <Text>Git</Text>
          </Box>
          <Box {...skillBoxStyle}>
            <Image src={mongodbIcon} height={"50%"} />
            <Text>MongoDB</Text>
          </Box>
          <Box {...skillBoxStyle}>
            <Image src={mysqlIcon} height={"50%"} />
            <Text>MySQL</Text>
          </Box>
        </Flex>
      </Box>
    </section>
  );
};

export default Skills;
