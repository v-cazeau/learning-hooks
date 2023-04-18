import { useEffect, useState } from "react"

export default function Message() {
    const [message, setMessage]= useState('Initial Message')
    useEffect(() => {
        setMessage(`Component did mount`)
    }, [])
    return <h2>{message}</h2>
}