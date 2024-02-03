import { useState } from "react";

const Display = () => {
    let newTime=new Date().toLocaleTimeString();
    const[current,setCurrent]=useState(newTime);
    const newCurrent=()=>{
        newTime=new Date().toLocaleTimeString();
        setCurrent(newTime);
    };
    setInterval(newCurrent,1000);
  return (
    <>
      <div className="bg-black flex flex-col w-full h-screen justify-center items-center" >
          <h1 className="text-center font-bold text-8xl pb-1 text-red-600 font-ProtestRevolution">{current}</h1>
        </div>
    </>
  );
}

export default Display;
