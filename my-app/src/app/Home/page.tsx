// Login page component
'use client';
import { useState } from "react";
import { signIn, signOut , useSession } from "next-auth/react";

export const Home = () => {
const [response ,setResponse] = useState<string | null>(null);
const {data :session ,status} = useSession()

console.log(session)

const sendHandler = async () => 
{
    console.log("Sending request to backend",session);
    const result = await fetch('${process.env.NEXT_PUBLIC_BACKEND_URL}/access', {
        method : "POST",
        headers : {
            Authorization : `Bearer ${session?.authToken}`   
        },
    });

    const res = await result.json();
    setResponse(res.data);
}
    return (
        <div>
            <h1>Login Page</h1>
             <div>Please Enter your credentials<div/>
             <div>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
             </div>
        </div>
        </div>
    )
}