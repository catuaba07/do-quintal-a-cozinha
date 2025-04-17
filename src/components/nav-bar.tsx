"use client";

import { useRouter } from "next/router";
import type React from "react";

export function navBar() {
    const navBar = () => {
        const navItems = [
            {name: "Home", href:"/"},
            { name: "Sobre", href: "/sobre" },
            { name: "Nossa Produção", href: "/producao" },
        ]
        return(
            <>
            <nav>
                <div className=""></div>
                <div className="">Home</div>
                <div>Sobre</div>
            </nav>
            </>
        )
    }

}