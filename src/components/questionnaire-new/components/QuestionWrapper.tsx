"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"

interface QuestionWrapperProps {
    children: ReactNode
    visible?: boolean
    className?: string
    isRelated?: boolean
}

export default function QuestionWrapper({
    children,
    visible = true,
    className = "",
    isRelated = false,
}: QuestionWrapperProps) {
    return (
        <AnimatePresence initial={false}>
            {visible && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 16,
                        height: 0,
                    }}
                    animate={{
                        opacity: isRelated ? 0.75 : 1,
                        y: 0,
                        height: "auto",
                    }}
                    exit={{
                        opacity: 0,
                        y: -10,
                        height: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut",
                    }}
                    className={`overflow-visible ${className}`}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}