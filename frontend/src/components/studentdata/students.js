import axios from 'axios'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useState,useEffect } from "react";
import { api } from '../actions/api';

export const StudentData=()=>{
    const [data,setData]=useState([])

    const featchData=async()=>{
         await axios.post(api + "/students")
         .then((res)=>{
            setData(res?.data)
         })
         .catch((e)=>
        console.log(e))
        }
        useEffect(() => {
            featchData()
        }, [])

         return(
            <TableContainer>
  <Table variant='simple'>
    <TableCaption>STUDENT DETAILS</TableCaption>
    <Thead>
      <Tr>
        <Th>NAME</Th>
        <Th>EMAIL</Th>
        <Th>PASSWORD</Th>
        <Th>PHONE NUMBER</Th>
      </Tr>
    </Thead>
    <Tbody>{
        data?.map((val) => (
      <Tr>
        <Td >{val.Name}</Td>
        <Td >{val.Email}</Td>
        <Td >{val.Password}</Td>
        <Td >{val.Mobilenumber}</Td>
      </Tr>
        )
    )
    }
    </Tbody>
  </Table>
</TableContainer>

         )

    }
