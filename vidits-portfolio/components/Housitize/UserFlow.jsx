import React from "react";
import {
  Circle,
  Square,
  Diamond,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const defaultNodes = [
  { type: "start", label: "User lands on page" },
  { type: "action", label: "Reviews value proposition" },
  { type: "decision", label: "Ready to sign up?", paths: ["Yes", "No"] },
  { type: "action", label: "Completes signup form" },
  { type: "decision", label: "Validation passes?", paths: ["Yes", "No"] },
  { type: "end", label: "Success: Account created" },
  { type: "error", label: "Error: Show validation feedback" },
];

export function UserFlow({
  flowTitle = "Primary Discovery Flow",
  description = "User lands on homepage → explores filters or collections → views listings → evaluates property → considers inquiry or save action. Decision points focus on filter usage, property card interaction, and scrolling vs exiting.",
  nodes = defaultNodes,
}) {
  const getNodeIcon = (type) => {
    switch (type) {
      case "start":
        return <Circle className="w-6 h-6" />;
      case "action":
        return <Square className="w-6 h-6" />;
      case "decision":
        return <Diamond className="w-6 h-6" />;
      case "end":
        return <CheckCircle2 className="w-6 h-6" />;
      case "error":
        return <XCircle className="w-6 h-6" />;
      default:
        return <Circle className="w-6 h-6" />;
    }
  };

  const getNodeColor = (type) => {
    switch (type) {
      case "start":
        return "bg-accent-400/10 border-accent-400 text-accent-400";
      case "action":
        return "bg-blue-500/10 border-blue-500 text-blue-400";
      case "decision":
        return "bg-amber-500/10 border-amber-500 text-amber-400";
      case "end":
        return "bg-green-500/10 border-green-500 text-green-400";
      case "error":
        return "bg-red-500/10 border-red-500 text-red-400";
      default:
        return "bg-neutral-800 border-neutral-700 text-neutral-400";
    }
  };

  return (
    <section id="flows" className="flex flex-col">
      <h2 className="mb-5">User Flow</h2>

      <div className="mb-8 flex flex-col">
        <h4 className="mb-3">{flowTitle}</h4>
        <p className="text-neutral-400 max-w-3xl">{description}</p>
      </div>

      {/* Flow Diagram */}
      <div className="bg-neutral-800 rounded-2xl p-8 md:p-12 overflow-x-auto border border-neutral-700">
        <div className="flex flex-col items-center gap-4 min-w-max">
          {nodes.map((node, index) => (
            <React.Fragment key={index}>
              {/* Node */}
              <div
                className={`px-6 py-4 rounded-xl border-2 ${getNodeColor(
                  node.type
                )} flex items-center gap-3 min-w-[280px] justify-center`}
              >
                {getNodeIcon(node.type)}
                <span className="font-semibold">{node.label}</span>
              </div>

              {/* Connector Arrow */}
              {index < nodes.length - 1 && (
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-neutral-600 rotate-90" />
                </div>
              )}

              {/* Decision Paths */}
              {node.paths && (
                <div className="flex gap-8 my-2">
                  {node.paths.map((path, pathIdx) => (
                    <div
                      key={pathIdx}
                      className="px-4 py-2 bg-neutral-700 rounded-lg border border-neutral-600 text-sm"
                    >
                      {path}
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg border border-neutral-700">
          <Circle className="w-4 h-4 text-accent-400" />
          <span className="text-sm text-neutral-400">Start/End</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg border border-neutral-700">
          <Square className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-neutral-400">Action</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg border border-neutral-700">
          <Diamond className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-neutral-400">Decision</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg border border-neutral-700">
          <XCircle className="w-4 h-4 text-red-400" />
          <span className="text-sm text-neutral-400">Error State</span>
        </div>
      </div>
    </section>
  );
}
