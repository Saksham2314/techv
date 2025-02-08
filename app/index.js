export default function Home() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-blue-700">Tech Vitals</h1>
              <p className="mt-4 text-gray-700">
                At Tech Vitals, we bridge the gap between pharmaceutical companies
                and groundbreaking research by providing secure access to
                volunteer data for drug testing. Our platform serves as a
                centralized repository where registered pharmaceutical companies
                can obtain crucial trial data to enhance their drug development
                processes.
              </p>
              <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
                Volunteers' list
              </button>
            </div>
            <div className="flex-1">
              <img
                src="./clinical-trial.jpg" // Replace with your image URL
                alt="Clinical Trial"
                className="rounded-lg shadow"
              />
            </div>
          </div>
  
          {/* How to Register Section */}
          <div className="mt-12">
  <h2 className="text-2xl font-bold text-gray-800">How to Register</h2>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Create an Account",
        description:
          "Sign up on our platform and complete the company verification process.",
        icon: "👤",
      },
      {
        title: "Submit Credentials",
        description:
          "Provide necessary regulatory documents and compliance information.",
        icon: "📋",
      },
      {
        title: "Access Data",
        description:
          "Once approved, gain secure access to our repository of volunteer data for drug testing.",
        icon: "🔑",
      },
    ].map((step, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center 
                   transform transition-transform duration-300 ease-in-out 
                   hover:scale-105 hover:shadow-2xl"
      >
        <div className="text-4xl mb-4">{step.icon}</div>
        <h3 className="text-lg font-bold text-gray-800">{step.title}</h3>
        <p className="mt-2 text-gray-600">{step.description}</p>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    );
  }
  