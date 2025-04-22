"use client";
import Link from "next/link";

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Sobre', href: '#', current: false },
    { name: 'Nossa Produção', href: '#', current: false },
    { name: 'Contato', href: '#', current: false },
]  

export function Footer() {
    return(
    <div className=" mx-auto p-4 flex items-center justify-between bg-amber-300">
        <div className="flex items-center space-x-3">
            <ul className="flex flex-row gap-4">
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