import { useEffect, useState } from "react"

// export const UseStateFunction=()=>{
//     const[count,setcount]=useState(0)
//     const Count =()=>{
//         setcount(count+1)
//     }
//     // useEffect(()=>{
//     //     setcount(count+1)
//     // },)
//     return(
//         <>
//         <h2>my count is : {count}</h2>
//         <button onClick={()=>Count()}>update count</button>

//         </>
//     )
   
// }
export const UseStateFunction=()=>{
    const[name,setname]=useState("enter your name")
    const Name =()=>{
        setname(name)
    }
    // useEffect(()=>{
    //     setcount(count+1)
    // },)
    return(
        <>
        <h2>my name is : {name}</h2>
        <button onClick={()=>Name("narendra")}>narendra</button>
        <button onClick={()=>Name("nithin")}>nithin</button>
        </>
    )
   
}