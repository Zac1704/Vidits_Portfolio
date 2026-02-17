import React from "react";
import { MessageCircle } from "lucide-react";

const defaultQuestions = [
  {
    question: "How clear is the property information presentation?",
    responses: [
      { label: "Very Unclear", percentage: 42 },
      { label: "Somewhat Unclear", percentage: 33 },
      { label: "Neutral", percentage: 15 },
      { label: "Clear", percentage: 10 },
    ],
  },
  {
    question: "How easy is it to compare multiple properties?",
    responses: [
      { label: "Very Difficult", percentage: 48 },
      { label: "Somewhat Difficult", percentage: 29 },
      { label: "Neutral", percentage: 14 },
      { label: "Easy", percentage: 9 },
    ],
  },
  {
    question: "How professional does the platform feel?",
    responses: [
      { label: "Not Professional", percentage: 35 },
      { label: "Somewhat Professional", percentage: 32 },
      { label: "Professional", percentage: 23 },
      { label: "Very Professional", percentage: 10 },
    ],
  },
];

export function UserSurvey({ questions = defaultQuestions }) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">User Survey Insights</h2>

      <div className="flex flex-col gap-12">
        {questions.map((q, qIndex) => (
          <div key={qIndex} className="flex flex-col">
            {/* Question Block */}
            <div className="flex items-start gap-4 mb-6 p-6 bg-neutral-800 rounded-xl border border-neutral-700">
              <MessageCircle className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
              <h5 className="text-white">{q.question}</h5>
            </div>

            {/* Response Bars */}
            <div className="flex flex-col gap-4">
              {q.responses.map((response, rIndex) => (
                <div key={rIndex} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-400">
                      {response.label}
                    </span>
                    <span className="text-sm font-semibold text-accent-400">
                      {response.percentage}%
                    </span>
                  </div>
                  <div className="w-full h-10 bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700">
                    <div
                      className="h-full bg-accent-400 rounded-lg transition-all duration-700 ease-out flex items-center justify-end pr-3"
                      style={{ width: `${response.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
