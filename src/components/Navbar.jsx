import React, { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  Image,
  VStack,
  HStack,
  Text,
  useColorMode,
  Slide,
} from "@chakra-ui/react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import Favicon from "../assets/Favicon.svg";

const handleResumeDownload = () => {
  // Open the resume in a new tab
  const googleDriveFileUrl =
    "https://drive.google.com/file/d/183QknCoH7HQg4vbuli1xMdUTIIJlE3ao/view?usp=drivesdk";
  window.open(googleDriveFileUrl, "_blank");

  // Trigger the download
  const googleDriveFileDirectDownloadUrl =
    "https://drive.usercontent.google.com/download?id=183QknCoH7HQg4vbuli1xMdUTIIJlE3ao&export=download&authuser=0&confirm=t&uuid=f709ff31-787d-46f1-b77b-41e3a331ef02&at=APZUnTUGT1VLcJ81QztWFzj7cmZp:1703152097648";
  const link = document.createElement("a");
  link.href = googleDriveFileDirectDownloadUrl;
  link.setAttribute("download", "resume.pdf"); // You can specify the filename here
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link); // Clean up
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isBoxExpanded, setIsBoxExpanded] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleBox = () => {
    setIsBoxExpanded(!isBoxExpanded);
  };
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
    setScrollProgress(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      bg="#7B66FF"
      p={4}
      align="center"
      position="sticky"
      top={0}
      zIndex="sticky"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <AnchorLink href="#header">
        <Box
          w="35px"
          h="35px"
          mr={4}
          _hover={{ transform: "scale(1.04)", cursor: "pointer" }}
        >
          <Image src={Favicon}></Image>
        </Box>
      </AnchorLink>
      <AnchorLink href="#header">
        <Text
          fontSize="xl"
          fontWeight="bold"
          mr={4}
          _hover={{ transform: "scale(1.02)", cursor: "pointer" }}
          display={{ base: "none", sm: "block", md: "block" }}
        >
          Pradeep Yadav
        </Text>
      </AnchorLink>
      <Box
        display={isBoxExpanded ? "block" : "none"}
        position="absolute"
        top="105%"
        bg="#7B66FF"
        mt={10}
        borderBottomRadius="5px"
        ml={{ base: 1, md: 0 }}
        left={0}
        width="40%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        zIndex={1}
      >
        <Slide
          in={isBoxExpanded}
          animateOpacity
          direction="left"
          style={{
            zIndex: 1,
            marginTop: 80,
            left: 0,
            backgroundColor: "white",
            height: "max-content",
            overflowY: "auto",
            background: "#7B66FF",
          }}
        >
          <VStack
            spacing={4}
            align="stretch"
            textAlign={"center"}
            mt={{ base: 4, md: 0 }}
            fontWeight={"bold"}
          >
            <AnchorLink href="#header">
              <Text
                p={2}
                fontWeight={"bold"}
                color="96EFFF"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "2px",
                  borderColor: "white",
                }}
                cursor="pointer"
              >
                HOME
              </Text>
            </AnchorLink>
            <AnchorLink href="#about">
              <Text
                p={2}
                fontWeight={"bold"}
                color="96EFFF"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "2px",
                  borderColor: "white",
                }}
                cursor="pointer"
              >
                ABOUT
              </Text>
            </AnchorLink>
            <AnchorLink href="#skills">
              <Text
                p={2}
                fontWeight={"bold"}
                color="96EFFF"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "2px",
                  borderColor: "white",
                }}
                cursor="pointer"
              >
                SKILLS
              </Text>
            </AnchorLink>
            <AnchorLink href="#projects">
              <Text
                p={2}
                fontWeight={"bold"}
                color="96EFFF"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "2px",
                  borderColor: "white",
                }}
                cursor="pointer"
              >
                PROJECTS
              </Text>
            </AnchorLink>
            <AnchorLink href="#contact">
              <Text
                p={2}
                fontWeight={"bold"}
                color="96EFFF"
                _hover={{
                  textDecoration: "none",
                  borderBottom: "2px",
                  borderColor: "white",
                }}
                cursor="pointer"
              >
                CONTACT
              </Text>
            </AnchorLink>
            <Text
              onClick={handleResumeDownload}
              p={2}
              fontWeight={"bold"}
              color="96EFFF"
              _hover={{
                textDecoration: "none",
                borderBottom: "2px",
                borderColor: "white",
              }}
              cursor="pointer"
            >
              RESUME
            </Text>
          </VStack>
        </Slide>
      </Box>
      <Spacer />
      <Box display={{ base: "none", md: "block" }}>
        <HStack spacing={4} align="stretch" fontWeight={"bold"}>
          <AnchorLink href="#header">
            <Text
              p={2}
              fontWeight={"bold"}
              color="96EFFF"
              _hover={{
                textDecoration: "none",
                borderBottom: "2px",
                borderColor: "white",
              }}
              cursor="pointer"
            >
              HOME
            </Text>
          </AnchorLink>
          <AnchorLink href="#about">
            <Text
              p={2}
              fontWeight={"bold"}
              color="96EFFF"
              _hover={{
                textDecoration: "none",
                borderBottom: "2px",
                borderColor: "white",
              }}
              cursor="pointer"
            >
              ABOUT
            </Text>
          </AnchorLink>
          <AnchorLink href="#skills">
            <Text
              p={2}
              fontWeight={"bold"}
              color="96EFFF"
              _hover={{
                textDecoration: "none",
                borderBottom: "2px",
                borderColor: "white",
              }}
              cursor="pointer"
            >
              SKILLS
            </Text>
          </AnchorLink>
          <AnchorLink href="#projects">
            <Text
              p={2}
              fontWeight={"bold"}
              color="96EFFF"
              _hover={{
                textDecoration: "none",
                borderBottom: "2px",
                borderColor: "white",
              }}
              cursor="pointer"
            >
              PROJECTS
            </Text>
          </AnchorLink>
          <AnchorLink href="#contact">
            <Text
              p={2}
              fontWeight={"bold"}
              color="96EFFF"
              _hover={{
                textDecoration: "none",
                borderBottom: "2px",
                borderColor: "white",
              }}
              cursor="pointer"
            >
              CONTACT
            </Text>
          </AnchorLink>
          <Text
            onClick={handleResumeDownload}
            p={2}
            fontWeight={"bold"}
            _hover={{
              textDecoration: "none",
              borderBottom: "2px",
              borderColor: "white",
            }}
            cursor="pointer"
          >
            RESUME
          </Text>
        </HStack>
      </Box>
      <IconButton
        aria-label="Toggle Dark/Light mode"
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        isRound="true"
        onClick={toggleColorMode}
        variant="ghost"
        size="md"
        _hover={{ bg: "transparent" }}
      />

      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={toggleBox}
          variant="ghost"
          size="lg"
          borderRadius={"full"}
          aria-label="Toggle Navigation"
          _active={{ bg: "none" }}
        />
      </Box>
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </Flex>
  );
};

export default Navbar;
