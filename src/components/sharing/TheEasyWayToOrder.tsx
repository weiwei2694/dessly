import React from 'react'
import Heading from '../sub-components/Heading'
import { cn } from '@/lib/utils'
import { steps } from '@/constants'

import { Ubuntu } from 'next/font/google'
const font = Ubuntu({ subsets: ["latin"], weight: ["500", "700"] })

const TheEasyWayToOrder = () => {
    return (
        <div className="py-10 lg:py-20 bg-primary-300 rounded-xl">
            <div className="grid place-items-center">
                <div className="flex flex-col items-center space-y-5 sm:space-y-10">
                    <div className="text-center">
                        <Heading title="The Easy Way To Order" />
                    </div>
                    <div className={cn("relative font-bold", font.className)}>
                        <div className="relative z-10 flex flex-col md:flex-row gap-10">
                            {steps.map((step, index) => (
                                <div key={step.title} className="flex flex-row md:flex-col gap-5 items-center">
                                    <div className="grid place-items-center w-[50px] h-[50px] rounded-full bg-primary-200">
                                        {index + 1}
                                    </div>
                                    <h5 className="font-normal tracking-[140%]">
                                        {step.title}
                                    </h5>
                                </div>
                            ))}
                        </div>
                        <div className="absolute z-0 top-0 md:top-[25px] left-[25px] md:left-[30px] h-full md:h-[1px] w-[1px] md:w-[450px] bg-primary-700" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheEasyWayToOrder