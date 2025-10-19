"use client";

export default function AboutPageButton() {
  const handleClick = () => {
    console.log("About Page clicked!");
  };

  return (
    <div className="fixed top-8 right-5 z-50">
      <button
        onClick={handleClick}
        className="cursor-pointer bg-gray-200 p-4 rounded-full shadow-lg transition-all duration-300 active:scale-95"
        aria-label="About Page"
      >
        <svg
          width="38"
          height="40"
          viewBox="0 0 38 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.708206 14.7233H37.2891V22.6799C37.2891 33.9355 30.2058 40 19.1442 40C2.26071 40 0.708206 29.3751 0.708206 23.3591V14.7233ZM28.1681 24.6205H9.53807C9.58658 29.1325 15.2144 29.9087 18.659 29.9087C22.6373 29.9087 28.1681 29.1325 28.1681 24.6205Z"
            fill="#363636"
          />
          <path
            d="M32.3453 9.88982C29.6226 9.88982 27.4154 7.68262 27.4154 4.95991C27.4154 2.2372 29.6226 0.0300066 32.3453 0.0300066C35.068 0.0300066 37.2752 2.2372 37.2752 4.95991C37.2752 7.68262 35.068 9.88982 32.3453 9.88982Z"
            fill="#363636"
          />
          <path
            d="M23.4439 9.65728e-05V9.89692H0.721886V0L23.4439 9.65728e-05Z"
            fill="#363636"
          />
        </svg>
      </button>
    </div>
  );
}
