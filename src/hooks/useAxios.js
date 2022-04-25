import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts,axiosInstance = defaultAxios) =>{
    const [state,setState] = useState({
        loading:true,
        data:null
    });
    const refetch = () =>{
        setState({
            ...state,
            loading:true,
            data:null
        })
        setTrigger(new Date())
    }
    const [trigger,setTrigger] = useState(0);
    useEffect(()=>{
        axiosInstance(opts).then(data =>{
            setState({
                ...state,
                loading:false,
                data
            })
        }).catch(error =>{
            setState({...state,loading:false,error})
        })
    },[trigger])
    if (!opts.url){
        return;
    }
    
    return {...state,refetch};
}

export default useAxios;