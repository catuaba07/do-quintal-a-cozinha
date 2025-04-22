"use client";
import Link from "next/link";

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Sobre', href: '#', current: false },
    { name: 'Nossa Produção', href: '#', current: false },
    { name: 'Contato', href: '#', current: false },
]  

export function Navbar() {
    return(
    <div className="sm:px-6 lg:px-8 sm:flex bg-amber-300 h-20 w-full">
        <div className="flex flex-wrap gap-4 justify-start items-center">
            <div>
            <a href="#"><img src="/assets/img/logo.png"></img></a>
            </div>
            <ul className="flex flex-row gap-4">
                <li className="text-gray-600 hover:text-gray-800 hover:underline">home</li>
                <li className="text-gray-600 hover:text-gray-800 hover:underline">sobre</li>
                <li className="text-gray-600 hover:text-gray-800 hover:underline">nossa produção</li>
                <li className="text-gray-600 hover:text-gray-800 hover:underline">contato</li>
            </ul>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
    )
}