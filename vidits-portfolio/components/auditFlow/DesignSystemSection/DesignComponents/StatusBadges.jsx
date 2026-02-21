const StatusBadges = () => {
  return (
    <div className=" bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="uppercase text-xl mb-6 text-gray-900">
        Status Badges & Labels
      </h3>

      <div className="space-y-6">
        <div>
          <p className="uppercase text-sm text-gray-600 mb-4">Status Badges</p>
          <div className="flex flex-wrap gap-2 font-inter font-bold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-600 rounded-full text-sm">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
              Completed
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm">
              <span className="w-1.5 h-1.5 bg-orange-600 rounded-full"></span>
              In Progress
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-500 rounded-full text-sm">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              Overdue
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-900 rounded-full text-sm">
              <span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>
              Not Started
            </span>
          </div>
        </div>

        <div>
          <p className="uppercase text-sm text-gray-600 mb-4">
            Priority Labels
          </p>
          <div className="flex flex-wrap gap-2 font-inter font-bold">
            <span className="px-3 py-1.5 bg-red-100 text-red-500 rounded text-sm">
              High Priority
            </span>
            <span className="px-3 py-1.5 bg-orange-100 text-orange-600 rounded text-sm">
              Medium Priority
            </span>
            <span className="px-3 py-1.5 bg-gray-200 text-gray-600 rounded text-sm">
              Low Priority
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBadges;
