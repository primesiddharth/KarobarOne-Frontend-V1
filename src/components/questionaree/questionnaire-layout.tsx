"use client"

import { LiveWebsitePreview } from "./preview/LiveWebsitePreview"
import { useQuestionnaire } from "@/context/questionnaire-context"
import { ProgressBar } from "./progress-bar"
import { SidebarNavigation } from "./sidebar-navigation"
import { NavigationButtons } from "./navigation-buttons"

import { Step1Welcome } from "./steps/step-1-welcome"
import { Step2BasicDetails } from "./steps/step-2-basic-details"
import { Step5Operating } from "./steps/step-5-operating"
import { Step14Review } from "./steps/step-14-review"
import { Step15Success } from "./steps/step-15-success"

import { Section3 } from "../questionnaire-new/components/Section3"

const steps: { [key: number]: React.ComponentType } = {
  1: Step1Welcome,
  2: Step2BasicDetails,
  5: Step5Operating,
  14: Step14Review,
  15: Step15Success,
}

export function QuestionnaireLayout() {
  const { currentStep, data, updateData } = useQuestionnaire()

  const showSidebar = currentStep > 1 && currentStep < 15
  const showProgress = currentStep > 1 && currentStep < 15

  const updateSection3Data = (
    updates: Record<string, string | string[] | undefined>
  ) => {
    const cleaned = { ...data.section3Data }

    Object.entries(updates).forEach(([key, value]) => {
      if (
        value === undefined ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        delete cleaned[key]
      } else {
        cleaned[key] = value
      }
    })

    updateData({
      section3Data: cleaned,
    })
  }

  const renderCurrentStep = () => {
    // Step 3 — IT Growth, Investment,
    // Website Visual System & Publishing
    if (currentStep === 3) {
      return (
        <div className="w-full overflow-visible">
          <Section3
            data={data.section3Data}
            updateData={updateSection3Data}
          />

          <div className="mt-10 w-full pt-8">
            <NavigationButtons />
          </div>
        </div>
      )
    }

    const CurrentStepComponent = steps[currentStep] || Step1Welcome

    return <CurrentStepComponent />
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="sticky top-0 z-[100] bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  W
                </span>
              </div>

              <span className="font-semibold text-foreground hidden sm:inline">
                Website Requirement Questionnaire
              </span>
            </div>

            {showProgress && (
              <div className="flex-1 max-w-xs ml-4 hidden md:block">
                <ProgressBar />
              </div>
            )}

          </div>

          {showProgress && (
            <div className="mt-3 md:hidden">
              <ProgressBar />
            </div>
          )}

        </div>
      </header>

      <main className="relative z-0 w-full px-4 py-8">

        <div
          className={
            showSidebar
              ? "grid grid-cols-1 xl:grid-cols-[10fr_50fr_40fr] gap-1.5"
              : "grid grid-cols-1 xl:max-w-3xl xl:mx-auto"
          }
        >

          {showSidebar && (
            <div className="min-w-0">
              <SidebarNavigation />
            </div>
          )}

          <div className="relative z-0 min-w-0">

            <div className="relative z-0 bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
              {renderCurrentStep()}
            </div>

          </div>

          {showSidebar && (
            <div className="min-w-0">
              <LiveWebsitePreview />
            </div>
          )}

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-auto">
        <div className="container mx-auto px-4">

          <p className="text-center text-sm text-muted-foreground">
            Your information is secure and will only be used for website
            development purposes.
          </p>

        </div>
      </footer>

    </div>
  )
}