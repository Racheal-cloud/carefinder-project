import { Text, Button, Heading, Container, Stack } from "@chakra-ui/react";
import Link from "next/link";

const error404Page: React.FC = () => {
  return (
    <Container my={150} mx={"auto"} py={50} px={50} maxW={800}>
      <Heading fontSize="xl">Error404</Heading>
      <Heading mb={3.5}>Lost in space</Heading>
      <Text mb={4}>the page you are looking for is unavailable!</Text>
      <Stack spacing={4} direction={{ base: "column", md: "row" }}>
        <Link href="/">
          <Button colorScheme="purple" size="lg">
            Go Back to Home
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" colorScheme="purple" size="lg">
            Contact Us
          </Button>
        </Link>
      </Stack>{" "}
    </Container>
  );
};
