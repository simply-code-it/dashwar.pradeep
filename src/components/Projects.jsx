import React from "react";
import { Box, Text, Image, Link, Button, Flex } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useColorMode } from "@chakra-ui/color-mode";
import todo_list from "../assets/Projects/todo_list.png";
import Viatours from "../assets/Projects/Viatours.png";
import Dmart from "../assets/Projects/Dmart.png";
import weekend_planner from "../assets/Projects/weekend_planner.png";

const projectsData = [
  {
    key: 'weekend_planner',
    imageSrc: weekend_planner,
    title: 'Weekend Planner',
    description:
      'A React app for planning and managing weekend trips with user authentication and data visualization.',
    siteLink: 'https://my-weekend-planner.netlify.app/',
    codeLink: 'https://github.com/rmauryaa/-Samsung-Saviors_058',
  },
  {
    key: 'Dmart',
    imageSrc: Dmart,
    title: 'Dmart Clone',
    description:
      'A clone of the DMart website, showcasing an e-commerce platform with responsive design.',
    siteLink: 'https://syntax-saadhana-2345.netlify.app/',
    codeLink: 'https://github.com/Abdullaabdulazeez/Syntax-Saadhana-2345',
  },
  {
    key: 'Viatours',
    imageSrc: Viatours,
    title: 'Viatours Figma',
    description:
      'A responsive recreation of Viatours’ interface using HTML and CSS, mirroring the original Figma design.',
    siteLink: 'https://figma-syntax-saadhana-2345.netlify.app/',
    codeLink: 'https://github.com/Abdullaabdulazeez/Syntax-Saadhana-2345',
  },
  {
    key: 'todo_list',
    imageSrc: todo_list,
    title: 'Todo-List',
    description:
      'A JavaScript to-do list app with task prioritization and Git version control for collaboration.',
    siteLink: 'https://github.com/rmauryaa/todo_list',
    codeLink: 'https://github.com/Abdullaabdulazeez/Syntax-Saadhana-2345',
  },
];


const Projects = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#2c2c2c" : "#cecece";
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <section id="projects">
      <Box textAlign="center" pt={100} pb={100} bgColor={bgColor}>
        <Text
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          textShadow={"0 0 15px #7b66ff"}
        >
          My Projects
        </Text>
        <Box
          h={1}
          w={"30%"}
          margin="auto"
          bg="#7b66ff"
          borderRadius="full"
          mb={5}
        ></Box>
        <br />
        <Box w="80%" margin="auto">
          <Slider {...settings}>
            {projectsData.map((project) => (
              <Box
                key={project.key}
                borderColor="gray.200"
                margin="auto"
                display="flex"
                flexDirection="column"
                alignItems="center"
                maxW={{ base: "100%", md: "80%", lg: "80%" }}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  borderRadius={"0.8rem"}
                />
                <br />
                <Text fontWeight="bold" fontSize="2xl">
                  {project.title}
                </Text>
                <Text>{project.description}</Text>
                <Flex justify="center">
                  <Link href={project.siteLink} target="_blank">
                    <Button
                      mt={8}
                      mb={8}
                      mr={8}
                      bg="#7B66FF"
                      _hover={{
                        transform: "scale(1.1)",
                        boxShadow: "0 0 10px gray",
                      }}
                    >
                      Visit Site
                    </Button>
                  </Link>
                  <Link href={project.codeLink} target="_blank">
                    <Button
                      mt={8}
                      mb={8}
                      bg="#7B66FF"
                      _hover={{
                        transform: "scale(1.1)",
                        boxShadow: "0 0 10px gray",
                      }}
                    >
                      Visit Code
                    </Button>
                  </Link>
                </Flex>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </section>
  );
};

export default Projects;
