import { useState } from "react";
import { useEffect } from "react";
function Image(){
    let [state,setState] = useState({img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqSwXQE9onxwY__FyuOMjYKoM8AaCukPcDQ&s",name:"React Js",color:"#0dcaf0"})

    useEffect(()=>{
        console.log("CallBack is called")
        document.title = `${state.name} Image Component`     // this is a side effect so it is used in the useEffect hook to perform side effect
    },[state.img])

    

    return (
       <div  >
            <h2 style={{margin:"30px auto",color:state.color}}>{state.name} Image Component</h2>
            <img src={state.img} height="300" width="200"/><br /><br />
            <button className="btn btn-info me-2" onClick={()=>{setState(
                {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqSwXQE9onxwY__FyuOMjYKoM8AaCukPcDQ&s",name:"React Js",color:"#0dcaf0"}
                )}
                }>React JS</button>
            <button className="btn btn-dark" onClick={()=>{setState({img:"https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqn59agr1g40svv6krfkz.jpg",name:"Next Js", color:"black"})}}>Next JS</button><br /><br />
       </div>
    )
}
export default Image;

