// Login page component
'use client';
import { useState } from "react";


export const LoginPage = () => {
const [name, setName] = useState("");
const [password, setPassword] = useState("");

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