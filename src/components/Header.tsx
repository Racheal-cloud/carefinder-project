"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/firebase";
import { useState } from "react";
import React from "react";
import {
  Button,
  Box,
  Flex,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header: React.FC = () => {
  const [user] = useAuthState(auth);
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(auth);
    router.push("/");
  };

  const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names.map((n) => n[0]).join("");
    return initials.toUpperCase();
  };

  return (
    <Box as="nav" className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md shadow-md z-10 bg-[#8B779A]">
      <Flex
        className="container mx-auto px-4 py-4"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo */}
        <Text className="mx-4">
          <Image
            src="/images/carefinderlogo.svg"
            alt="Carefinder logo"
            width={150}
            height={200}
            onClick={() => router.push("/")}

          />
        </Text>

        {/* Hamburger Icon for Mobile */}
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Box>

        {/* Navigation Links */}
        <Flex
          as="ul"
          listStyleType="none"
          justifyContent="center"
          flex="1"
          display={{ base: "none", md: "flex" }}
        >
          <Box as="li" mx={3}>
            <Link href="/" className="hover:underline hover:text-blue-500">Home</Link>
          </Box>
          <Box as="li" mx={3}>
            <Link href="/about" className="hover:underline hover:text-blue-500">About</Link>
          </Box>
          <Box as="li" mx={3}>
            <Link href="/contact" className="hover:underline hover:text-blue-500">Contact</Link>
          </Box>
          <Box as="li" mx={3}>
            <Link href="/admin" className="border-2 p-1 hover:bg-black hover:text-white">Dashboard</Link>
          </Box>
        </Flex>

        {/* Login/Signup Buttons */}
        <Flex display={{ base: "none", md: "flex" }}>
          {user ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar size="sm" name={user.displayName || "User"} src={user.photoURL || ""}>
                  {!user.photoURL && getInitials(user.displayName || "User")}
                </Avatar>
              </MenuButton>
              <MenuList>
                <Link href="/user" passHref>
                  <MenuItem as="a">My profile</MenuItem>
                </Link>
                <MenuItem className="text-red-500" onClick={handleSignOut}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
              <Link href="/signin" className="border-2 px-3 py-2 rounded-3xl text-blue-500 border-blue-500 mx-1">Log In</Link>
              <Link href="/signup" className="border-2 px-3 py-2 rounded-3xl bg-blue-500 border-blue-500 text-white hover:bg-white hover:text-blue-500 mx-1">Signup</Link>
            </>
          )}
        </Flex>
      </Flex>

      {/* Mobile Navigation Menu */}
      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: "none" }}>
          <Flex as="ul" listStyleType="none" flexDirection="column" alignItems="center">
            <Box as="li" m={3}>
              <Link href="/" className="hover:underline hover:text-blue-500" onClick={onToggle}>Home</Link>
            </Box>
            <Box as="li" m={3}>
              <Link href="/about" className="hover:underline hover:text-blue-500" onClick={onToggle}>About</Link>
            </Box>
            <Box as="li" m={3}>
              <Link href="/contact" className="hover:underline hover:text-blue-500" onClick={onToggle}>Contact</Link>
            </Box>
            <Box as="li" m={3}>
              <Link href="/admin" className="border-2 p-1 hover:bg-black hover:text-white" onClick={onToggle}>Dashboard</Link>
            </Box>
            <Box>
              {user ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded="full"
                    variant="link"
                    cursor="pointer"
                    minW={0}
                  >
                    <Avatar size="sm" name={user.displayName || "User"} src={user.photoURL || ""}>
                      {!user.photoURL && getInitials(user.displayName || "User")}
                    </Avatar>
                  </MenuButton>
                  <MenuList>
                    <Link href="/user" passHref>
                      <MenuItem as="a" onClick={onToggle}>My profile</MenuItem>
                    </Link>
                    <MenuItem className="text-red-500" onClick={handleSignOut}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Flex flexDirection="column" alignItems="center">
                  <Link href="/signin" className="border-2 px-3 py-2 rounded-3xl text-purple-600 border-purple-600 m-2" onClick={onToggle}>Log In</Link>
                  <Link href="/signup" className="border-2 px-3 py-2 rounded-3xl bg-purple-600 border-purple-600 text-white hover:bg-white hover:text-purple-600 m-2" onClick={onToggle}>Signup</Link>
                </Flex>
              )}
            </Box>
          </Flex>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;