import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        name: string;
        pic: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-3 md:grid-cols-4  lg:grid-cols-5  md:py-10 py-4",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    key={idx}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <Image src={item.pic} alt={item.name} width={200} height={200} className="drop-shadow-3xl"/>
                        <CardTitle>{item.name}</CardTitle>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-transparent border border-transparent  relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-2 flex flex-col justify-center items-center">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-black mt-4 text-center text-sm sm:text-lg ", className)}>
            {children}
        </h4>
    );
};
