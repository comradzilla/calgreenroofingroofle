"use client"

interface RoofleLoaderProps {
  type: 'slideout' | 'embedded'
  className?: string
}

export default function RoofleLoader({ type, className = "" }: RoofleLoaderProps) {
  if (type === 'slideout') {
    // For slideout, show a small loading indicator
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <div className="bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
          <span className="text-sm text-gray-600">Loading quote tool...</span>
        </div>
      </div>
    )
  }

  // For embedded widget, show a full loading skeleton
  return (
    <div className={`w-full min-h-[800px] bg-white rounded-lg shadow-sm border ${className}`}>
      <div className="p-8 space-y-6">
        {/* Header skeleton */}
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-200 rounded-md w-3/4 mx-auto animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/2 mx-auto animate-pulse"></div>
        </div>

        {/* Address input skeleton */}
        <div className="max-w-md mx-auto space-y-2">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Map skeleton */}
        <div className="h-96 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <div className="text-sm">Loading interactive map...</div>
          </div>
        </div>

        {/* Controls skeleton */}
        <div className="flex justify-center space-x-4">
          <div className="h-10 w-24 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Loading message */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
            <span>Loading roofing quote tool...</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            This may take a few moments to initialize
          </p>
        </div>
      </div>
    </div>
  )
}
