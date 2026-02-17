// "use client";

// import "./index.css";
import styles from "./housitize.module.css";
import Link from "next/link";
import HeroSection from "@/components/Housitize/HeroSection";
import ProjectSnapshot from "@/components/Housitize/ProjectSnapshot";
import ExecutiveSummary from "@/components/Housitize/ExecutiveSummary";
import ProblemFraming from "@/components/Housitize/ProblemFraming";
import GoalsMetrics from "@/components/Housitize/GoalsMetrics";
import MarketResearch from "@/components/Housitize/MarketResearch";
import { CompetitiveAnalysis } from "@/components/Housitize/CompetitiveAnalysis";
import { UserSurvey } from "@/components/Housitize/UserSurvey";
import ResearchReflection from "@/components/Housitize/ResearchReflection";
import { UserPersona } from "@/components/Housitize/UserPersona";
import { EmpathyMap } from "@/components/Housitize/EmpathyMap";
import { UserJourney } from "@/components/Housitize/UserJourney";
import InformationArchitecture from "@/components/Housitize/InformationArchitecture";
import { UserFlow } from "@/components/Housitize/UserFlow";
import IdeationWireframes from "@/components/Housitize/IdeationWireframes";
import { DesignDecisions } from "@/components/Housitize/DesignDecisions";
import HighFidelityUI from "@/components/Housitize/HighFidelityUI";
import { DesignSystem } from "@/components/Housitize/DesignSystem";
import { Accessibility } from "@/components/Housitize/Accessibility";
import { UsabilityTesting } from "@/components/Housitize/UsabilityTesting";
import { DevelopmentCollaboration } from "@/components/Housitize/DevelopmentCollaboration";
import ImpactOutcomes from "@/components/Housitize/ImpactOutcomes";
import Learnings from "@/components/Housitize/Learnings";
import FinalTakeaway from "@/components/Housitize/FinalTakeaway";
import { ClosingUI } from "@/components/Housitize/ClosingUI";
import { ScrollToTop } from "@/components/Housitize/ScrollToTop";
import { X } from "lucide-react";

export default function HousitizePage() {
  return (
    <div className={`${styles.housitizeContainer}`}>
      <Link
        href="/"
        aria-label="Go back to homepage"
        className="fixed z-50 group top-3 right-3 sm:top-5 sm:right-5 md:top-8 md:right-8"
      >
        <div className="flex items-center justify-center rounded-full backdrop-blur-md shadow-lg border border-neutral-700/50 bg-neutral-800/30 transition-all duration-200 active:scale-95 group-hover:bg-accent-400 group-hover:border-accent-400 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14">
          <X
            className="transition-colors duration-200 text-accent-400 group-hover:text-neutral-900 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            strokeWidth={2}
          />
        </div>
      </Link>

      <div className="mx-auto max-w-[1440px]">
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 md:pb-10">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            <HeroSection />
            <ProjectSnapshot />
            <ExecutiveSummary />
            <ProblemFraming />
            <GoalsMetrics />
            <MarketResearch />
            <CompetitiveAnalysis />
            <UserSurvey />
            <ResearchReflection />
            <UserPersona />
            <EmpathyMap />
            <UserJourney />
            <InformationArchitecture />
            <UserFlow />
            <IdeationWireframes />
            <DesignDecisions />
            <HighFidelityUI />
            <DesignSystem />
            <Accessibility />
            <UsabilityTesting />
            <DevelopmentCollaboration />
            <ImpactOutcomes />
            <Learnings />
            <FinalTakeaway />
            <ClosingUI />
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
