import Image from "next/image"
import { brands } from "@/constants"

const Brand = () => {
    return (
        <div className="py-5 lg:py-10">
            <div className="flex items-center justify-evenly sm:justify-between flex-wrap gap-x-4 space-y-4">
                {brands.map(brand => (
                    <div key={brand.alt} className="relative w-[224px] h-[121px]">
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            fill
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Brand    