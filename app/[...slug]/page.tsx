export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '/'
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-700 mb-4">
            The page you're looking for doesn't exist yet.
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Requested path: <code className="bg-gray-100 px-2 py-1 rounded">{path}</code>
          </p>
          <p className="text-sm text-gray-400 mb-6">
            This request has been logged for analysis.
          </p>
          <a 
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </main>
  )
}