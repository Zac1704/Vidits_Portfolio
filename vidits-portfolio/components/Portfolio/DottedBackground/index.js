const DottedBackground = ({ children }) => {
  return (
    <div
      className="
        relative
        w-full h-[50vh] sm:h-[660px]
        overflow-hidden 
      "
    >
      {/* Dotted Background Layer */}
      <div
        className="
          absolute inset-0 -z-10
          before:content-[''] before:absolute before:inset-0
          before:bg-[radial-gradient(circle,rgba(0,0,0,0.15)_3px,transparent_3px)]
          sm:before:bg-[radial-gradient(circle,rgba(0,0,0,0.15)_5px,transparent_5px)]
          before:[background-size:20px_20px]
          sm:before:[background-size:24px_24px]
          md:before:[background-size:29.6px_29.6px]
        "
      />

      {children}
    </div>
  );
};

export default DottedBackground;
