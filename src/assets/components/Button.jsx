import { useState } from "react";

const Button = () => {
    const [connected, setConnected] = useState(false);

  return (
    <button onClick={()=>{setConnected(true)}} className='ring-2 ring-blue-600 rounded-3xl py-3 px-6 mt-6 hover:bg-blue-600 hover:text-white transition-all duration-300 '>{connected? "Connected":"Connect"}</button>
  )
}

export default Button