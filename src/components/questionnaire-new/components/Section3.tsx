"use client"

import {
    AnimatePresence,
    motion,
} from "framer-motion"

import DynamicQuestion from "./DynamicQuestion"

import {
    getSection3QuestionById,
    QuestionConfig,
} from "../config/questionnaire-config"

interface Section3Props {
    data: Record<
        string,
        string | string[] | undefined
    >
    updateData: (
        updates: Record<
            string,
            string | string[] | undefined
        >
    ) => void
}

const MAIN_QUESTIONS = [
    "q160",
    "q161",
    "q163",
    "q167",
    "q173",
    "q175",
    "q176",
    "q177",
    "q178",
    "q179",
    "q180",
    "q181",
    "q182",
    "q183",
    "q186",
    "q187",
    "q188",
    "q189",
    "q113",
]

export function Section3({
    data,
    updateData,
}: Section3Props) {

    const getQuestion = (
        id: string
    ): QuestionConfig | undefined => {
        return getSection3QuestionById(id)
    }

    const hasValue = (
        value: string | string[] | undefined
    ): boolean => {

        if (Array.isArray(value)) {
            return value.length > 0
        }

        if (typeof value === "string") {
            return value.trim().length > 0
        }

        return false
    }

    const meetsCondition = (
        question: QuestionConfig
    ): boolean => {

        const condition =
            question.condition

        if (!condition) {
            return true
        }

        const parentValue =
            data[condition.questionId]

        switch (condition.operator) {

            case "equals":
                return (
                    parentValue ===
                    condition.value
                )

            case "notEquals":
                return (
                    parentValue !==
                    condition.value
                )

            default:
                return true
        }
    }

    const getAllDescendants = (
        questionId: string
    ): string[] => {

        const question =
            getQuestion(questionId)

        if (
            !question?.relatedQuestions
        ) {
            return []
        }

        const descendants: string[] = []

        question.relatedQuestions.forEach(
            (childId) => {

                if (
                    childId === "q113" ||
                    childId === "q114" ||
                    childId === "q115"
                ) {
                    return
                }

                if (
                    !descendants.includes(
                        childId
                    )
                ) {
                    descendants.push(
                        childId
                    )
                }

                descendants.push(
                    ...getAllDescendants(
                        childId
                    )
                )
            }
        )

        return descendants
    }

    /*
     * =========================================================
     * CLEAR QUESTION TREE
     * =========================================================
     */
    const clearQuestionTree = (
        questionId: string
    ) => {

        const idsToClear = [
            questionId,
            ...getAllDescendants(
                questionId
            ),
        ]

        const updates: Record<
            string,
            string | string[] | undefined
        > = {}

        idsToClear.forEach(
            (id) => {
                updates[id] =
                    undefined
            }
        )

        updateData(updates)
    }


    const handleQuestionChange = (
        questionId: string,
        value: string | string[]
    ) => {

        if (!hasValue(value)) {

            clearQuestionTree(
                questionId
            )

            return
        }

        updateData({
            [questionId]: value,
        })
    }

    const filterPublishingQuestions = (
        questionIds: string[]
    ) => {

        return questionIds.filter(
            (id) =>
                id !== "q113" &&
                id !== "q114" &&
                id !== "q115"
        )
    }

    const renderRelatedQuestion = (
        question: QuestionConfig
    ): React.ReactNode => {

        if (!meetsCondition(question)) {
            return null
        }

        const questionValue =
            data[question.id]

        const answered =
            hasValue(questionValue)

        const relatedQuestions =
            filterPublishingQuestions(
                question.relatedQuestions ?? []
            )

        return (
            <motion.div
                key={question.id}
                initial={{
                    opacity: 0,
                    x: -15,
                    height: 0,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    height: "auto",
                }}
                exit={{
                    opacity: 0,
                    x: -15,
                    height: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
                className="relative z-10 overflow-visible scroll-mt-24"
            >

                <DynamicQuestion
                    question={question}
                    value={questionValue}
                    onChange={(value) =>
                        handleQuestionChange(
                            question.id,
                            value
                        )
                    }
                    faded
                />

                <AnimatePresence initial={false}>
                    {answered &&
                        relatedQuestions.length > 0 && (
                            <div className="mt-6 grid gap-6 overflow-visible">

                                {relatedQuestions.map(
                                    (relatedId) => {

                                        const childQuestion =
                                            getQuestion(
                                                relatedId
                                            )

                                        if (
                                            !childQuestion
                                        ) {
                                            return null
                                        }

                                        return renderRelatedQuestion(
                                            childQuestion
                                        )
                                    }
                                )}

                            </div>
                        )}
                </AnimatePresence>

            </motion.div>
        )
    }

    const renderMainQuestion = (
        question: QuestionConfig,
        index: number
    ): React.ReactNode => {

        if (!meetsCondition(question)) {
            return null
        }

        const questionValue =
            data[question.id]

        const answered =
            hasValue(questionValue)

        const relatedQuestions =
            filterPublishingQuestions(
                question.relatedQuestions ?? []
            )

        return (
            <motion.div
                key={question.id}
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                    ease: "easeOut",
                }}
                className="relative grid gap-5 overflow-visible scroll-mt-24"
            >

                <div className="relative z-50 overflow-visible">

                    <DynamicQuestion
                        question={question}
                        value={questionValue}
                        onChange={(value) =>
                            handleQuestionChange(
                                question.id,
                                value
                            )
                        }
                    />

                </div>

                <AnimatePresence initial={false}>
                    {answered &&
                        relatedQuestions.length > 0 && (
                            <div className="grid gap-6 overflow-visible">

                                {relatedQuestions.map(
                                    (relatedId) => {

                                        const relatedQuestion =
                                            getQuestion(
                                                relatedId
                                            )

                                        if (
                                            !relatedQuestion
                                        ) {
                                            return null
                                        }

                                        return renderRelatedQuestion(
                                            relatedQuestion
                                        )
                                    }
                                )}

                            </div>
                        )}
                </AnimatePresence>

            </motion.div>
        )
    }

    const q113 =
        getQuestion("q113")

    const q114 =
        getQuestion("q114")

    const q115 =
        getQuestion("q115")

    const q113Answered =
        hasValue(data.q113)

    const isQ114Complete = (): boolean => {

        if (!q114) {
            return false
        }

        const selectedValues =
            Array.isArray(data.q114)
                ? data.q114
                : []

        const requiredOptions =
            q114.options ?? []

        return (
            requiredOptions.length > 0 &&
            requiredOptions.every(
                (option) =>
                    selectedValues.includes(
                        option
                    )
            )
        )
    }

    const q114Complete =
        isQ114Complete()

    const handleQ113Change = (
        value: string | string[]
    ) => {

        if (!hasValue(value)) {

            updateData({
                q113: undefined,
                q114: undefined,
                q115: undefined,
            })

            return
        }

        updateData({
            q113: value,
        })
    }

    const handleQ114Change = (
        value: string | string[]
    ) => {

        const selectedValues =
            Array.isArray(value)
                ? value
                : []

        const requiredOptions =
            q114?.options ?? []

        const complete =
            requiredOptions.length > 0 &&
            requiredOptions.every(
                (option) =>
                    selectedValues.includes(
                        option
                    )
            )

        if (!complete) {

            updateData({
                q114: value,
                q115: undefined,
            })

            return
        }

        updateData({
            q114: value,
        })
    }

    const handleQ115Change = (
        value: string | string[]
    ) => {

        updateData({
            q115: value,
        })
    }

    return (
        <div className="grid gap-10 overflow-visible pt-4">

            {MAIN_QUESTIONS
                .slice(0, 4)
                .map(
                    (questionId, index) => {

                        const question =
                            getQuestion(
                                questionId
                            )

                        if (!question) {
                            return null
                        }

                        return renderMainQuestion(
                            question,
                            index
                        )
                    }
                )}

            {MAIN_QUESTIONS
                .slice(4, 16)
                .map(
                    (questionId, index) => {

                        const question =
                            getQuestion(
                                questionId
                            )

                        if (!question) {
                            return null
                        }

                        return renderMainQuestion(
                            question,
                            index + 4
                        )
                    }
                )}

            {["q188", "q189"].map(
                (questionId, index) => {

                    const question =
                        getQuestion(
                            questionId
                        )

                    if (!question) {
                        return null
                    }

                    return renderMainQuestion(
                        question,
                        index + 16
                    )
                }
            )}

            {q113 && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.35,
                        ease: "easeOut",
                    }}
                    className="relative overflow-visible"
                >

                    <DynamicQuestion
                        question={q113}
                        value={data.q113}
                        onChange={
                            handleQ113Change
                        }
                    />

                </motion.div>
            )}

            {q114 && (
                <AnimatePresence initial={false}>
                    {q113Answered && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -15,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                height: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                x: -15,
                                height: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="relative z-10 overflow-visible"
                        >

                            <DynamicQuestion
                                question={q114}
                                value={data.q114}
                                onChange={
                                    handleQ114Change
                                }
                                faded
                            />

                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            {q115 && (
                <AnimatePresence initial={false}>
                    {q114Complete && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -15,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                height: "auto",
                            }}
                            exit={{
                                opacity: 0,
                                x: -15,
                                height: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="relative z-10 overflow-visible"
                        >

                            <DynamicQuestion
                                question={q115}
                                value={data.q115}
                                onChange={
                                    handleQ115Change
                                }
                                faded
                            />

                        </motion.div>
                    )}
                </AnimatePresence>
            )}

        </div>
    )
}
