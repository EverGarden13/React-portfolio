import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import { AlertProvider } from "./context/alertContext"; // Adjust the path as necessary

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header />
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;