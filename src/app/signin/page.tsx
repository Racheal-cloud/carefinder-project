"use client";

import {  useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import { Button, Input, Text, Box, VStack, Image } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Aos from "aos";
import "aos/dist/aos.css";

const SignIn: React.FC = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();
  
    const handleSignin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/clickMore");
      } catch (error: Error | any) {
        setError(error.message);
      }
    };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error : Error | any) {
      setError(error.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setError("Password reset email sent!");
    } catch (error: any) {
      setError(error.message);
    }
  };



  return (
    <Box className="flex flex-col lg:flex-row min-h-screen items-center lg:items-start mt-8 lg:justify-center">
      <Box className="hidden lg:block lg:w-1/2 p-4 mt-20">
        <Image  data-aos="fade-right" src="/images/signin.svg" alt="Sign In" boxSize="full" objectFit="cover" />
      </Box>
      <VStack
      data-aos="fade-left"
        spacing={4}
        className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto lg:w-1/2 lg:mt-36 mt-8 md:mt-28"
      >
        
        <Text className="text-2xl">Sign In</Text>
        {error && <Text color="red.500">{error}</Text>}
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="text-black bg-white w-full rounded-full" colorScheme="blue" onClick={handleSignin}>
          Sign In
        </Button>
        <Button
            variant="link"
            colorScheme="blue"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </Button>
        <Text>or</Text>
        <Button className="text-black bg-white w-full rounded-full" onClick={handleGoogleSignIn}>
          <FcGoogle />
          <span className="px-2">Sign In with Google</span>
        </Button>
        <Link href="/signup" className="hover:underline">
          New to CareFinder? Sign Up
        </Link>
        <Link href="/">
          <b>Go back to home page</b>
        </Link>
      </VStack>

    </Box>
  );
};

export default SignIn;
