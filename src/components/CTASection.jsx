export const CTASection = () => {
  return (
    <section className="bg-gradient-to-r to-purple-600 from-indigo-600 text-white py-24">

      <div className="max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-purple-100 mb-10">
          Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">

          {/* Primary Button */}
          <button className="bg-white text-purple-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Products
          </button>

          {/* Secondary Button */}
          <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-purple-700 transition">
            View Pricing
          </button>

        </div>

        {/* Trial Info */}
        <p className="text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>

    </section>
  );
};