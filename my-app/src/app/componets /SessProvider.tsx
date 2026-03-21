import { SessionProvider } from "next-auth/react";

interface Props{
    children : React.ReactNode
}

export const SessProvider = ( props : Props) => {
    return (
        <SessProvider>
            {props.children}
        </SessProvider>
    )
}