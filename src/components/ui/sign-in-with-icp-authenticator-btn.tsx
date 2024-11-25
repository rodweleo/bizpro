"use client"

import { Button } from "./button";
import Image from "next/image"
import { useAuth } from "./use-auth-client";

export default function SignInWithIcpAuthenticatorBtn() {
    const auth = useAuth();

    const login = () => {
        if (auth) {
            auth.signInWithIcpAuthenticator();
        }

    }
    return (
        <Button type="button" onClick={() => login()} className="w-full flex items-center" variant="outline">
            <Image src="/logos/ICP Logo.svg" alt="ICP Authenticator" width={25} height={25} />
            <span className="font-semibold">SIGN IN WITH  ICP AUTHENTICATOR</span>
        </Button>
    )
}