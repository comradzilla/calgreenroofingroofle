import Image from "next/image"

interface RoofImageDisplayProps {
  address: string
}

export default function RoofImageDisplay({ address }: RoofImageDisplayProps) {
  // Mock data for roof dimensions
  const roofData = {
    squareFootage: 2450,
    pitch: "5:12",
    complexity: "Medium",
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Roof Analysis for: {address}</h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-[300px] rounded-lg overflow-hidden border-2 border-primary">
          {/* Mock aerial image */}
          <Image
            src="https://images.unsplash.com/photo-1593604572577-1c6c44fa2f9f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Aerial view of roof"
            fill
            className="object-cover"
          />

          {/* Overlay with dimensions */}
          <div className="absolute inset-0 bg-black/20">
            {/* Mock dimension lines */}
            <div className="absolute top-1/4 left-[10%] right-[10%] h-0.5 bg-white"></div>
            <div className="absolute top-[10%] bottom-[10%] left-1/4 w-0.5 bg-white"></div>

            {/* Dimension labels */}
            <div className="absolute top-[22%] left-1/2 transform -translate-x-1/2 bg-primary text-white px-2 py-0.5 text-sm rounded">
              65 ft
            </div>
            <div className="absolute left-[22%] top-1/2 transform -translate-y-1/2 rotate-90 bg-primary text-white px-2 py-0.5 text-sm rounded">
              38 ft
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Roof Details</h4>
          <ul className="space-y-4">
            <li className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Square Footage:</span>
              <span className="font-medium">{roofData.squareFootage} sq ft</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Roof Pitch:</span>
              <span className="font-medium">{roofData.pitch}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Complexity:</span>
              <span className="font-medium">{roofData.complexity}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span className="text-gray-600">Estimated Area:</span>
              <span className="font-medium">2,470 sq ft</span>
            </li>
          </ul>

          <div className="mt-4 bg-primary/10 p-3 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> This is a preliminary measurement based on satellite imagery. A final quote will
              require verification by our roofing professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
