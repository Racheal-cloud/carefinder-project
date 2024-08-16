"use client";
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  // FormControl,
  // FormLabel,
  // FormErrorMessage,
  // FormHelperText,
  // Container,
  // List,
  // ListItem,
} from "@chakra-ui/react";
// import { FiMapPin } from "react-icons/fi";
// import { FiPhone } from "react-icons/fi";
// import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <Box as="section" id="contact">
      <Box
        backgroundImage="url('/images/Consult.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
         width="100vw" 
         height="100vh"
        className="container mx-auto px-4 md:px-0"
      >
      <Flex justify="center" bg="white" width="100%" maxWidth="500px">
       <Box
          className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8"
          data-aos="fade-left"
          mt="50px"
        >
          <Heading
            as="h1"
            size="xl"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contact Us
          </Heading>
          <Text className="mb-4 text-sm md:text-base">
          Feel free to reach out to us with any questions or inquiries
          </Text>
          <form method="POST" action="" className="space-y-5 py-6">
            <Input
              type="text"
              name="name"
              placeholder="Name"
              className="form-input"
              size="md"
              focusBorderColor="blue.500"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="form-input"
              size="md"
              focusBorderColor="blue.500"
            />
            <Textarea
              name="message"
              cols={20}
              rows={10}
              placeholder="Message"
              className="form-input"
              size="md"
              focusBorderColor="blue.500"
            />
            <Flex justify="center" pt={2}>
              <Button
                type="submit"
                colorScheme="blue"
                size="md"
                className="w-36 md:w-48"
              >
                Send
              </Button>
            </Flex>
          </form>
        </Box>
       </Flex>

      {/* <Flex px="40px" mt="100px" gap="40px">
        <Box
          flex="1"
          
          py="20px"
        >
          <Heading as="h1" size="3xl" fontWeight="bold">
            Get in Touch
          </Heading>
          <Text>
            Feel free to reach out to us with any questions or inquiries. We &apos;re
            here to assist you and provide the information you need. Your
            satisfaction is our priority, and we look forward to hearing from
            you.
          </Text>

          <List spacing="3" mt="32px">
            <ListItem >
              <Flex alignItems="center">
                <Box as={FiMapPin} size="50" mr="2" spacing="4" />
                <Text as="h2">Location</Text>
                <span>Lagos, Nigeria</span>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Box as={FiPhone} size="50" mr="2" />
                <span>Contact</span>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <Box as={MdOutlineMailOutline} size="50" mr="2" />
                <span>Email</span>
              </Flex>
            </ListItem>
          </List>
        </Box>
        <Box flex="1">
          <Flex direction="column" width="100%" maxWidth="500px">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Name" mb="5px" />
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="Email" mb="5px" />
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                cols={20}
                rows={10}
                placeholder="Message"
                className="form-input"
                size="md"
                focusBorderColor="blue.500"
              />
              <Flex justify="center" pt={2}>
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="md"
                  className="w-36 md:w-48"
                >
                  Send
                </Button>
              </Flex>
            </FormControl>
          </Flex>
        </Box>
      </Flex> */}
      </Box>
    </Box>
  );
}

export default Contact;
