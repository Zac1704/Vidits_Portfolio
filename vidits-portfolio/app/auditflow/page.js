import dynamic from "next/dynamic";
import AuditFlowSection from "@/components/auditFlow/AuditflowSection";

// Lazy load below-the-fold components to improve initial loading performance
const WhyAuditorsSection = dynamic(() => import("@/components/auditFlow/WhyAuditors"));
const MyHypothesisSection = dynamic(() => import("@/components/auditFlow/MyHypothesis"));
const DefiningTheProblemSection = dynamic(() => import("@/components/auditFlow/DefiningTheProblem"));
const UserPersonasSection = dynamic(() => import("@/components/auditFlow/UserPersonas"));
const BrainstormSolutionIdeasSection = dynamic(() => import("@/components/auditFlow/BrainstormSolutionIdeas"));
const PriortizingMvpMindsetSection = dynamic(() => import("@/components/auditFlow/PriortizingMvpMindset"));
const FindingDesignPatternsSection = dynamic(() => import("@/components/auditFlow/FindingDesignPatterns"));
const UsabilityTestResultsSection = dynamic(() => import("@/components/auditFlow/UsabilityTestResults"));
const IncreasingClaritySection = dynamic(() => import("@/components/auditFlow/IncreasingClarity"));
const WhatILearnedSection = dynamic(() => import("@/components/auditFlow/WhatILearned"));

export const metadata = {
  title: "AuditFlow | UX Case Study",
  description: "A deep dive into the AuditFlow project, exploring the problem, research, design patterns, and lessons learned for internal compliance.",
};

const Auditflow = () => {
  return (
    <main
      className="audit-flow-page bg-[#ffffff]"
      style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
    >
      <AuditFlowSection />
      <WhyAuditorsSection />
      <MyHypothesisSection />
      <DefiningTheProblemSection />
      <UserPersonasSection />
      <BrainstormSolutionIdeasSection />
      <PriortizingMvpMindsetSection />
      <FindingDesignPatternsSection />
      <UsabilityTestResultsSection />
      <IncreasingClaritySection />
      <WhatILearnedSection />
    </main>
  );
};

export default Auditflow;