import Image from "next/image"
import { cn } from "@/lib/utils";
import { footers } from "@/constants";

import { Ubuntu } from "next/font/google"
import { Button } from "../ui/button";
const font = Ubuntu({ subsets: ['latin'], weight: ["400", "500"] });

const Footer = () => {
    return (
        <footer className={cn("py-10 lg:py-20", font.className)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12">
                <ul className="footer__list">
                    <li className="relative w-[109px] h-[26px]">
                        <Image src="/logo.png" alt="DressLy" fill />
                    </li>

                    <li className="footer__list-children__list">We are an online fashion store that provides a variety of the latest and trendy fashion products for men and women. We always try to provide our customers with a pleasant and easy shopping experience.</li>
                </ul>
                {footers.map(footer => (
                    <ul key={footer.title} className="footer__list">
                        <li className="footer__list-heading">{footer.title}</li>

                        <ul className="footer__list-children">
                            {footer.children.map(children => (
                                <li key={children.title} className="footer__list-children__list">{children.title}</li>
                            ))}
                        </ul>
                    </ul>
                ))}
                <ul className="footer__list">
                    <li className="footer__list-heading">Download Our App</li>

                    <ul className="footer__list-children">
                        <li className="flex flex-wrap items-center gap-2 text-neutral-100">
                            <Button variant="download">
                                <Image src="/apple.png" alt="Apple" width={19.8} height={19.8} />
                                <div className="flex flex-col items-start -space-y-2">
                                    <h6 className="text-[10px] font-normal">Download on the</h6>
                                    <h5 className="text-[14px] font-medium">App Store</h5>
                                </div>
                            </Button>
                            <Button variant="download">
                                <Image src="/playstore.png" alt="Playstore" width={19.8} height={19.8} />
                                <div className="flex flex-col items-start -space-y-2">
                                    <h6 className="uppercase text-[10px] font-normal">Get It On</h6>
                                    <h5 className="text-[14px] font-medium">Google Play</h5>
                                </div>
                            </Button>
                        </li>
                    </ul>
                </ul>
            </div>
        </footer>
    )
}

export default Footer