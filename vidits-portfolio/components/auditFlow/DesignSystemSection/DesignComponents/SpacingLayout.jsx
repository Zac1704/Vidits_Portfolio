const SpacingLayout = () => {
  return (
    <div className=" bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="uppercase text-xl mb-6 text-gray-900">Spacing & Layout</h3>

      {/* Border Radius */}
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-600 mb-4">Border Radius</p>
        <div className="grid grid-cols-4 gap-4 font-inter font-bold">
          <div>
            <div className="bg-gray-200 h-16 rounded border border-gray-300"></div>
            <p className="mt-2 text-sm text-gray-900">Input: 4px</p>
          </div>
          <div>
            <div className="bg-gray-200 h-16 rounded-md border border-gray-300"></div>
            <p className="mt-2 text-sm text-gray-900">Button: 6px</p>
          </div>
          <div>
            <div className="bg-gray-200 h-16 rounded-lg border border-gray-300"></div>
            <p className="mt-2 text-sm text-gray-900">Card: 8px</p>
          </div>
          <div>
            <div className="bg-gray-200 h-16 rounded-full border border-gray-300"></div>
            <p className="mt-2 text-sm text-gray-900">Full: 9999px</p>
          </div>
        </div>
      </div>

      {/* Spacing Scale */}
      <div>
        <p className="uppercase text-sm text-gray-600 mb-4">
          Spacing Scale (Tailwind)
        </p>
        <div className="space-y-2 font-inter font-bold">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 h-8 w-1"></div>
            <p className="text-sm text-gray-900">1 = 4px</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 h-8 w-2"></div>
            <p className="text-sm text-gray-900">2 = 8px</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 h-8 w-3"></div>
            <p className="text-sm text-gray-900">3 = 12px</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 h-8 w-4"></div>
            <p className="text-sm text-gray-900">4 = 16px</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 h-8 w-6"></div>
            <p className="text-sm text-gray-900">6 = 24px</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 h-8 w-8"></div>
            <p className="text-sm text-gray-900">8 = 32px</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpacingLayout;
