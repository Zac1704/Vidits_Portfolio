import AuditFlowSection from "@/components/auditFlow/AuditflowSection";
import BrainstormSolutionIdeasSection from "@/components/auditFlow/BrainstormSolutionIdeas";
import DefiningTheProblemSection from "@/components/auditFlow/DefiningTheProblem";
import FindingDesignPatternsSection from "@/components/auditFlow/FindingDesignPatterns";
import IncreasingClaritySection from "@/components/auditFlow/IncreasingClarity";
import MyHypothesisSection from "@/components/auditFlow/MyHypothesis";
import PriortizingMvpMindsetSection from "@/components/auditFlow/PriortizingMvpMindset";
import UsabilityTestResultsSection from "@/components/auditFlow/UsabilityTestResults";
import UserPersonasSection from "@/components/auditFlow/UserPersonas";
import WhatILearnedSection from "@/components/auditFlow/WhatILearned";
import WhyAuditorsSection from "@/components/auditFlow/WhyAuditors";

const Auditflow = () => {
  return (
    <>
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
    </>
  );
};

export default Auditflow;
