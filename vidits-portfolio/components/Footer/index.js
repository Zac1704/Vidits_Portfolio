import LiquidGlassButton from "./footerButton";

export default function Footer() {
  return (
    <section className="bg-(--text-color) text-white py-12 px-6 md:px-12 lg:px-25">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-1 sm:space-y-2">
            <h3 className="text-(--gray-text-color) text-[24px] md:text-4xl font-bold">
              LIKED MY WORK??
            </h3>
            <h2 className="text-white text-5xl md:text-6xl lg:text-8xl font-black leading-tight">
              LET&apos;S CONNECT
            </h2>
            <p className="text-(--gray-text-color) text-[24px] md:text-4xl font-bold">
              PICK YOUR POISON!!
            </p>
          </div>

          {/* Right Content - Contact Buttons */}
          <div className="flex flex-col gap-6 ">
            {/* Call Button */}
            <LiquidGlassButton type="+917869963454" label="Call" icon="/Images/svg/Footer/call.svg" />

            {/* Mail Button */}
            <LiquidGlassButton type="mailto:viditshah2019@gmail.com" label="Mail" icon="/Images/svg/Footer/mail.svg" />

            {/* WhatsApp Button */}
            <LiquidGlassButton type="https://wa.me/+917869963454" label="Whatsapp" icon="/Images/svg/Footer/whatsapp.svg" />
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
              className="w-12 h-12 bg-gradient-to-t from-[#0059f4] to-[#0046ad] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
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
              className="w-12 h-12 bg-[#0a66c2] rounded-lg flex items-center justify-center transition-colors"
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
