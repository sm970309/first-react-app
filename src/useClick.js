import { useRef,useEffect } from "react";
const useClick = (onClick) =>{
    const element = useRef();
    useEffect(()=>{
      if(element.current){
        element.current.addEventListener("click",onClick);
      }
      return () => element.current.removeEventListener("click",onClick);
    });
    
    if (typeof onClick !== "function"){
      return undefined;
    }
    else{
      return element
    }
  }
  export default useClick;