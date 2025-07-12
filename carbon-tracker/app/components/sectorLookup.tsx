import { useState } from "react"

export default function SectorLookup({ sectorList }: { sectorList: any[] }) {
  const [inputValue, setInputValue] = useState('')
  const [selectedSector, setSelectedSector] = useState<any | null>(null)

  const handleLookup = () => {
    const index = parseInt(inputValue)
    if (!isNaN(index) && sectorList[index]) {
      setSelectedSector(sectorList[index])
    } else {
      setSelectedSector(null)
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        className="border p-2"
        placeholder="Enter sector index"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleLookup}
      >
        Lookup
      </button>

      <ul className="flex flex-col gap-3">
        {selectedSector && (
          <>
            <h1 className="text-lg font-bold">{selectedSector.sector}</h1>
            {selectedSector.activities.map((activity: any, index: number) => (
              <li key={index}>
                {activity.activity}: {activity.emissions_mtco2} in{' '}
                {activity.unit_emission['unit']}:{' '}
                <span>
                  Value in Kg's of CO₂: {activity.unit_emission['value_kgco2']}
                </span>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  )
}