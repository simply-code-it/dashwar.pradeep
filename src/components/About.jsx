import React from "react";
import {
  Button,
  Box,
  Text,
  Image,
  Flex,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pic1 from "../assets/pic1.png";

const About = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#2c2c2c" : "#cecece";
  const highlightColor = colorMode === "dark" ? "#7b66ff" : "#4a4a4a";
  const textColor = colorMode === "dark" ? "#ffffff" : "#000000";

  // Use useColorModeValue correctly
  const boxBgColor = useColorModeValue("white", "#292929");

  return (
    <section id="about">
      <Box bgColor={bgColor} pb={100}>
        {/* image section */}
        <Box pt={10} display="flex" justifyContent="center" alignItems="center">
          <Image borderRadius="15px" boxSize="300px" src={pic1} alt="rahul" />
        </Box>
        <Box textAlign={"center"} maxW={"80%"} margin={"auto"} pt={10}>
          <Text
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight={"bold"}
            textShadow={"0 0 15px #7b66ff"}
          >
            ABOUT ME
          </Text>
          <Box
            h={1}
            w={"30%"}
            margin={"auto"}
            bg={"#7b66ff"}
            borderRadius={"full"}
            mb={5}
          ></Box>
          <Text fontSize={{ sm: "l", md: "l", lg: "xl" }}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </Text>
        </Box>
        <Box maxW={"50%"} margin={"auto"} mt={5} textAlign={"center"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Get to know me!
          </Text>
          <Text fontSize={{ sm: "l", md: "l", lg: "xl" }}>
            I'm a Fullstack Web Developer building both the front end and back
            end of Websites and Web Applications that contribute to the success
            of the overall product. Check out some of my work in the Projects
            section.
          </Text>
          <Text fontSize={{ sm: "l", md: "l", lg: "xl" }}>
            I'm open to job opportunities where I can contribute, learn, and
            grow. If you have a good opportunity that matches my skills and
            experience, don't hesitate to contact me.
          </Text>

          <VStack
            mt={5}
            p={6}
            rounded="lg"
            bg={boxBgColor}
            boxShadow="lg"
            maxW="100%"
            textAlign="left"
            // justify={center}
            // justify="center"

          >
            <Flex  >
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={highlightColor}
                ml={2}
                minW="180px"
                
              >
                Name :
              </Text>
              <Text
                ml={100}
                fontSize="lg"
                fontWeight="semibold"
                color={textColor}
              >
                Rahul Maurya
              </Text>
            </Flex>

            <Flex >
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={highlightColor}
                mb={1}
                minW="150px"
              >
                Mobile Number :
              </Text>
              <Text
                ml={100}
                fontSize="lg"
                fontWeight="semibold"
                color={textColor}
              >
                +91 7011101778
              </Text>
            </Flex>

            <Flex  >
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={highlightColor}
                ml={5}
                // minW="150px"
              >
                E-Mail :
              </Text>
              <Text
                ml={100}
                fontSize="lg"
                fontWeight="semibold"
                color={textColor}
              >
                rahulmaurya1036@gmail.com
              </Text>
            </Flex>
            
          </VStack>

          <AnchorLink href="#contact">
            <Button
              mt={8}
              bg={"#7B66FF"}
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 10px gray",
              }}
            >
              Contact Me
            </Button>
          </AnchorLink>
        </Box>
      </Box>
    </section>
  );
};

export default About;
