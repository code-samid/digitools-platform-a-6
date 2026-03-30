export const Steps = () => (
  <div className="py-20 text-center">

    <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>
    <p className="text-gray-500 mt-2">
      Start using premium digital tools in minutes, not hours.
    </p>

    <div className="grid md:grid-cols-3 gap-8 px-10 mt-12">

      {[
        { title: "Create Account", step: "01" },
        { title: "Choose Products", step: "02" },
        { title: "Start Creating", step: "03" },
      ].map((item, i) => (
        <div key={i} className="relative bg-white p-8 rounded-2xl shadow-sm">

          {/* Step Number */}
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            {item.step}
          </span>

          {/* Icon */}
          <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full mb-4"></div>

          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum placeholder text like your design.
          </p>
        </div>
      ))}
    </div>
  </div>
);