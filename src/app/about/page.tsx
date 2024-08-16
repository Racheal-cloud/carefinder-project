"use client";
import {
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import FrontView from "@/app/frontview";

const About: React.FC = () => {
  return (
    <div>
      <FrontView />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
        <Heading as="h1" size="2xl" color="blue.500">
          About CareFinder
        </Heading>

        <Text fontSize="lg" justifyContent="center" textAlign="center" mt="4">
          Your trusted companion in locating the nearest hospitals and
          healthcare services in your area. We understand the importance of easy
          access to quality healthcare.
        </Text>

        <Heading as="h2" size="lg" color="blue.500">
          Our Vision
        </Heading>
        <Text fontSize="lg" justifyContent="center" textAlign="center" mt="4">
          With the growing need for accessible healthcare information,
          CareFinder was created to address the challenge of finding reliable
          hospital information. Our platform aims to bridge the gap between
          healthcare providers and patients by providing accurate and up-to-date
          hospital data. At CareFinder, we believe that everyone deserves
          convenient access to healthcare services, whether its for routine
          check-ups, emergencies, or specialized treatments. In times of urgent
          medical needs, CareFinder is here to assist you.
        </Text>

        <Heading as="h2" size="lg" color="blue.500">
          Our Mission
        </Heading>
        <Text fontSize="lg" justifyContent="center" textAlign="center" mt="4">
          Our mission is to simplify the process of finding healthcare
          facilities, ensuring that you receive the care you need and  when you need
          it. CareFinder empowers users by providing them with the tools to make
          informed decisions about their healthcare options. Whether you&apos;re
          looking for the nearest hospital, need to export hospital details for
          reference, or want to share information with loved ones, CareFinder
          has you covered.
        </Text>

        <Heading as="h2" size="lg" justifyContent="center" textAlign="center" mt="4" color="blue.500">
          Contact Us
        </Heading>
        <Text fontSize="lg">
          For more enquiries, feedback, or support, please feel free
          to{" "}
          <Link href="/contact" color="blue.500" className="hover:underline">
            contact us
          </Link>
          .
        </Text>
      </div>
    </div>
  );
};

export default About;
