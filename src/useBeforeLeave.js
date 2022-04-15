import { useEffect } from "react";

const useBeforeLeave = (onBefore) =>{
  const handle = (event)=>{
    const {clientX} = event;
    if (clientX<=0){
      onBefore();
    }
  }
  useEffect(()=>{
    document.addEventListener("mouseleave",handle);
    return () => document.removeEventListener("mouseleave",handle);
  },[])
  if (typeof onBefore !=="function") return;
}

export default useBeforeLeave;