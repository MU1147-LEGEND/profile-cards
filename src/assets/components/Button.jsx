/* eslint-disable react/prop-types */
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Button = ({ keys }) => {
  const [connected, setConnected] = useState(()=>{
    const storedValue = localStorage.getItem(`connection${keys}`);
    return storedValue === 'true';
  });

  const onConnect = () => {
    !connected
      ? `${toast.success("Connection request sent", { position: "top-center", pauseOnFocusLoss: false, pauseOnHover: false })}`
      : `${toast.warning("Connection removed success", { position: "top-center", pauseOnFocusLoss: false, pauseOnHover: false })}`;
    
    setConnected(!connected);
    
    localStorage.setItem(`connection${keys}`, JSON.stringify(!connected));
  }

  return (
    <>
      <button
        type="button"
        onClick={onConnect}
        className='ring-2 ring-blue-600 rounded-3xl py-3 px-6 mt-6 hover:bg-blue-600 hover:text-white transition-all duration-300 '>
        {connected
          ? "Connected"
          : "Connect"}
      </button>
    </>
  )
}

export default Button