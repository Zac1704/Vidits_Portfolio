import React from "react";
import { User, MapPin, Briefcase, Target, Frown } from "lucide-react";

const defaultPersonas = [
  {
    name: "Rohan Mehta",
    age: 31,
    role: "IT Consultant",
    location: "Bengaluru",
    quote:
      "I want to compare properties quickly without getting lost in unnecessary details.",
    goals: [
      "Shortlist properties efficiently",
      "Compare developers and localities",
      "Feel confident before contacting sellers",
    ],
    frustrations: [
      "Overloaded property pages",
      "Repetitive layouts",
      "Lack of clear differentiation",
    ],
    behavior:
      "Digitally savvy, comparison-driven user who values clarity, speed, and professional presentation.",
  },
];

export function UserPersona({ personas = defaultPersonas }) {
  return (
    <section id="persona" className="flex flex-col">
      <h2 className="mb-5">User Persona</h2>

      <div className="flex flex-col gap-8">
        {personas.map((persona, index) => (
          <div
            key={index}
            className="bg-neutral-800 border border-neutral-700 rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Header with Photo and Basic Info */}
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-700 p-8 border-b border-neutral-700">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Photo */}
                <div className="w-32 h-32 rounded-2xl bg-accent-400/10 flex items-center justify-center overflow-hidden flex-shrink-0 border border-accent-400/20">
                  {persona.photo ? (
                    <img
                      src={persona.photo}
                      alt={persona.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-accent-400" />
                  )}
                </div>

                {/* Basic Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="mb-3">{persona.name}</h3>
                  <div className="flex flex-wrap gap-4 mb-3">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span className="text-sm">{persona.age} years old</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm">{persona.role}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{persona.location}</span>
                    </div>
                  </div>
                  <p className="text-lg italic text-accent-400">
                    "{persona.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Goals, Frustrations, and Behavior */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Goals */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center border border-accent-400/20">
                    <Target className="w-5 h-5 text-accent-400" />
                  </div>
                  <h5>Goals</h5>
                </div>
                <ul className="flex flex-col gap-2">
                  {persona.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-accent-400">✓</span>
                      <span className="text-sm text-neutral-400">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Frustrations */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20">
                    <Frown className="w-5 h-5 text-red-400" />
                  </div>
                  <h5>Frustrations</h5>
                </div>
                <ul className="flex flex-col gap-2">
                  {persona.frustrations.map((frustration, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-red-400">✗</span>
                      <span className="text-sm text-neutral-400">
                        {frustration}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Behavioral Summary */}
              <div className="md:col-span-2 flex flex-col">
                <h5 className="mb-3">Behavioral Summary</h5>
                <p className="text-neutral-400">{persona.behavior}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
