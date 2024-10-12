import { Box, Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import { personalInfo } from "../data"; // Adjust the path as necessary

const LandingSection = () => {
  const { greeting, bio1, bio2 } = personalInfo;

  return (
    <Box id="landing-section" bg="gray.100" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <VStack spacing={4}>
        <Avatar size="2xl" src="/avatar.jpg" /> {/* Update the src to the path of your photo */}
        <Heading>{greeting}</Heading>
        <Text>{bio1}</Text>
        <Text>{bio2}</Text>
      </VStack>
    </Box>
  );
};

export default LandingSection;