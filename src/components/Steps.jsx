export const Steps = () => (
  <div className="py-20 text-center">
    <h2 className="text-3xl font-bold">Get Started In 3 Steps</h2>
    <p className="text-gray-500 mt-2">
      Start using premium digital tools in minutes, not hours.
    </p>

    <div className="grid md:grid-cols-3 gap-8 px-10 mt-12">

      {/* Step 1 */}
      <div className="relative bg-white p-8 rounded-2xl shadow-sm">
        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          01
        </span>
        <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full mb-4 flex items-center justify-center">
          <img src="./assets/user.png" alt="Create Account Icon" className="w-8 h-8" />
        </div>
        <h3 className="font-semibold text-lg">Create Account</h3>
        <p className="text-gray-500 text-sm mt-2">
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>

      {/* Step 2 */}
      <div className="relative bg-white p-8 rounded-2xl shadow-sm">
        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          02
        </span>
        <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full mb-4 flex items-center justify-center">
          <img src="./assets/package.png" alt="Choose Products Icon" className="w-8 h-8" />
        </div>
        <h3 className="font-semibold text-lg">Choose Products</h3>
        <p className="text-gray-500 text-sm mt-2">
          Browse our catalog and select the tools
t         hat fit your needs.
        </p>
      </div>

      {/* Step 3 */}
      <div className="relative bg-white p-8 rounded-2xl shadow-sm">
        <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
          03
        </span>
        <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full mb-4 flex items-center justify-center">
          <img src="./assets/rocket.png" alt="Start Creating Icon" className="w-8 h-8" />
        </div>
        <h3 className="font-semibold text-lg">Start Creating</h3>
        <p className="text-gray-500 text-sm mt-2">
          Download and start using your premium 
          tools immediately.
        </p>
      </div>

    </div>
  </div>
);