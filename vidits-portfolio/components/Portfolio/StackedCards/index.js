const colors = ["#9B1B25", "#FFB629", "#276A96", "#0E7F01"];

const StackedCards = () => {
  return (
    <div
      className="
        w-full h-full
        overflow-y-scroll
        px-4 py-10
        relative
      "
    >
      {colors.map((color, index) => (
        <div
          key={index}
          className="
            w-full max-w-[450px] md:max-w-[600px]
            h-40 sm:h-48 md:h-100
            mx-auto rounded-xl shadow-xl
            sticky top-5
            mb-[70px] sm:mb-[162px]
          "
          style={{
            backgroundColor: color,
            zIndex: index + 1,
          }}
        />
      ))}
    </div>
  );
};

export default StackedCards;
