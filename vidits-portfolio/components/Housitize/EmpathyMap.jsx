import React from "react";
import {
  Brain,
  Heart,
  MessageSquare,
  Activity,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export function EmpathyMap({
  think = [
    "Is this property worth exploring further?",
    "How does this compare to others?",
  ],
  feel = ["Overwhelmed by clutter", "Uncertain about decision quality"],
  say = ["Everything looks the same.", "This is taking too long."],
  userDo = ["Skips sections", "Opens multiple tabs", "Leaves without inquiry"],
  pain = [
    "Visual fatigue from cluttered layouts",
    "Difficulty comparing options",
    "Low trust in platform credibility",
  ],
  gain = [
    "Clear property categorization",
    "Confidence in comparison",
    "Trust in professional presentation",
  ],
}) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Empathy Mapping</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Think */}
        <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
              <Brain className="w-5 h-5 text-purple-400" />
            </div>
            <h5 className="text-purple-300">Think</h5>
          </div>
          <ul className="flex flex-col gap-2">
            {think.map((item, idx) => (
              <li key={idx} className="text-sm text-neutral-400 flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Feel */}
        <div className="p-6 bg-pink-500/10 border border-pink-500/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center border border-pink-500/30">
              <Heart className="w-5 h-5 text-pink-400" />
            </div>
            <h5 className="text-pink-300">Feel</h5>
          </div>
          <ul className="flex flex-col gap-2">
            {feel.map((item, idx) => (
              <li key={idx} className="text-sm text-neutral-400 flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Say */}
        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
              <MessageSquare className="w-5 h-5 text-blue-400" />
            </div>
            <h5 className="text-blue-300">Say</h5>
          </div>
          <ul className="flex flex-col gap-2">
            {say.map((item, idx) => (
              <li key={idx} className="text-sm text-neutral-400 flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Do */}
        <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
              <Activity className="w-5 h-5 text-orange-400" />
            </div>
            <h5 className="text-orange-300">Do</h5>
          </div>
          <ul className="flex flex-col gap-2">
            {userDo.map((item, idx) => (
              <li key={idx} className="text-sm text-neutral-400 flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pain */}
        <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
              <AlertCircle className="w-5 h-5 text-red-400" />
            </div>
            <h5 className="text-red-300">Pain</h5>
          </div>
          <ul className="flex flex-col gap-2">
            {pain.map((item, idx) => (
              <li key={idx} className="text-sm text-neutral-400 flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gain */}
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <h5 className="text-green-300">Gain</h5>
          </div>
          <ul className="flex flex-col gap-2">
            {gain.map((item, idx) => (
              <li key={idx} className="text-sm text-neutral-400 flex gap-2">
                <span>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
