export default function Footer() {
  return (
    <section className="bg-(--text-color) text-white py-12 px-6 md:px-12 lg:px-25">
      <div className="">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-gray-300 text-xl md:text-2xl font-bold mb-6">
              LIKED MY WORK??
            </h3>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              LET&apos;S CONNECT
            </h2>
            <p className="text-gray-300 text-2xl font-bold">
              WHAT&apos;S YOUR POISON??
            </p>
          </div>

          {/* Right Content - Contact Buttons */}
          <div className="flex flex-col gap-6 lg:min-w-[300px]">
            {/* Call Button */}
            <a
              href="tel:+917869963454"
              className="flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-gray-500 rounded-full hover:bg-gray-700 hover:border-gray-400 transition-all duration-300 group"
            >
              <svg
                className="w-8 h-8 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              <span className="text-2xl font-bold">CALL</span>
            </a>

            {/* Mail Button */}
            <a
              href="mailto:viditshah2019@gmail.com"
              className="flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-gray-500 rounded-full hover:bg-gray-700 hover:border-gray-400 transition-all duration-300 group"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5 5h14l-7 6z" />
                <path fill="#FBBC05" d="M5 5v14l7-7z" />
                <path fill="#34A853" d="M19 19V5l-7 7z" />
                <path fill="#4285F4" d="M5 19h14l-7-7z" />
              </svg>
              <span className="text-2xl font-bold ">MAIL</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/<7869963454>"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-gray-500 rounded-full hover:bg-gray-700 hover:border-gray-400 transition-all duration-300 group"
            >
              <svg
                className="w-8 h-8 text-green-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-2xl font-bold ">WHATSAPP</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-5 border-t-[2px] border-[#D2D2D2]/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-300 text-sm md:text-2xl font-bold">
            © 2025 VIDIT SHAH | ALL RIGHTS RESERVED
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
