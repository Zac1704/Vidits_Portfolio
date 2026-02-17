import React from "react";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";

const defaultLearnings = [
  {
    category: "success",
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Strong Information Architecture",
    description:
      "Section-based organization made property discovery intuitive and reduced user confusion during exploration.",
  },
  {
    category: "success",
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Focus on Clarity Over Features",
    description:
      "Prioritizing visual hierarchy and spacing over dense information blocks improved user engagement and reduced fatigue.",
  },
  {
    category: "challenge",
    icon: <AlertCircle className="w-5 h-5" />,
    title: "Responsive Design Needed",
    description:
      "Desktop-only approach limits accessibility. Future iterations should include tablet and mobile layouts for broader reach.",
  },
  {
    category: "challenge",
    icon: <AlertCircle className="w-5 h-5" />,
    title: "Deeper Accessibility Validation",
    description:
      "While visual hierarchy is strong, keyboard navigation and WCAG AA validation require more comprehensive testing.",
  },
  {
    category: "future",
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Responsive Layouts (Tablet & Mobile)",
    description:
      "Extend the current desktop design to tablet and mobile breakpoints for full cross-device support.",
  },
  {
    category: "future",
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Advanced Filtering",
    description:
      "Implement more sophisticated property filtering and saved searches to improve comparison workflows.",
  },
  {
    category: "future",
    icon: <Lightbulb className="w-5 h-5" />,
    title: "WCAG AA Compliance",
    description:
      "Complete keyboard navigation, screen reader testing, and touch target optimization to achieve full AA compliance.",
  },
];

export default function Learnings({ learnings = defaultLearnings }) {
  const getCategoryStyle = (category) => {
    switch (category) {
      case "success":
        return {
          bg: "bg-green-500/10",
          border: "border-green-500/20",
          iconBg: "bg-green-500/20",
          iconColor: "text-green-400",
          titleColor: "text-green-300",
        };
      case "challenge":
        return {
          bg: "bg-amber-500/10",
          border: "border-amber-500/20",
          iconBg: "bg-amber-500/20",
          iconColor: "text-amber-400",
          titleColor: "text-amber-300",
        };
      case "future":
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          iconBg: "bg-blue-500/20",
          iconColor: "text-blue-400",
          titleColor: "text-blue-300",
        };
      default:
        return {
          bg: "bg-neutral-800",
          border: "border-neutral-700",
          iconBg: "bg-neutral-700",
          iconColor: "text-neutral-400",
          titleColor: "text-white",
        };
    }
  };

  const successLearnings = learnings.filter((l) => l.category === "success");
  const challengeLearnings = learnings.filter(
    (l) => l.category === "challenge"
  );
  const futureLearnings = learnings.filter((l) => l.category === "future");

  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Learnings & Reflection</h2>

      <div className="flex flex-col gap-10">
        {/* What Worked */}
        {successLearnings.length > 0 && (
          <div className="flex flex-col">
            <h4 className="mb-6 text-green-400">What Worked</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successLearnings.map((learning, index) => {
                const style = getCategoryStyle(learning.category);
                return (
                  <div
                    key={index}
                    className={`p-6 ${style.bg} border ${style.border} rounded-2xl flex flex-col`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 ${style.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 border ${style.border}`}
                      >
                        <div className={style.iconColor}>{learning.icon}</div>
                      </div>
                      <h5 className={style.titleColor}>{learning.title}</h5>
                    </div>

                    <p className="text-sm text-neutral-400 ml-13">
                      {learning.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* What Could Improve */}
        {challengeLearnings.length > 0 && (
          <div className="flex flex-col">
            <h4 className="mb-6 text-amber-400">What Could Improve</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challengeLearnings.map((learning, index) => {
                const style = getCategoryStyle(learning.category);
                return (
                  <div
                    key={index}
                    className={`p-6 ${style.bg} border ${style.border} rounded-2xl flex flex-col`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 ${style.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 border ${style.border}`}
                      >
                        <div className={style.iconColor}>{learning.icon}</div>
                      </div>
                      <h5 className={style.titleColor}>{learning.title}</h5>
                    </div>

                    <p className="text-sm text-neutral-400 ml-13">
                      {learning.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* What's Next */}
        {futureLearnings.length > 0 && (
          <div className="flex flex-col">
            <h4 className="mb-6 text-blue-400">What’s Next</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureLearnings.map((learning, index) => {
                const style = getCategoryStyle(learning.category);
                return (
                  <div
                    key={index}
                    className={`p-6 ${style.bg} border ${style.border} rounded-2xl flex flex-col`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 ${style.iconBg} rounded-lg flex items-center justify-center flex-shrink-0 border ${style.border}`}
                      >
                        <div className={style.iconColor}>{learning.icon}</div>
                      </div>
                      <h5 className={style.titleColor}>{learning.title}</h5>
                    </div>

                    <p className="text-sm text-neutral-400 ml-13">
                      {learning.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
