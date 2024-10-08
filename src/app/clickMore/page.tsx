"use client";
import React from "react";
import SearchComponent from "../../app/search";
import { Text, Heading, Box } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FrontView from "../../app/frontview";

const ClickMore: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Box data-aos="zoom-in-up">
      <FrontView />
      <Box p={4} textAlign="center" className="bg-gray-200">
        <Heading as="h2" size="lg">
          Care Finder
        </Heading>
        <Text fontSize="lg">Find the nearest hospital to you</Text>
        <Text fontSize="lg">
          Easily search for hospitals based on location and other criteria.
        </Text>
        <SearchComponent />
      </Box>
    </Box>
  );
};

export default ClickMore;

