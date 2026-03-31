export const Banner = () => (
  <div className="flex flex-col md:flex-row items-center justify-between px-12 py-20 bg-gray-50">
    
    {/* LEFT */}
    <div className="max-w-xl">
      
      {/* Badge */}
      <div className="inline-block bg-purple-100 text-purple-600 text-sm px-4 py-1 rounded-full mb-4">
        ● New: AI-Powered Tools Available
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-800 leading-tight">
        Supercharge Your <br /> Digital Workflow
      </h1>

      {/* Description */}
      <p className="text-gray-500 mt-5">
        Access premium AI tools, design assets, templates, and productivity <br /> software—
        all in one place. Start creating faster today. <br />
        Explore Products
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-medium">
          Explore Products
        </button>

        <button className="flex items-center gap-2 border border-purple-500 text-purple-600 px-6 py-3 rounded-full text-sm">
          ▶ Watch Demo
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="mb-[60px] w-[420px] h-[420px] bg-gray-200 rounded-xl mt-10 md:mt-0"><img src="./assets/banner.png" alt="banner" /></div>
  </div>
);