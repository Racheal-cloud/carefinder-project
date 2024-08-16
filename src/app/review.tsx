import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, Divider, Text, Flex } from "@chakra-ui/react";

const reviews = [
  {
    name: "Michael Johnson",
    review: "Carefinder has completely transformed the way I find healthcare facilities. It's fast, reliable, and incredibly user-friendly.",
  },
  {
    name: "Joan Raphael",
    review: "The Carefinder app is a lifesaver! I was able to quickly find a hospital near me and book an appointment with ease.",
  },
  {
    name: "Maxwell Roselina",
    review: "As someone who travels frequently, Carefinder is essential. It helps me find trusted healthcare providers no matter where I am in Nigeria.",
  },
];

export default function Testimonial() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <Box className="container mx-auto px-4 py-8">
      <Text data-aos="zoom-in" fontSize="3xl" fontWeight="bold" textAlign="center" mb={6}>
        Testimonials
      </Text>
      <Flex
        direction={{ base: "column", md: "row" }}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {reviews.map((review, index) => (
          <Box
            key={index}
            data-aos="fade-up"
            
            p={6}
            rounded="md"
            shadow="md"
            w={{ base: "full", md: "lg" }}
            m={4}
            textAlign="center"
            className="bg-blue-400"
          >
            <Text fontSize="lg" mb={4}>
            &quot;{review.review}&quot;
            </Text>
            <Divider />
            <Text fontSize="sm" mt={4} fontWeight="bold" color="gray.600">
              - {review.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}