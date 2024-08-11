import { Box, FormControl, FormLabel, Input, FormHelperText, Button, Heading, Flex,Text } from "@chakra-ui/react";
import axios from 'axios'
import { useState } from "react";
import { api } from "../actions/api";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [name,setName]=useState()
  const [mobilenumber,setMobileNumber]=useState()
  const [dateofbirth,setDateofbirth]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()

  const Signup = async () => {
    try {
        const res = await axios.post(api + "/signup", { name, mobilenumber, dateofbirth, email, password });

        if (res.data.message) {
            console.log(res?.data?.values);
            alert("Signup successful");
            window.location.href = '/signin'; // Redirect to the home page after successful signup
        } 
        else if (res.data.error) {
            if (res.data.error === "Email already exists. Please enter another email.") {
                alert("Email already exists. Please enter another email.");
            } 
            else {
                alert(res.data.error); // Handle other errors (e.g., "All fields are required.")
            }
        } 
        else {
            alert("Unknown error. Please try again.");
        }
    } 
    catch (e) {
        console.log(e);
        alert("An error occurred during signup. Please try again later.");
    }
};

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="black"
      px={4}
    >
      <Box
        width={{ base: "100%", sm: "400px", md: "400px" }}
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        backgroundColor="white"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Sign Up
        </Heading>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Mobile Number</FormLabel>
          <Input type="number" placeholder="Enter your Mobile number"  onChange={(e)=>setMobileNumber(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Date of Birth</FormLabel>
          <Input type="date" onChange={(e)=>setDateofbirth(e.target.value)} />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)}/>
          <FormHelperText>Make sure your password is strong.</FormHelperText>
        </FormControl>
        <Button colorScheme="teal" size="lg" width="full" onClick={Signup}>
          Sign Up
        </Button>
        <Text>already have an account? <Link to ={"/signin"}> <u>signin!</u></Link></Text>
      </Box>
    </Flex>

  );
}