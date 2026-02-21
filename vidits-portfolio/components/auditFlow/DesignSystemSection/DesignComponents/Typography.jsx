const Typography = () => {
  return (
    <div className=" bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="uppercase text-xl mb-6 text-gray-900">Typography</h3>

      {/* Font Families */}
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-600 mb-4">Font Families</p>
        <div className="space-y-3">
          <div className="p-4 border border-gray-200 rounded-lg font-inter">
            <p className="text-sm text-gray-600 mb-2 font-bold">
              Primary: Inter
            </p>
            <p className="text-lg text-gray-900">
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-2 font-inter font-bold">
              Monospace: IBM Plex Mono
            </p>
            <p className="text-sm font-mono text-gray-900">
              AUD-2025-001 • 0x4A3B2C1D
            </p>
          </div>
        </div>
      </div>

      {/* Headings */}
      <div className="mb-8">
        <p className="uppercase text-sm text-gray-600 mb-4">Headings</p>
        <div className="space-y-3 font-inter ">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h1 className="text-3xl text-gray-900 font-semibold">Heading 1</h1>
            <p className="text-sm text-gray-600 mt-2">
              text-3xl • font-weight: 600
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h2 className="text-2xl text-gray-900 font-semibold">Heading 2</h2>
            <p className="text-sm text-gray-600 mt-2">
              text-2xl • font-weight: 600
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-xl text-gray-900 font-semibold">Heading 3</h3>
            <p className="text-sm text-gray-600 mt-2">
              text-lg • font-weight: 600
            </p>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div>
        <p className="uppercase text-sm text-gray-600 mb-4">Body Text</p>
        <div className="space-y-3 font-inter">
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-base font-normal text-gray-900">
              Body Regular - Default body text for readability and consistency.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              text-base • font-weight: 400
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-sm font-normal text-gray-600">
              Body Small - For captions, labels, and secondary information.
            </p>
            <p className="text-sm  text-gray-600 mt-2">
              text-sm • font-weight: 400
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
