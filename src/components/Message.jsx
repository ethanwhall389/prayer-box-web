import { useState } from "react"
import { useEffect } from "react";

export default function Message({messageText, messageType, timeout, setMessage}) {

    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true)
        setTimeout(() => {
            setVisible(false);
            
            setTimeout(() => {
                setMessage('');
            }, 600)
        }, timeout);

    }, [timeout, messageText])

    return (
        <div className={`${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"} transition-all duration-300 min-h-screen w-screen fixed top-0 left-0`}>
            <div className={`${messageType==='error' ? "bg-red-300" : "bg-green-300"} p-4 rounded-full absolute z-40 top-12 left-1/2 -translate-x-1/2 -translate-y-1/2`}>
                <p className="">{messageText}</p>
            </div>
        </div>
    )
}