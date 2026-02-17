import React from "react";
import { AlertCircle, TrendingDown } from "lucide-react";

export default function ProblemFraming({
  userProblem = "Users struggle with overcrowded listing pages, inconsistent property data presentation, poor visual hierarchy, and difficulty comparing properties across locations, developers, and categories. This leads to fatigue, confusion, and abandonment during early exploration stages.",
  businessImpact = "This friction translates directly to reduced engagement time on listings, lower lead generation from property pages, weakened brand credibility in a highly competitive market, and missed opportunities to convert high-intent users.",
}) {
  return (
    <section id="problem" className="flex flex-col">
      <h2 className="mb-5">Problem Framing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Problem */}
        <div className="p-8 bg-neutral-800 border border-neutral-700 rounded-2xl flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-full aspect-square bg-accent-400/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent-400/20">
              <AlertCircle className="w-8 h-8 text-accent-400" />
            </div>
            <div className="flex flex-col">
              <h4 className="mb-2">User Problem</h4>
              <p className="text-sm text-neutral-500">
                Where existing solutions fail
              </p>
            </div>
          </div>
          <p className="text-neutral-400 leading-relaxed">{userProblem}</p>
        </div>

        {/* Business Impact */}
        <div className="p-8 bg-neutral-800 border border-neutral-700 rounded-2xl flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-full aspect-square bg-accent-400/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent-400/20">
              <TrendingDown className="w-8 h-8 text-accent-400" />
            </div>
            <div className="flex flex-col">
              <h4 className="mb-2">Business Impact</h4>
              <p className="text-sm text-neutral-500">
                Consequence for stakeholders
              </p>
            </div>
          </div>
          <p className="text-neutral-400 leading-relaxed">{businessImpact}</p>
        </div>
      </div>
    </section>
  );
}
