import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { Box, Text, Flex, Link, Stack, Divider } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" py={10} className="mt-8">
      <Flex
        className="container mx-auto"
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        justify="space-between"
        align="flex-start"
        px={4}
        wrap="wrap"
      >
        <Stack spacing={4} flex="1" mb={{ base: 6, lg: 0 }} mr={{ lg: 10 }}>
          <Image
            src="/images/carefinderlogo.svg"
            alt="Carefinder logo"
            width={150}
            height={200}
          
          />
          {/* <Text>Call: 8109384309</Text>
          <Text>Mail: racfoconcept2001@gmail.com</Text> */}
          <Text>Follow us on Social Media</Text>
          <Flex justify="space-between" width={{ base: 'full', md: '75%' }} my={6}>
            <Link href="https://twitter.com/AjiboyeAbosede4" isExternal>
              <FaTwitter size="24" />
            </Link>
            <Link href="https://www.linkedin.com/in/abosede-omotoso-66285b115/" isExternal>
              <FiLinkedin size="24" />
            </Link>
            <Link href="https://github.com/Racheal-cloud" isExternal>
              <SiGithub size="24" />
            </Link>
            <Link href="mailto:racfoconcept2001@gmail" isExternal>
              <MdOutlineMailOutline size="24" />
            </Link>
          </Flex>
        </Stack>

        <Flex justify="space-between" flex="2" direction={{ base: 'column', md: 'row', lg: 'row' }} flexWrap="wrap">
          <Stack spacing={2} className="font-medium" flex="1" minW={{ base: "full", md: "auto" }}>
            <Text fontWeight="bold">Information</Text>
            <Link href="#">Our Mission</Link>
            <Link href="#">Our Vision</Link>
            <Link href="#">Admin</Link>
          </Stack>
          <Stack spacing={2} className="font-medium" mt={{ base: 6, md: 0 }} ml={{ base: 0, lg: 10 }} flex="1" minW={{ base: "full", md: "auto" }}>
            <Text fontWeight="bold">Useful Links</Text>
            <Link href="/about">About</Link>
            <Link href="#">Contact Us</Link>
            {/* <Link href="#">Book an Appointment</Link>
            <Link href="#">Frequently Asked Questions</Link> */}
          </Stack>
          <Stack spacing={2} className="font-medium" mt={{ base: 6, md: 0 }} ml={{ base: 0, lg: 10 }} flex="1" minW={{ base: "full", md: "auto" }}>
            <Text fontWeight="bold">Company</Text>
            <Link href="/about">About Us</Link>
            <Link href="/clickMore">Click More</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/review">Testimonial</Link>
          </Stack>
        </Flex>
      </Flex>
      <Divider my={6} />
      <Box bg="blue.500" py={2}>
        <Text textAlign="center" color="white">&copy; All rights reserved. CareFinder 2024</Text>
      </Box>
    </Box>
  );
};

export default Footer;