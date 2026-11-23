import { useState } from 'react'
function Compteur() {
    const [count, setCount] = useState(0) 
    return( 
        <>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setCount(0)}>Reinitialiser</button>
        </>
    )
    
}

export default function App() {
    return (
    <>
    <Compteur />
    </>
    )
}