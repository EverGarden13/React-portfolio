import { SimpleGrid, Box } from "@chakra-ui/react";
import Card from "./Card"; // Adjust the path as necessary

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/project1.jpg", // Update the path to your thumbnail image
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/project2.jpg", // Update the path to your thumbnail image
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "/project3.jpg", // Update the path to your thumbnail image
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <Box id="projects-section" bg="gray.300" minH="100vh" p={8}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;