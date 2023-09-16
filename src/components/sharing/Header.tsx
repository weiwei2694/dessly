import { cn } from "@/lib/utils"
import Heading from "../sub-components/Heading"

import { Ubuntu } from "next/font/google"
import { Button } from "../ui/button";
import Image from "next/image";
const font = Ubuntu({ subsets: ["latin"], weight: "500" });

const Header = () => {
  return (
    <div className="py-5 sm:py-10 flex justify-between lg:flex-row flex-col-reverse lg:gap-y-0 gap-10">
      <div className="flex flex-col justify-center gap-y-5 flex-1">
        <Heading title="Discover the Latest Fashion Trends" />
        <p className={cn("text-neutral-500 leading-[140%] text-sm", font.className)}>From stylish dresses to trendy tops and must-have accessories, we have everything you need to stay on top of the latest fashion trends. Our expertly curated collection features the hottest styles from top designers, so you can always find the perfect look for any occasion. Shop now and discover your new favorite fashion pieces.</p>
        <Button variant="primary">Shop Now</Button>
      </div>
      <div className="flex justify-normal lg:justify-end">
        <Image
          alt="img-hero"
          src="/img-hero.png"
          width={596}
          height={560}
          sizes="(min-width: 1480px) 778px, (min-width: 1040px) calc(51.43vw + 27px), calc(100vw - 64px)"
        />
      </div>
    </div>
  )
}

export default Header