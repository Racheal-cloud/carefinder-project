"use client";
import {
  Box,
  Heading,
  Text,
  Flex,
  List,
  ListItem,
  Link,
  VStack,
} from "@chakra-ui/react";
import FrontView from "@/app/frontview";
import Image from "next/image";
const About: React.FC = () => {
  return (
    <div>
      <FrontView />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
        <Heading as="h1" size="2xl">
          About CareFinder
        </Heading>

        <Text fontSize="lg">
          Your trusted companion in locating the nearest hospitals and
          healthcare services in your area. We understand the importance of easy
          access to quality healthcare, and our mission is to simplify the
          process of finding healthcare facilities, ensuring that you receive
          the care you need, when you need it.
        </Text>

        <Heading as="h2" size="lg">
          Our Vision
        </Heading>
        <Text fontSize="lg">
          With the growing need for accessible healthcare information,
          Carefinder was created to address the challenge of finding reliable
          hospital information. Our platform aims to bridge the gap between
          healthcare providers and patients by providing accurate and up-to-date
          hospital data. At CareFinder, we believe that everyone deserves
          convenient access to healthcare services, whether its for routine
          check-ups, emergencies, or specialized treatments. In times of urgent
          medical needs, CareFinder is here to assist you.
        </Text>

        <Heading as="h2" size="lg" className="py-2">
          Features
        </Heading>
        <Flex
          w="full"
          align="center"
          justify="center"
          px={6}
          direction={{ base: "column", md: "row" }}
        >
          <Box flexShrink={0} w="full" maxW="md" mt={{ base: 8, md: 0 }}>
            <Image
              src="/images/CareAbout.jpg"
              alt="Healthcare"
              layout="responsive"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </Box>
          <VStack
            align="start"
            spacing={4}
            maxW="lg"
            textAlign={{ base: "center", md: "left" }}
            className="px-4"
          >
            <List spacing={2} fontSize="lg">
              <ListItem>
                🔍 <strong>Search Hospitals:</strong> Easily search for
                hospitals based on location and other criteria.
              </ListItem>
              <ListItem>
                📄 <strong>Export Information:</strong> Export hospital details
                for offline use or sharing with others.
              </ListItem>
              <ListItem>
                📤 <strong>Share:</strong> Share hospital information directly
                with friends and family.
              </ListItem>
              <ListItem>
                🗺️ <strong>Map View:</strong> Visualize hospital locations on an
                interactive map.
              </ListItem>
            </List>
          </VStack>
        </Flex>

        <Heading as="h2" size="lg">
          User Benefits
        </Heading>
        <Text fontSize="lg">
          Carefinder empowers users by providing them with the tools to make
          informed decisions about their healthcare options. Whether you&apos;re
          looking for the nearest hospital, need to export hospital details for
          reference, or want to share information with loved ones, Carefinder
          has you covered.
        </Text>

        <Heading as="h2" size="lg">
          Future Plans
        </Heading>
        <Text fontSize="lg">
          We are continuously working on improving Carefinder. Future updates
          will include additional filtering options, user reviews, and a more
          comprehensive database of hospitals. Stay tuned for more exciting
          features!
        </Text>

        <Heading as="h2" size="lg">
          Contact Us
        </Heading>
        <Text fontSize="lg">
          If you have any questions, feedback, or need support, please feel free
          to{" "}
          <Link href="/contact" color="purple.500" className="hover:underline">
            contact us
          </Link>
          .
        </Text>
      </div>
    </div>
  );
};

export default About;
