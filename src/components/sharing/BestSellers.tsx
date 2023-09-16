"use client";
import Image from "next/image"
import Heading from "../sub-components/Heading"
import { Button } from "../ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { cn } from "@/lib/utils"
import { bestsellers } from "@/constants"
import { useState, useEffect, useRef } from "react";

import { Ubuntu } from "next/font/google"
import { ChevronLeft, ChevronRight } from "lucide-react";
const font = Ubuntu({ weight: ["400", "500"], subsets: ['latin'] })

const BestSellers = () => {
    const [isMutation, setIsMutation] = useState(false);
    const bestSellers = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMutation(true);
    }, [])

    if (!isMutation) return null;

    function nextPreviousButton(type: string) {
        const { current } = bestSellers;
        if (!current) return null;

        if (type === "next") current.scrollLeft += 300;
        if (type === "prev") current.scrollLeft -= 300;
    }
    return (
        <div className="py-10 lg:py-20">
            <div className="flex justify-between items-start">
                <Heading title="Bestsellers" />
                <Button variant="primary" className="w-fit">See All</Button>
            </div>

            {/* TODO: sliders */}
            <div className="relative">
                <div ref={bestSellers} className="mt-5 w-full overflow-x-auto">
                    <div className="flex my-5 min-w-[1000px] w-full justify-between items-start space-x-4">
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
                                    <CardTitle className="cursor-pointer w-fit">
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
                                                <span className="text-danger-500 line-through">
                                                    Rp. {best.subPrice}
                                                </span>
                                            )}
                                        </h5>
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="lg:hidden absolute top-[50%] -translate-y-[50%] left-0 right-0 flex justify-between px-5 md:px-10">
                    <Button onClick={() => nextPreviousButton('prev')} className="backdrop-blur rounded-full w-[40px] h-[40px] p-0">
                        <ChevronLeft />
                    </Button>
                    <Button onClick={() => nextPreviousButton('next')} className="rounded-full w-[40px] h-[40px] p-0">
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BestSellers