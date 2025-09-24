import React from "react";

function Stuff() {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center">
      <div class="relative mx-auto max-w-md rounded-xl bg-gradient-to-tr from-gray-900 to-[#49C6A8] p-[1px] shadow-lg">
        <div class="bg-black p-7 rounded-xl">
          <h1 class="font-bold text-xl mb-2">Border gradient example</h1>
          <p>Create beautfiul cards with gradient borders with Tailwind CSS.</p>
        </div>
      </div>
      <div className="p-6 flex items-center justify-center">
        <svg
          width="300"
          height="150"
          viewBox="0 0 300 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curved Dotted Line */}
          <path
            d="M 20 120 Q 150 -40 280 120"
            stroke="cyan"
            strokeWidth="4"
            strokeDasharray="10,10"
            fill="transparent"
          />
        </svg>
      </div>

      <div>
        <div className="p-6 flex items-center justify-center">
          <svg
            width="300"
            height="150"
            viewBox="0 0 300 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Curved Dotted Line */}
            <path
              d="M 20 120 Q 150 0 280 80"
              stroke="cyan"
              strokeWidth="6"
              strokeDasharray="14,10"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
      <img
        className="blur-[60px] rounded-lg w-100 absolute -z-10"
        src="https://images.unsplash.com/photo-1705909237050-7a7625b47fac"
        alt="Arbitrary Blur"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
        obcaecati eum perspiciatis, maxime nisi magni asperiores deleniti
        debitis cupiditate provident!
      </p>
    </div>
  );
}

export default Stuff;
