import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#3d3d3d" : "#d5d5d5";
  const textColor = colorMode === "dark" ? "gray.300" : "gray.700";
  const highlightColor = "#7b66ff";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "#",
        formData
      );
      setShowPopup(true);
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <section id="contact">
    
      <Box
        minH={"100%"}
        align={"center"}
        justify={"space-around"}
        pt={50}
        pb={{ base: "50", md: "100" }}
        bgColor={bgColor}
      >
         {/* Personal Information Section */}
        {/* <Text
            mb={3}
          fontSize={{ base: "2xl", md: "4xl", sm: "5xl" }}
          fontWeight={"light"}
          textShadow={"0 0 15px #7b66ff"}
        >
          Personal Information
        </Text>
       
        <Box
          //   bg={"#7b66ff"}
          mb={10}
          p={6}
          rounded="lg"
          bg={useColorModeValue("white", "#292929")}
          boxShadow="lg"
          maxW="600px"
          textAlign="left"
        >
          <Flex>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={highlightColor}
              mb={1}
              minW="150px"
            >
              Name :
            </Text>
            <Text
              ml={100}
              fontSize="lg"
              fontWeight="semibold"
              color={textColor}
            >
              Pradeep Yadav
            </Text>
          </Flex>

          <Flex>
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
              +91 8433162392
            </Text>
          </Flex>

          <Flex>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={highlightColor}
              mb={1}
              minW="150px"
            >
              E-Mail :
            </Text>
            <Text
              ml={100}
              fontSize="lg"
              fontWeight="semibold"
              color={textColor}
            >
              dashwar.pradeep@gmail.com
            </Text>
          </Flex>
        </Box> */}

        <Box>
          <Text
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight={"bold"}
            textShadow={"0 0 15px #7b66ff"}
          >
            Contact Me
          </Text>
          <Box
            h={1}
            w={"30%"}
            margin={"auto"}
            bg={"#7b66ff"}
            borderRadius={"full"}
            mb={5}
          ></Box>
          <br />
        </Box>

        <Box
          rounded={"4xl"}
          bg={useColorModeValue("white", "#292929")}
          boxShadow={"lg"}
          maxW={{ base: "90%", md: "600px" }}
          p={8}
          borderRadius="20px"
          overflow="hidden"
        >
          <Stack spacing={4}>
            <Box fontSize={"20px"} fontWeight={"bold"} color={textColor}>
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </Box>
            <form onSubmit={handleSubmit}>
              <FormControl id="fullName">
                <FormLabel fontSize={"13px"} color={textColor}>
                  NAME
                </FormLabel>
                <Input
                  placeholder="Full Name"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <FormControl id="email">
                <FormLabel fontSize={"12px"} color={textColor}>
                  EMAIL
                </FormLabel>
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <br />
              <FormControl id="message">
                <FormLabel fontSize={"12px"} color={textColor}>
                  MESSAGE
                </FormLabel>
                <Textarea
                  placeholder="Type your message"
                  h={200}
                  resize="vertical"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                mt={8}
                bg={"#7B66FF"}
                _hover={{
                  transform: "scale(1.03)",
                  boxShadow: "0 0 10px gray",
                }}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Stack>
        </Box>
      </Box>
      {showPopup && (
        <Box
          position="fixed"
          top={0}
          left="50%"
          transform="translateX(-50%)"
          bg={
            colorMode === "dark" ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)"
          }
          color={colorMode === "dark" ? "white" : "black"}
          p={4}
          borderRadius="md"
          zIndex={9999}
        >
          <Text>Thank you! We will contact you soon.</Text>
        </Box>
      )}
    </section>
  );
};

export default Contact;
