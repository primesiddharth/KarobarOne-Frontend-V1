"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import {
    Check,
    ChevronDown,
    Search,
    X,
} from "lucide-react"

import {
    AnimatePresence,
    motion,
} from "framer-motion"

import type {
    QuestionConfig,
} from "../config/questionnaire-config"

interface DynamicQuestionProps {
    question: QuestionConfig
    value: string | string[] | undefined
    onChange: (
        value: string | string[]
    ) => void
    faded?: boolean
}

function FieldShell({
    question,
    nested,
    children,
}: {
    question: QuestionConfig
    nested: boolean
    children: React.ReactNode
}) {
    return (
        <div
            className={
                nested
                    ? "relative pl-6 overflow-visible"
                    : "grid gap-2.5 overflow-visible"
            }
        >
            {/* Vertical connector */}
            {nested && (
                <span
                    className="absolute left-[7px] top-0 bottom-0 w-px bg-border"
                    aria-hidden
                />
            )}

            {/* Connector dot */}
            {nested && (
                <span
                    className="absolute left-1 top-2.5 h-2 w-2 rounded-full border-2 border-background bg-border"
                    aria-hidden
                />
            )}

            <div
                className={
                    nested
                        ? "grid gap-2 overflow-visible"
                        : "grid gap-2.5 overflow-visible"
                }
            >
                <div className="flex items-start gap-2">
                    <label
                        className={
                            nested
                                ? "text-sm font-medium text-muted-foreground"
                                : "text-base font-semibold text-foreground"
                        }
                    >
                        {question.text}

                        {question.required && (
                            <span className="ml-1 text-red-500">
                                *
                            </span>
                        )}
                    </label>
                </div>

                {children}
            </div>
        </div>
    )
}

function OptionPanel({
    options,
    isMulti,
    selectedValues,
    singleValue,
    search,
    setSearch,
    onSelect,
    dropdownRef,
}: {
    question: QuestionConfig
    options: string[]
    isMulti: boolean
    selectedValues: string[]
    singleValue: string
    search: string
    setSearch: (value: string) => void
    onSelect: (option: string) => void
    dropdownRef: React.RefObject<HTMLDivElement | null>
}) {
    const filteredOptions =
        search.trim().length > 0
            ? options.filter((option) =>
                  option
                      .toLowerCase()
                      .includes(
                          search
                              .toLowerCase()
                              .trim()
                      )
              )
            : options

    return (
        <div
            ref={dropdownRef}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.12)]"
        >
            {/* Search */}
            {options.length > 6 && (
                <div className="border-b border-gray-100 bg-white p-2.5">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                        <input
                            autoFocus
                            type="text"
                            value={search}
                            onChange={(event) =>
                                setSearch(
                                    event.target.value
                                )
                            }
                            placeholder="Search options..."
                            className="h-9 w-full rounded-xl border border-gray-200 bg-gray-50/70 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 outline-none transition focus:border-[#7f915c] focus:bg-white focus:ring-2 focus:ring-[#7f915c]/20"
                        />
                    </div>
                </div>
            )}

            {/* Options */}
            <div className="max-h-56 overflow-y-auto p-1.5">
                {filteredOptions.length === 0 ? (
                    <div className="px-3 py-6 text-center text-sm text-gray-400">
                        No options found
                    </div>
                ) : (
                    filteredOptions.map(
                        (option, index) => {
                            const selected =
                                isMulti
                                    ? selectedValues.includes(
                                          option
                                      )
                                    : singleValue ===
                                      option

                            return (
<motion.button
    key={option}
    type="button"
    onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()

        onSelect(option)
    }}
                                    initial={{
                                        opacity: 0,
                                        y: -4,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.18,
                                        delay:
                                            index *
                                            0.025,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{
                                        x: 2,
                                    }}
                                    whileTap={{
                                        scale: 0.99,
                                    }}
                                    className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-all ${
                                        selected
                                            ? "border-transparent bg-[#7f915c]/10 font-medium text-[#7f915c]"
                                            : "border-transparent text-gray-700 hover:bg-gray-50"
                                    }`}
                                >
                                    {isMulti ? (
                                        <span
                                            className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border transition-all ${
                                                selected
                                                    ? "border-[#7f915c] bg-[#7f915c] text-white shadow-sm"
                                                    : "border-gray-300 bg-white group-hover:border-gray-400"
                                            }`}
                                        >
                                            {selected && (
                                                <Check className="h-3 w-3 stroke-[3]" />
                                            )}
                                        </span>
                                    ) : (
                                        <span
                                            className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border transition-all ${
                                                selected
                                                    ? "border-[#7f915c] bg-white"
                                                    : "border-gray-300 bg-white group-hover:border-gray-400"
                                            }`}
                                        >
                                            {selected && (
                                                <span className="h-2 w-2 rounded-full bg-[#7f915c]" />
                                            )}
                                        </span>
                                    )}

                                    <span
                                        className={`min-w-0 flex-1 truncate ${
                                            selected
                                                ? "font-semibold"
                                                : ""
                                        }`}
                                    >
                                        {option}
                                    </span>

                                    {selected &&
                                        !isMulti && (
                                            <Check className="h-4 w-4 shrink-0 text-[#7f915c]" />
                                        )}
                                </motion.button>
                            )
                        }
                    )
                )}
            </div>
        </div>
    )
}

export default function DynamicQuestion({
    question,
    value,
    onChange,
    faded = false,
}: DynamicQuestionProps) {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [mounted, setMounted] = useState(false)

    const triggerRef =
        useRef<HTMLButtonElement>(null)

    const dropdownRef =
        useRef<HTMLDivElement>(null)

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (faded) {
            setOpen(false)
            setSearch("")
        }
    }, [faded])

    const updatePosition = () => {
        if (!triggerRef.current) {
            return
        }

        const rect =
            triggerRef.current.getBoundingClientRect()

        const dropdownHeight = 320

        const spaceBelow =
            window.innerHeight - rect.bottom

        const top =
            spaceBelow >= dropdownHeight
                ? rect.bottom + 8
                : Math.max(
                      8,
                      rect.top -
                          dropdownHeight -
                          8
                  )

        setPosition({
            top,
            left: rect.left,
            width: rect.width,
        })
    }

    useEffect(() => {
        if (!open) {
            return
        }

        updatePosition()

        const handleScroll = () => {
            updatePosition()
        }

        const handleResize = () => {
            updatePosition()
        }

        window.addEventListener(
            "scroll",
            handleScroll,
            true
        )

        window.addEventListener(
            "resize",
            handleResize
        )

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll,
                true
            )

            window.removeEventListener(
                "resize",
                handleResize
            )
        }
    }, [open])

    useEffect(() => {
        if (!open) {
            return
        }

        const handleClickOutside = (
            event: MouseEvent
        ) => {
            const target =
                event.target as Node

            if (
                triggerRef.current?.contains(
                    target
                )
            ) {
                return
            }

            if (
                dropdownRef.current?.contains(
                    target
                )
            ) {
                return
            }

            setOpen(false)
            setSearch("")
        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        )

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            )
        }
    }, [open])

    const options =
        question.options ?? []

    const isMulti =
        question.type === "multi"

    const selectedValues = isMulti
        ? Array.isArray(value)
            ? value
            : []
        : []

    const singleValue =
        !isMulti &&
        typeof value === "string"
            ? value
            : ""

    const displayValue = isMulti
        ? selectedValues.length > 0
            ? `${selectedValues.length} selected`
            : "Select an option"
        : singleValue ||
          "Select an option"

    const hasValue = isMulti
        ? selectedValues.length > 0
        : Boolean(singleValue)

const handleSingleSelect = (
    option: string
) => {
    if (singleValue === option) {
        onChange("")
    } else {
        onChange(option)
    }

    setSearch("")
    setOpen(false)
}

    const handleMultiSelect = (
        option: string
    ) => {
        if (
            selectedValues.includes(option)
        ) {
            onChange(
                selectedValues.filter(
                    (item) =>
                        item !== option
                )
            )

            return
        }

        onChange([
            ...selectedValues,
            option,
        ])
    }

    const removeMultiValue = (
        option: string
    ) => {
        onChange(
            selectedValues.filter(
                (item) =>
                    item !== option
            )
        )
    }

    const nested = faded

    if (question.type === "text") {
        return (
            <FieldShell
                question={question}
                nested={nested}
            >
                <input
                    type="text"
                    value={
                        typeof value ===
                        "string"
                            ? value
                            : ""
                    }
                    onChange={(event) =>
                        onChange(
                            event.target.value
                        )
                    }
                    placeholder="Type your answer..."
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-sm outline-none transition hover:border-[#7f915c] focus:border-[#7f915c] focus:ring-2 focus:ring-[#7f915c]/20"
                />
            </FieldShell>
        )
    }

    if (
        question.type === "textarea"
    ) {
        return (
            <FieldShell
                question={question}
                nested={nested}
            >
                <textarea
                    value={
                        typeof value ===
                        "string"
                            ? value
                            : ""
                    }
                    onChange={(event) =>
                        onChange(
                            event.target.value
                        )
                    }
                    placeholder="Type your answer..."
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm shadow-sm outline-none transition hover:border-[#7f915c] focus:border-[#7f915c] focus:ring-2 focus:ring-[#7f915c]/20"
                />
            </FieldShell>
        )
    }

    return (
        <FieldShell
            question={question}
            nested={nested}
        >

            <button
                ref={triggerRef}
                type="button"
                onClick={() => {
                    if (!open) {
                        updatePosition()
                    }

                    setOpen(
                        (current) =>
                            !current
                    )
                }}
                className={`relative z-[10000] flex w-full items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-left text-sm shadow-sm transition hover:border-[#7f915c] focus:outline-none focus:ring-2 focus:ring-[#7f915c]/20 ${
                    open
                        ? "border-[#7f915c] ring-2 ring-[#7f915c]/20"
                        : ""
                }`}
            >
                <span
                    className={
                        hasValue
                            ? "text-foreground"
                            : "text-muted-foreground"
                    }
                >
                    {displayValue}
                </span>

                <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                        open
                            ? "rotate-180"
                            : ""
                    }`}
                />
            </button>

            {isMulti &&
                selectedValues.length >
                    0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                        {selectedValues.map(
                            (item) => (
                                <span
                                    key={item}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#7f915c]/30 bg-[#7f915c]/10 px-2.5 py-1 text-xs text-[#7f915c]"
                                >
                                    {item}

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeMultiValue(
                                                item
                                            )
                                        }
                                        className="rounded-full text-[#7f915c]/70 transition hover:text-[#7f915c]"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </span>
                            )
                        )}
                    </div>
                )}

            {mounted &&
                open &&
                createPortal(
                    <AnimatePresence>
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -12,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -8,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.22,
                                ease: [
                                    0.22, 1,
                                    0.36, 1,
                                ],
                            }}
                            style={{
                                position:
                                    "fixed",
                                top: position.top,
                                left: position.left,
                                width: position.width,
                                zIndex: 999999,
                            }}
                        >
                            <OptionPanel
                                question={
                                    question
                                }
                                options={
                                    options
                                }
                                isMulti={
                                    isMulti
                                }
                                selectedValues={
                                    selectedValues
                                }
                                singleValue={
                                    singleValue
                                }
                                search={
                                    search
                                }
                                setSearch={
                                    setSearch
                                }
                                onSelect={(
                                    option
                                ) =>
                                    isMulti
                                        ? handleMultiSelect(
                                              option
                                          )
                                        : handleSingleSelect(
                                              option
                                          )
                                }
                                dropdownRef={
                                    dropdownRef
                                }
                            />
                        </motion.div>
                    </AnimatePresence>,
                    document.body
                )}
        </FieldShell>
    )
}