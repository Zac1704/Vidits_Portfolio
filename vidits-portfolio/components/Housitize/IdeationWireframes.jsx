import React from "react";
import { Pencil, Layout } from "lucide-react";

const defaultWireframes = [
  { caption: "Initial sketches exploring navigation patterns" },
  { caption: "Low-fidelity wireframes testing content hierarchy" },
  { caption: "Iteration showing refined layout structure" },
  { caption: "Final wireframe validated through user testing" },
];

export default function IdeationWireframes({
  description = "Early sketches tested section ordering. Low-fidelity wireframes focused on hierarchy. Iterations refined spacing and content density. Key validation came from ensuring each section had a clear purpose.",
  wireframes = defaultWireframes,
}) {
  return (
    <section className="flex flex-col">
      <h2 className="mb-5">Ideation & Wireframing</h2>

      <div className="mb-10 flex items-start gap-4 p-6 bg-neutral-800 rounded-xl border border-neutral-700">
        <div className="w-10 h-10 bg-accent-400/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent-400/20">
          <Pencil className="w-5 h-5 text-accent-400" />
        </div>

        <div className="flex flex-col">
          <h5 className="mb-2">Exploration Process</h5>
          <p className="text-neutral-400">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {wireframes.map((wireframe, index) => (
          <div key={index} className="group flex flex-col">
            {/* Wireframe Placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-xl overflow-hidden mb-3 border border-neutral-700 hover:border-accent-400/50 transition-colors flex items-center justify-center">
              {wireframe.url ? (
                <img
                  src={wireframe.url}
                  alt={wireframe.caption}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center flex flex-col items-center gap-3">
                    <Layout className="w-12 h-12 text-neutral-600" />

                    <div className="flex flex-col gap-2 px-8 w-full">
                      {/* Wireframe-style elements */}
                      <div className="h-4 bg-neutral-600 rounded w-3/4 mx-auto" />
                      <div className="h-3 bg-neutral-600 rounded w-full" />
                      <div className="h-3 bg-neutral-600 rounded w-5/6 mx-auto" />

                      <div className="grid grid-cols-2 gap-2 mt-4">
                        <div className="h-16 bg-neutral-600 rounded" />
                        <div className="h-16 bg-neutral-600 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="text-sm text-neutral-400 text-center">
              {wireframe.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
