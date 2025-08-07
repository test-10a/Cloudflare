export default function Home() {
  console.log('HOMEPAGE VISITED');
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-blue-900 mb-4">
            ICRA 2026
          </h1>
          <h2 className="text-2xl text-gray-700 mb-2">
            International Conference on Robotics and Automation
          </h2>
          <p className="text-xl text-gray-600">
            May 25-29, 2026 | Location TBD
          </p>
        </header>

        <section className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-3xl font-semibold text-blue-800 mb-4">
              Welcome to ICRA 2026
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The International Conference on Robotics and Automation (ICRA) is the IEEE Robotics and 
              Automation Society's flagship conference and the premier international forum for robotics researchers 
              to present and discuss their work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              ICRA 2026 will bring together the world's top researchers and most important companies to share 
              ideas and advances in our field. The conference will feature plenary talks, contributed paper 
              presentations, workshops, tutorials, exhibitions, and robot competitions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-blue-700 mb-3">Important Dates</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Paper Submission Deadline: TBD</li>
                <li>Notification of Acceptance: TBD</li>
                <li>Camera Ready Deadline: TBD</li>
                <li>Conference Dates: May 25-29, 2026</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-blue-700 mb-3">Conference Topics</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Robot Manipulation and Grasping</li>
                <li>Machine Learning for Robotics</li>
                <li>Human-Robot Interaction</li>
                <li>Autonomous Navigation</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8 mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="mb-4">
              More information will be available soon. Check back regularly for updates on paper submission, 
              registration, and conference program.
            </p>
            <p className="text-blue-200">
              Contact: info@icra2026.org
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}