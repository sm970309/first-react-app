import { useEffect, useRef } from "react";

const useFadeIn = (duration=1,delay=0) =>{
  const element = useRef();
  useEffect(()=>{
    if(element.current){
      const{current} = element;
      console.log(element)
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1;
    }
  },[])
  return typeof duration !=='number'? undefined:{ref:element, style:{opacity:0}}
}

export default useFadeIn;