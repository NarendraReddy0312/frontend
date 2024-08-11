import { Box, FormControl, FormLabel, Input, FormHelperText, Button, Heading, Flex,Text} from "@chakra-ui/react";
import axios from 'axios'
import { useState } from "react";
import { api } from "../actions/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nav=useNavigate()

    const Signin = async () => {
        try {
            const res = await axios.post(api + "/signin", { email, password });

            if (res.data.message) {
                sessionStorage.auth=JSON.stringify(res?.data?.values)
                console.log(res?.data?.values);
                alert("Login successfully");
                nav('/students')
            } 
            else if (res.data.error) {
                if (res.data.error === "Email not found. Please sign up.") {
                    alert("Email not found. Please sign up.");
                    window.location.href = "/signup"; // Redirect to signup page if email is not found
                } else if (res.data.error === "Incorrect password. Please try again.") {
                    alert("Incorrect password. Please try again.");
                } else {
                    alert("An error occurred during login. Please try again later.");
                }
            }
        } catch (e) {
            console.log(e);
            alert("An error occurred while attempting to sign in. Please try again later.");
        }
    }; 
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundColor="orange"
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
          Sign In
        </Heading>
        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl mb={6}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password"  onChange={(e)=>setPassword(e.target.value)} />
          <FormHelperText>Make sure your password is strong.</FormHelperText>
        </FormControl>
        <Button colorScheme="teal" size="lg" width="full" onClick={Signin}>
          Sign In
        </Button><br></br>
        <Text>dont't have an account? <Link to ={"/signup"} >
        <u style={{ color: 'blue' }} >signup</u></Link></Text>
      </Box>
    </Flex>
  );
};

