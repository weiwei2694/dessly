import { cn } from "@/lib/utils";
import { Lora } from "next/font/google"

const font = Lora({ subsets: ["latin"], weight: "600" });

interface HeadingProps {
    title: string;
}

const Heading = ({ title }: HeadingProps) => {
  return (
    <h1 className={cn("text-neutral-900 text-3xl sm:text-5xl leading-[110%] -tracking-[2%]", font.className)}>
        {title}
    </h1>
  )
}

export default Heading