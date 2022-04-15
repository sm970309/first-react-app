import { useEffect, useState } from "react";

const useNetwork = (handleNetworkChange) => {
  console.log(window)
  const [status,setStatus] = useState(navigator.onLine);
  const handleChange = ()=>{
    if (typeof handleNetworkChange==="function"){
      handleNetworkChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }
  useEffect(()=>{
    window.addEventListener('online',handleChange);
    window.addEventListener('offline',handleChange);
    
    return () =>{
      window.removeEventListener('online',handleChange);
      window.removeEventListener('offline',handleChange);
    }
  },[])
  return status

}

export default useNetwork;