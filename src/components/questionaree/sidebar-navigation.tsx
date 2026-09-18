"use client"

import { useQuestionnaire } from "@/context/questionnaire-context"
import { cn } from "@/lib/utils"

const steps = [
  { number: 1, title: "Welcome" },
  { number: 2, title: "Basic Details" },
  { number: 3, title: "IT Growth & Investment" },
  { number: 5, title: "Operating Hours" },
  { number: 6, title: "Products/Services" },
  { number: 11, title: "Business USP" },
  { number: 12, title: "About Us" },
  { number: 12.5, title: "Why Choose Us" },
  { number: 13, title: "Licenses" },
  { number: 14, title: "Review" },
  { number: 15, title: "Success" },
]

export function SidebarNavigation() {
  const { currentStep, setCurrentStep } = useQuestionnaire()

  return (
    <nav className="hidden xl:block w-full">
      <div className="sticky top-24 w-full rounded-xl border bg-card p-2 shadow-sm">

        <h3 className="font-semibold text-foreground mb-2 px-2 text-sm">
          Progress
        </h3>

        <ul className="space-y-0.5">

          {steps.map((step) => {
            const isCompleted = step.number < currentStep
            const isCurrent = step.number === currentStep
            const isClickable = step.number <= currentStep

            return (
              <li key={step.number}>

                <button
                  type="button"
                  onClick={() =>
                    isClickable && setCurrentStep(step.number)
                  }
                  disabled={!isClickable}
                  className={cn(
                    "w-full px-2 py-1.5 rounded-md text-xs transition-colors text-left whitespace-nowrap",

                    isCurrent &&
                      "bg-primary text-primary-foreground",

                    isCompleted &&
                      "text-foreground hover:bg-muted",

                    !isClickable &&
                      "text-muted-foreground cursor-not-allowed opacity-50"
                  )}
                >
                  {step.title}
                </button>

              </li>
            )
          })}

        </ul>

      </div>
    </nav>
  )
}