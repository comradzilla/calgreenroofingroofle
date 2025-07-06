"use client"

import Link from "next/link"

interface RoofleErrorProps {
  type: 'slideout' | 'embedded'
  error?: any
  onRetry?: () => void
  retryCount?: number
  maxRetries?: number
  className?: string
}

export default function RoofleError({ 
  type, 
  error, 
  onRetry, 
  retryCount = 0, 
  maxRetries = 3,
  className = "" 
}: RoofleErrorProps) {
  const canRetry = retryCount < maxRetries

  if (type === 'slideout') {
    // For slideout, show a small error notification
    return (
      <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
        <div className="bg-red-50 border border-red-200 rounded-lg shadow-lg p-4 max-w-sm">
          <div className="flex items-start space-x-3">
            <div className="text-red-500 text-xl">⚠️</div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-red-800 mb-1">
                Quote Tool Unavailable
              </h4>
              <p className="text-xs text-red-700 mb-3">
                The slideout quote tool failed to load.
              </p>
              <div className="flex space-x-2">
                {canRetry && onRetry && (
                  <button
                    onClick={onRetry}
                    className="text-xs bg-red-100 hover:bg-red-200 text-red-800 px-2 py-1 rounded transition-colors"
                  >
                    Try Again
                  </button>
                )}
                <Link
                  href="/contact"
                  className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // For embedded widget, show a full error state
  return (
    <div className={`w-full min-h-[800px] bg-red-50 border border-red-200 rounded-lg ${className}`}>
      <div className="p-8 text-center space-y-6">
        {/* Error icon */}
        <div className="text-6xl text-red-400 mb-4">⚠️</div>
        
        {/* Error message */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-red-800">
            Quote Tool Unavailable
          </h3>
          <p className="text-red-700 max-w-md mx-auto">
            We're having trouble loading the roofing quote tool. This could be due to a temporary network issue or browser restrictions.
          </p>
          {error && (
            <details className="text-left max-w-md mx-auto mt-4">
              <summary className="text-sm text-red-600 cursor-pointer hover:text-red-800">
                Technical Details
              </summary>
              <pre className="text-xs text-red-600 mt-2 p-2 bg-red-100 rounded overflow-auto">
                {error.toString()}
              </pre>
            </details>
          )}
        </div>

        {/* Retry section */}
        {canRetry && onRetry ? (
          <div className="space-y-3">
            <button
              onClick={onRetry}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Try Again ({maxRetries - retryCount} attempts remaining)
            </button>
            <p className="text-sm text-red-600">
              Attempt {retryCount + 1} of {maxRetries}
            </p>
          </div>
        ) : (
          <div className="text-sm text-red-600">
            Maximum retry attempts reached. Please try the alternatives below.
          </div>
        )}

        {/* Alternative options */}
        <div className="bg-white p-6 rounded-lg shadow-sm border max-w-lg mx-auto">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">
            Alternative Ways to Get Your Quote
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="tel:888-422-5476"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md font-medium transition-colors text-center"
            >
              📞 Call Now
              <div className="text-xs mt-1">(888) 665-3994</div>
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md font-medium transition-colors text-center"
            >
              📧 Contact Form
              <div className="text-xs mt-1">Get a callback</div>
            </Link>
            <a
              href="https://app.roofle.com/widget/TyenXTFKs3GstadLv13T3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-md font-medium transition-colors text-center"
            >
              🔗 Direct Link
              <div className="text-xs mt-1">Open in new tab</div>
            </a>
          </div>
        </div>

        {/* Troubleshooting tips */}
        <div className="text-left max-w-lg mx-auto bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h5 className="font-medium text-yellow-800 mb-2">Troubleshooting Tips:</h5>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Try refreshing the page</li>
            <li>• Disable ad blockers or browser extensions</li>
            <li>• Check your internet connection</li>
            <li>• Try a different browser</li>
            <li>• Clear your browser cache and cookies</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
