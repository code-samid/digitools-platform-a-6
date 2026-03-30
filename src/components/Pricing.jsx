export const Pricing = () => (
  <div className="py-20 bg-gray-50 text-center">

    <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
    <p className="text-gray-500 mt-2">
      Choose the plan that fits your needs.
    </p>

    <div className="grid md:grid-cols-3 gap-8 px-10 mt-12">

      {/* Starter */}
      <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
        <h3 className="font-semibold text-lg">Starter</h3>
        <p className="text-gray-500 text-sm">Perfect for getting started</p>

        <h2 className="text-3xl font-bold mt-4">$0<span className="text-sm text-gray-400">/Month</span></h2>

        <button className="mt-6 w-full py-3 rounded-full text-white bg-gradient-to-r to-purple-600 from-indigo-500">
          Get Started Free
        </button>
      </div>

      {/* Pro (Highlighted) */}
      <div className="p-8 rounded-2xl text-white bg-gradient-to-r to-purple-600 from-indigo-500 relative">

        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-xs px-3 py-1 rounded-full">
          Most Popular
        </span>

        <h3 className="font-semibold text-lg">Pro</h3>
        <p className="text-sm opacity-80">Best for professionals</p>

        <h2 className="text-3xl font-bold mt-4">$29<span className="text-sm">/Month</span></h2>

        <button className="mt-6 w-full py-3 rounded-full bg-white text-purple-600">
          Start Pro Trial
        </button>
      </div>

      {/* Enterprise */}
      <div className="bg-white p-8 rounded-2xl shadow-sm text-left">
        <h3 className="font-semibold text-lg">Enterprise</h3>
        <p className="text-gray-500 text-sm">For teams</p>

        <h2 className="text-3xl font-bold mt-4">$99<span className="text-sm text-gray-400">/Month</span></h2>

        <button className="mt-6 w-full py-3 rounded-full text-white bg-gradient-to-r to-purple-600 from-indigo-500">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
);
