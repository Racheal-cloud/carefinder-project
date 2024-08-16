import { Box, Text, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";

export default function Offer() {
  return (
    <Box w="100%" className="bg-blue-300" py={10} px={4}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Our Offers
      </Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {sections.map((section, index) => (
          <VStack
            key={index}
            p={6}
            bg="white"
            shadow="md"
            borderRadius="md"
            alignItems="start"
          >
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {section.title}
            </Text>
            <Text color="gray.600">{section.description}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

const sections = [

  {
    title: "Sign Up",
    description: "Create an account to unlock full features.",
  },
  {
    title: "Click More",
    description: "Quickly click more and start exploring.",
  },
  {
    title: "Share",
    description: "Easily share hospital information with friends and family.",
  },
  {
    title: "Markdown Support",
    description: "Use markdown to format your notes and documents.",
  },
  {
    title: "Export Information",
    description: "Export hospital details for offline use or sharing with others.",
  },
  {
    title: "Search",
    description: "Search for preferred hospital name, address or contact within your location.",
  },

];