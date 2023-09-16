"use client"
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { routes } from "@/constants";

import { Poppins } from "next/font/google";
import Link from "next/link";
const font = Poppins({ subsets: ["latin"], weight: "600" });

const MobileNavbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) return null;

    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="top" className="p-0">
                <div className="bg-white shadow w-full h-full p-10">
                    <ul className="flex flex-col gap-y-10">
                        {routes.map(route => (
                            <Link
                                href={route.href}
                                key={route.title}
                                className={font.className}
                            >
                                {route.title}
                            </Link>
                        ))}
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar