import { HStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../data"; // Adjust the path as necessary
import { useEffect, useRef } from "react";

const Header = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const headerRef = useRef();
  let lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      headerRef.current.style.transform = "translateY(-200px)";
    } else {
      headerRef.current.style.transform = "translateY(0)";
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box ref={headerRef} as="header" bg="black" color="white" p={4} transition="transform 0.3s ease-in-out">
      <HStack justify="space-between">
        <HStack>
          {socials.map((social) => (
            <Link key={social.name} href={social.url} isExternal>
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>
        <HStack>
          <Link href="/#projects-section" onClick={(e) => handleClick(e, "projects-section")}>
            Projects
          </Link>
          <Link href="/#contactme-section" onClick={(e) => handleClick(e, "contactme-section")}>
            Contact Me
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;