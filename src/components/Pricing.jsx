export const Pricing = () => (
  <div className="py-20 bg-gray-50 text-center">

    {/* HEADER */}
    <h2 className="text-4xl font-bold text-gray-900">
      Simple, Transparent Pricing
    </h2>
    <p className="text-gray-500 mt-3">
      Choose the plan that fits your needs. Upgrade or downgrade anytime.
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-3 gap-8 px-10 mt-14">

      {/* STARTER */}
      <div className="bg-white p-8 rounded-2xl border text-left">
        <h3 className="font-semibold text-lg">Starter</h3>
        <p className="text-gray-500 text-sm">Perfect for getting started</p>

        <h2 className="text-4xl font-bold mt-4">
          $0<span className="text-sm text-gray-400">/Month</span>
        </h2>

        {/* FEATURES */}
        <ul className="mt-6 space-y-3 text-gray-600 text-sm">
          <li>✔ Access to 10 free tools</li>
          <li>✔ Basic templates</li>
          <li>✔ Community support</li>
          <li>✔ 1 project per month</li>
        </ul>

        <button className="mt-8 w-full py-3 rounded-full text-white 
          bg-gradient-to-r from-indigo-600 to-purple-600">
          Get Started Free
        </button>
      </div>

      {/* PRO */}
      <div className="p-8 rounded-2xl text-white 
        bg-gradient-to-r from-indigo-600 to-purple-600 relative scale-105 shadow-lg">

        <span className="absolute -top-3 left-1/2 -translate-x-1/2 
          bg-yellow-300 text-xs px-3 py-1 rounded-full text-black">
          Most Popular
        </span>

        <h3 className="font-semibold text-lg">Pro</h3>
        <p className="text-sm opacity-90">Best for professionals</p>

        <h2 className="text-4xl font-bold mt-4">
          $29<span className="text-sm">/Month</span>
        </h2>

        {/* FEATURES */}
        <ul className="mt-6 space-y-3 text-sm">
          <li>✔ Access to all premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
          <li>✔ Unlimited projects</li>
          <li>✔ Cloud sync</li>
          <li>✔ Advanced analytics</li>
        </ul>

        <button className="mt-8 w-full py-3 rounded-full 
          bg-white text-purple-600 font-medium">
          Start Pro Trial
        </button>
      </div>

      {/* ENTERPRISE */}
      <div className="bg-white p-8 rounded-2xl border text-left">
        <h3 className="font-semibold text-lg">Enterprise</h3>
        <p className="text-gray-500 text-sm">For teams and businesses</p>

        <h2 className="text-4xl font-bold mt-4">
          $99<span className="text-sm text-gray-400">/Month</span>
        </h2>

        {/* FEATURES */}
        <ul className="mt-6 space-y-3 text-gray-600 text-sm">
          <li>✔ Everything in Pro</li>
          <li>✔ Team collaboration</li>
          <li>✔ Custom integrations</li>
          <li>✔ Dedicated support</li>
          <li>✔ SLA guarantee</li>
          <li>✔ Custom branding</li>
        </ul>

        <button className="mt-8 w-full py-3 rounded-full text-white 
          bg-gradient-to-r from-indigo-600 to-purple-600">
          Contact Sales
        </button>
      </div>

    </div>
  </div>
);