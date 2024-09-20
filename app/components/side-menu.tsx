import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerTrigger,
    DrawerFooter,
    DrawerClose,
} from "@/components/ui/drawer"; // Adjust this path as necessary
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from 'react';
import { Button } from "@/components/ui/button"; // Ensure Button component is correctly imported

const SideMenu = () => {
    return (
        <div className="relative">
            <Drawer>
            <DrawerTrigger>
                    <div className="flex items-center gap-2 cursor-pointer">
                        Menu
                        <AlignJustify className="text-black opacity-100" />
                    </div>
                </DrawerTrigger>
                <DrawerContent className="bg-slate-50 p-4">
                    {/*  */}
                    <div className="flex flex-col md:flex-row gap-4 mt-4 justify-between text-3xl px-24">
                        <Link href="/" className="text-gray-600 hover:underline hover:text-[#f1b0b6]">Home</Link>
                        <Link href="/about" className="text-gray-600 hover:underline hover:text-[#f1b0b6]" >About</Link>
                        <Link href="/services" className="text-gray-600 hover:underline hover:text-[#f1b0b6]">Services</Link>
                        <Link href="/contact" className="text-gray-600 hover:underline hover:text-[#f1b0b6]">Contact</Link>
                    </div>
                    <DrawerFooter className="mt-4">
                        <DrawerClose>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default SideMenu;
