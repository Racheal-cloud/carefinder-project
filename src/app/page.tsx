"use client";

import Image from "next/image";
import Link from "next/link";
import How from "@/app/offer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Testimonial from "@/app/review";
import Newsletter from "@/app/newsletter";
import FrontView from "@/app/frontview";
import { Text, Button, Box, VStack, Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-12">
      <FrontView />

      <Flex
        w="full"
        align="center"
        justify="center"
        data-aos="fade-up"
        px={6}
        direction={{ base: "column", md: "row" }}
      >
        <VStack
          align="start"
          spacing={4}
          maxW="lg"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize="2xl" fontWeight="bold" textAlign="center" justifyContent="center" m="auto">
            Welcome to CareFinder
          </Text>
          <Text fontSize="lg" color="gray.600" textAlign="center" justifyContent="center">
            We are here to guide you through the process of selecting the very
            best healthcare facilities. Book appointments with ease as your
            health is our priority, and we&apos;re here to connect you to the
            best care available.
          </Text>
          <Link href="/getstarted">
            {" "}
            <Button colorScheme="blue" size="lg" textAlign="center" justifyContent="center" rounded="full" m="auto" >
              Click More
            </Button>
          </Link>
        </VStack>

        <Box flexShrink={0} w="full" maxW="md" mt={{ base: 8, md: 0 }}>
          <Image
            src="/images/home.jpg"
            alt="Healthcare"
            layout="responsive"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </Box>
      </Flex>
      <How />
      <Testimonial />
      <Heading>Why CareFinder?</Heading>
      <Flex
        w="full"
        align="center"
        justify="center"
        data-aos="fade-up"
        px={6}
        direction={{ base: "column", md: "row" }}
      >
        <VStack
          align="start"
          spacing={4}
          maxW="lg"
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize="lg" color="gray.600" textAlign="center" justifyContent="center">
            We specialise in working with customers and their families for
            accessible healthcare information. Our Objective is to address the
            challenge of finding reliable hospital information. With the aid of
            our platform, we aim to bridge the gap between healthcare providers
            and patients by providing accurate and up-to-date hospital data.
          </Text>
        </VStack>

        <Box flexShrink={0} w="full" maxW="md" mt={{ base: 8, md: 0 }}>
          <Image
            src="/images/image4.jpg"
            alt="Healthcare"
            layout="responsive"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </Box>
      </Flex>

      <Box w="full" data-aos="fade-up">
        <Newsletter />
      </Box>
    </main>
  );
}
