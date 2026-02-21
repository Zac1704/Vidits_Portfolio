const ColorPalette = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="uppercase text-xl mb-6 text-gray-900">Color Palette</h3>

      {/* Primary Colors */}
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-600 mb-4">Primary Colors</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-inter">
          <div className="flex-1">
            <div className="bg-[#06c] h-24 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Primary Blue</p>
            <p className="text-sm text-gray-600">#0066FF</p>
          </div>
          <div className="flex-1">
            <div className="bg-[#0052CC] h-24 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Primary Dark</p>
            <p className="text-sm text-gray-600">#0052CC</p>
          </div>
          <div className="flex-1">
            <div className="bg-[#E6F0FF] h-24 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Primary Subtle BG</p>
            <p className="text-sm text-gray-600">#E6F0FF</p>
          </div>
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-600 mb-4">Semantic Colors</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-inter">
          <div className="flex-1 ">
            <div className="bg-[#10b981] h-24 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Success</p>
            <p className="text-sm text-gray-600">#00875A</p>
          </div>
          <div className="flex-1">
            <div className="bg-[#f59e0b] h-24 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Warning</p>
            <p className="text-sm text-gray-600">#FF991F</p>
          </div>
          <div className="flex-1 ">
            <div className="bg-[#ef4444] h-24 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Error</p>
            <p className="text-sm text-gray-600">#DE350B</p>
          </div>
          <div className="flex-1">
            <div className="bg-[#0052CC] h-24 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Info</p>
            <p className="text-sm text-gray-600">#0052CC</p>
          </div>
        </div>
      </div>

      {/* Grayscale */}
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-600 mb-4">Grayscale</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 mb-3 font-inter">
          <div>
            <div className="bg-white h-20 rounded-lg border border-gray-300 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">White</p>
            <p className="text-sm text-gray-600">#FFFFFF</p>
          </div>
          <div>
            <div className="bg-[#F7F8F9] h-20 rounded-lg border border-gray-200 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">Gray 100</p>
            <p className="text-sm text-gray-600">#F7F8F9</p>
          </div>
          <div>
            <div className="bg-[#EBECF0] h-20 rounded-lg border border-gray-200 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">Gray 200</p>
            <p className="text-sm text-gray-600">#EBECF0</p>
          </div>
          <div>
            <div className="bg-[#DFE1E6] h-20 rounded-lg border border-gray-200 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">Gray 300</p>
            <p className="text-sm text-gray-600">#DFE1E6</p>
          </div>
          <div>
            <div className="bg-[#6B778C] h-20 rounded-lg border border-gray-200 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">Gray 500</p>
            <p className="text-sm text-gray-600">#6B778C</p>
          </div>
          <div>
            <div className="bg-[#42526E] h-20 rounded-lg border border-gray-200 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">Gray 700</p>
            <p className="text-sm text-gray-600">#42526E</p>
          </div>
          <div>
            <div className="bg-[#1A1D23] h-20 rounded-lg border border-gray-200 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">Gray 900</p>
            <p className="text-sm text-gray-600">#1A1D23</p>
          </div>
          <div>
            <div className="bg-black h-20 rounded-lg border border-gray-200 mb-2"></div>
            <p className="text-sm text-gray-900 font-bold">Black</p>
            <p className="text-sm text-gray-600">#000000</p>
          </div>
        </div>
      </div>

      {/* UI Specific */}
      <div>
        <p className="uppercase text-sm text-gray-600 mb-4">UI Specific</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-inter">
          <div className="flex-1">
            <div className="bg-[#2C3340] h-20 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Sidebar BG</p>
          </div>
          <div className="flex-1">
            <div className="bg-[#06c] h-20 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Sidebar Active</p>
          </div>
          <div className="flex-1">
            <div className="bg-[#A4A9B5] h-20 rounded-lg border border-gray-200 mb-3"></div>
            <p className="text-sm text-gray-900 font-bold">Sidebar Text</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
