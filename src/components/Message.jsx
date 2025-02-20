import { useState } from "react"
import { useEffect } from "react";

export default function Message({messageText, messageType}) {

    
    return (
        <div className="flex w-full text-red-400">
            <p>{messageText}</p>
        </div>
    )
}