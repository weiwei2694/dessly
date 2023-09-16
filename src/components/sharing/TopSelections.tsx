import Image from "next/image"
import Heading from "../sub-components/Heading";
import { selections } from "@/constants";

import { Lora } from "next/font/google"
import { cn } from "@/lib/utils";
const font = Lora({ subsets: ['latin'], weight: "600" });

const TopSelections = () => {
    return (
        <div className="py-10 lg:py-20 flex flex-col gap-y-10">
            <Heading title="Top Selections" />

            {/* TODO: fix bug pada image */}
            <div className="flex justify-between items-start flex-wrap space-y-4 gap-x-4">
                {selections.map(selection => (
                    <div key={selection.alt} className="relative overflow-hidden rounded-xl">
                        {/* TODO: fix bug pada gambar */}
                        <Image src={selection.src} alt={selection.alt} width={391} height={391} />

                        <div className="absolute inset-0 bg-neutral-500/50 flex justify-center items-end">
                            <h5 className={cn("text-neutral-100 text-2xl leading-[110%] -tracking-[2%] mb-14", font.className)}>
                                {selection.alt}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopSelections