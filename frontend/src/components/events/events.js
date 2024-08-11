export const Events=()=>{
    const ChangeName=()=>{
        alert("success")
        console.log("its working")
    }
    return(
        <>
        <button onClick={()=>ChangeName()}>click me</button><br></br><br></br>
        <button onMouseDown={()=>ChangeName()}>down click me</button><br></br><br></br>
        <button onClickCapture={()=>ChangeName()}>cap click me</button><br></br><br></br>
        <button onMouseOver={()=>ChangeName()}>over click me</button><br></br><br></br>
        <button onDoubleClick={()=>ChangeName()}>double click me</button><br></br><br></br>
        <button onMouseleave={()=>ChangeName()}>click me</button>
        </>
    )
}