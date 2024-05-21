import { useState } from "react";
import { Container, Text, VStack, HStack, IconButton, Box, useColorMode, useColorModeValue, Image, Button } from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  const projects = [
    {
      title: "Project One",
      description: "This is a description of project one.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwb25lfGVufDB8fHx8MTcxNjMxNTY1OHww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://github.com/yourusername/project-one",
    },
    {
      title: "Project Two",
      description: "This is a description of project two.",
      image: "https://images.unsplash.com/photo-1476459216969-94c7100f88a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwdHdvfGVufDB8fHx8MTcxNjMxNTY1OXww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "https://github.com/yourusername/project-two",
    },
  ];

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} color={color}>
      <VStack spacing={4}>
        <HStack spacing={4}>
          <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
          <IconButton aria-label="GitHub" icon={<FaGithub />} as="a" href="https://github.com/yourusername" target="_blank" />
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} as="a" href="https://linkedin.com/in/yourusername" target="_blank" />
          <IconButton aria-label="Email" icon={<FaEnvelope />} as="a" href="mailto:your.email@example.com" />
        </HStack>
        <Text fontSize="2xl">Your Name</Text>
        <Text fontSize="lg">Your Profession</Text>
        <Text>Welcome to my personal website. Here are some of my projects:</Text>
        {projects.map((project, index) => (
          <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" bg={useColorModeValue("white", "gray.700")}>
            <Image src={project.image} alt={project.title} />
            <Box p={4}>
              <Text fontSize="xl" fontWeight="bold">
                {project.title}
              </Text>
              <Text>{project.description}</Text>
              <Button as="a" href={project.link} target="_blank" mt={2} colorScheme="teal">
                View Project
              </Button>
            </Box>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
