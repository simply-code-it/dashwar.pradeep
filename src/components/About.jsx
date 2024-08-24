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
  const boxBgColor = useColorModeValue("white", "#292929");

  return (
    <section id="about">
      <Box bgColor={bgColor} pb={100}>
        {/* Image Section */}
        <Box pt={10} display="flex" justifyContent="center" alignItems="center">
          <Image
            borderRadius="15px"
            boxSize={{ base: "200px", md: "250px", lg: "300px" }}
            src={pic1}
            alt="pradeep"
          />
        </Box>

        <Box textAlign="center" maxW="80%" margin="auto" pt={10}>
          <Text
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            textShadow="0 0 15px #7b66ff"
          >
            ABOUT ME
          </Text>
          <Box
            h={1}
            w="30%"
            margin="auto"
            bg="#7b66ff"
            borderRadius="full"
            mb={5}
          ></Box>
          <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology.
          </Text>
        </Box>

        <Box
          maxW={{ base: "90%", md: "50%" }}
          margin="auto"
          mt={5}
          textAlign="center"
        >
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold">
            Get to know me!
          </Text>
          <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            I'm a Fullstack Web Developer building both the front end and back
            end of Websites and Web Applications that contribute to the success
            of the overall product. Check out some of my work in the Projects
            section.
          </Text>
          <Text fontSize={{ base: "md", md: "lg", lg: "xl" }}>
            I'm open to job opportunities where I can contribute, learn, and
            grow. If you have a good opportunity that matches my skills and
            experience, don't hesitate to contact me.
          </Text>

          {/* Contact Detail Section */}
          <VStack
            mt={5}
            p={10}
            rounded="lg"
            bg={boxBgColor}
            boxShadow="lg"
            maxW={{ base: "90%", md: "50%", lg: "300px" }} // Adjusted for centering
            margin="auto" // Center the box
            textAlign="center"
            spacing={4}
          >
            <Flex flexDirection="column" align="center" w="100%" mb={3}>
              <Text fontSize="xl" fontWeight="bold" color={highlightColor}>
                Name:
              </Text>
              <Text fontSize="lg" fontWeight="semibold" color={textColor} mt={1}>
                Pradeep Yadav
              </Text>
            </Flex>

            <Flex flexDirection="column" align="center" w="100%" mb={3}>
              <Text fontSize="xl" fontWeight="bold" color={highlightColor}>
                Mobile Number:
              </Text>
              <Text fontSize="lg" fontWeight="semibold" color={textColor} mt={1}>
                +91 8433162392
              </Text>
            </Flex>

            <Flex flexDirection="column" align="center" w="100%">
              <Text fontSize="xl" fontWeight="bold" color={highlightColor}>
                E-Mail:
              </Text>
              <Text fontSize="lg" fontWeight="semibold" color={textColor} mt={1}>
                dashwar.pradeep@gmail.com
              </Text>
            </Flex>
          </VStack>

          <AnchorLink href="#contact">
            <Button
              mt={8}
              bg="#7B66FF"
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
