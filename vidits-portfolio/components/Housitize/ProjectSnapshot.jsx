import React from "react";

export default function ProjectSnapshot({
  data = {
    where: "Housitize Estate — Real Estate & Property Technology (PropTech)",
    what: "Web Platform (Property Discovery & Real-Estate Listing Website)",
    why: "To reduce confusion, friction, and cognitive overload in property discovery by creating a clear, structured, and trustworthy browsing experience for Indian real-estate users.",
    role: "Product Designer / Lead UI-UX Designer (Freelance)",
    category: "B2C Real Estate Platform",
    when: "June 2025 (~6 weeks)",
  },
}) {
  return (
    <section id="snapshot" className="flex flex-col">
      <h3 className="mb-5">Project Snapshot</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Row 1 */}
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <p className="text-sm text-neutral-500 mb-2">Where</p>
          <p className="font-semibold text-white">{data.where}</p>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <p className="text-sm text-neutral-500 mb-2">What</p>
          <p className="font-semibold text-white">{data.what}</p>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <p className="text-sm text-neutral-500 mb-2">Why</p>
          <p className="font-semibold text-white">{data.why}</p>
        </div>

        {/* Row 2 */}
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <p className="text-sm text-neutral-500 mb-2">Role</p>
          <p className="font-semibold text-white">{data.role}</p>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <p className="text-sm text-neutral-500 mb-2">Category</p>
          <p className="font-semibold text-white">{data.category}</p>
        </div>

        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700 flex flex-col">
          <p className="text-sm text-neutral-500 mb-2">When</p>
          <p className="font-semibold text-white">{data.when}</p>
        </div>
      </div>
    </section>
  );
}
