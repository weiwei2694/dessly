"use client";
import Image from "next/image"
import Heading from "../sub-components/Heading"
import { Button } from "../ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"
import { bestsellers } from "@/constants"
import { useState, useEffect } from "react";

import { Ubuntu } from "next/font/google"
const font = Ubuntu({ weight: ["400", "500"], subsets: ['latin'] })

const BestSellers = () => {
    const [isMutation, setIsMutation] = useState(false);

    useEffect(() => {
        setIsMutation(true);
    }, [])

    if (!isMutation) return null;

    return (
        <div className="py-10 lg:py-20">
            <div className="flex justify-between items-start">
                <Heading title="Bestsellers" />
                <Button variant="primary" className="w-fit">See All</Button>
            </div>

            {/* TODO: sliders */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4 mt-10 gap-x-10">
                {bestsellers.map(best => (
                    <Card key={best.alt} className={cn("break-inside-avoid w-fit flex font-normal rounded-xl", font.className)}>
                        <CardHeader className="space-y-3">
                            <Image
                                width={255}
                                height={255}
                                alt={best.alt}
                                src={best.src}
                                className="object-contain rounded-xl w-[255px]"
                            />
                            <CardTitle>
                                <h3 className="text-neutral-900 text-xl font-medium">{best.alt}</h3>
                            </CardTitle>
                            <CardDescription className="space-y-2">
                                <div className="flex items-center gap-x-2">
                                    <div className="relative w-[24px] h-[24px]">
                                        <Image src="/star.png" alt="Star" fill />
                                    </div>
                                    <h5 className="text-neutral-500 flex gap-x-1 text-sm">
                                        4.5
                                        <span className="text-neutral-300">
                                            (325)
                                        </span>
                                    </h5>
                                </div>
                                <h5 className="text-neutral-500 flex gap-x-2 text-sm">
                                    Rp. {best.price}
                                    {best.subPrice && (
                                        <span className="text-danger-500">
                                            Rp. 1.097.500
                                        </span>
                                    )}
                                </h5>
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default BestSellers