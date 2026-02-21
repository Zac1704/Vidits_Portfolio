const ButtonsSection = () => {
  return (
    <div className=" bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="uppercase text-xl mb-6 text-gray-900">Buttons</h3>

      <div className="space-y-6">
        <div>
          <p className="uppercase text-sm text-gray-600 mb-4">
            Button Variants
          </p>
          <div className="flex flex-wrap gap-3 font-inter">
            <button className="bg-[#06c] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-[10px] md:text-sm font-bold">
              Primary Button
            </button>
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-[10px] md:text-sm font-bold">
              Secondary Button
            </button>
            <button className="bg-[#F7F8F9] text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-[10px] md:text-sm font-bold">
              Ghost Button
            </button>
            <button className="text-gray-900 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors text-[10px] md:text-sm font-bold">
              Danger Button
            </button>
          </div>
        </div>

        <div>
          <p className="uppercase text-sm text-gray-600 mb-4">Button Sizes</p>
          <div className="flex flex-wrap items-center gap-3 font-inter">
            <button className="font-bold bg-[#06c] text-white px-3 py-1.5 rounded text-[10px] md:text-xs">
              Small
            </button>
            <button className="font-bold bg-[#06c] text-white px-4 py-2 rounded-lg text-[10px] md:text-sm">
              Medium
            </button>
            <button className="font-bold bg-[#06c] text-white px-6 py-3 rounded-lg text-[10px] md:text-base">
              Large
            </button>
          </div>
        </div>

        <div>
          <p className="uppercase text-sm text-gray-600 mb-4">
            Usage Guidelines
          </p>
          <div className="font-inter font-medium bg-[#F7F8F9] p-4 rounded-lg space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-gray-600 text-sm">•</span>
              <p className="text-sm text-gray-900">
                Use Primary for main actions (Create, Save, Submit)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-600 text-sm">•</span>
              <p className="text-sm text-gray-900">
                Use Secondary for supporting actions (Cancel, Back)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-600 text-sm">•</span>
              <p className="text-sm text-gray-900">
                Use Ghost for tertiary actions (View More, Details)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-gray-600 text-sm">•</span>
              <p className="text-sm text-gray-900">
                Use Danger for destructive actions (Delete, Remove)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsSection;
