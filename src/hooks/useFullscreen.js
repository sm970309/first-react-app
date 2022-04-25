import { useRef, useState } from "react";

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current.requestFullscreen) {
            element.current.requestFullscreen();
            callback(true);
        }
    }
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            callback(false);
        }
    }
    return { element, triggerFull, exitFull };

}

export default useFullscreen;