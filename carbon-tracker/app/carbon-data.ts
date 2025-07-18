export interface CarbonDataEntry {
  year: number;
  sectors: Sector[];
}

export interface Sector {
  sector: string;
  emissions_mtco2: number;
  activities: Activity[];
}

export interface Activity {
  activity: string;
  emissions_mtco2: number;
  unit_emission: UnitEmission;
}

export interface UnitEmission {
  unit: string;
  value_kgco2: number;
}


export const carbonData: CarbonDataEntry[] = [
  {
    "year": 2024,
    "sectors": [
      {
        "sector": "Energy",
        "emissions_mtco2": 14000,
        "activities": [
          {
            "activity": "Electricity & Heat Production",
            "emissions_mtco2": 9200,
            "unit_emission": {
              "unit": "kWh",
              "value_kgco2": 0.45
            }
          },
          {
            "activity": "Manufacturing & Construction",
            "emissions_mtco2": 2800,
            "unit_emission": {
              "unit": "USD million output",
              "value_kgco2": 90000
            }
          },
          {
            "activity": "Fugitive Emissions",
            "emissions_mtco2": 2000,
            "unit_emission": {
              "unit": "operation",
              "value_kgco2": 100000
            }
          }
        ]
      },
      {
        "sector": "Transportation",
        "emissions_mtco2": 7200,
        "activities": [
          {
            "activity": "Passenger Cars",
            "emissions_mtco2": 3400,
            "unit_emission": {
              "unit": "car/year",
              "value_kgco2": 2700
            }
          },
          {
            "activity": "Heavy Trucks",
            "emissions_mtco2": 1200,
            "unit_emission": {
              "unit": "truck/year",
              "value_kgco2": 72000
            }
          },
          {
            "activity": "Light Commercial Vehicles",
            "emissions_mtco2": 700,
            "unit_emission": {
              "unit": "van/year",
              "value_kgco2": 5000
            }
          },
          {
            "activity": "Aviation",
            "emissions_mtco2": 1100,
            "unit_emission": {
              "unit": "passenger/year",
              "value_kgco2": 2300
            }
          },
          {
            "activity": "Shipping",
            "emissions_mtco2": 600,
            "unit_emission": {
              "unit": "ton cargo/km",
              "value_kgco2": 10
            }
          },
          {
            "activity": "Rail",
            "emissions_mtco2": 100,
            "unit_emission": {
              "unit": "passenger/km",
              "value_kgco2": 0.05
            }
          },
          {
            "activity": "Two/Three-Wheelers",
            "emissions_mtco2": 100,
            "unit_emission": {
              "unit": "bike/year",
              "value_kgco2": 720
            }
          }
        ]
      },
      {
        "sector": "Industry",
        "emissions_mtco2": 6800,
        "activities": [
          {
            "activity": "Cement",
            "emissions_mtco2": 1600,
            "unit_emission": {
              "unit": "ton cement",
              "value_kgco2": 900
            }
          },
          {
            "activity": "Iron & Steel",
            "emissions_mtco2": 2300,
            "unit_emission": {
              "unit": "ton steel",
              "value_kgco2": 1850
            }
          },
          {
            "activity": "Chemicals",
            "emissions_mtco2": 1600,
            "unit_emission": {
              "unit": "ton chemicals",
              "value_kgco2": 1800
            }
          },
          {
            "activity": "Other Industrial",
            "emissions_mtco2": 1300,
            "unit_emission": {
              "unit": "USD million output",
              "value_kgco2": 70000
            }
          }
        ]
      },
      {
        "sector": "Agriculture",
        "emissions_mtco2": 6200,
        "activities": [
          {
            "activity": "Livestock (methane)",
            "emissions_mtco2": 2800,
            "unit_emission": {
              "unit": "cow/year",
              "value_kgco2": 2200
            }
          },
          {
            "activity": "Rice Cultivation",
            "emissions_mtco2": 800,
            "unit_emission": {
              "unit": "hectare/year",
              "value_kgco2": 1500
            }
          },
          {
            "activity": "Agricultural Soils",
            "emissions_mtco2": 1600,
            "unit_emission": {
              "unit": "hectare/year",
              "value_kgco2": 1200
            }
          },
          {
            "activity": "Field Burning & Waste",
            "emissions_mtco2": 1000,
            "unit_emission": {
              "unit": "hectare burned",
              "value_kgco2": 3000
            }
          }
        ]
      },
      {
        "sector": "Residential & Commercial",
        "emissions_mtco2": 3300,
        "activities": [
          {
            "activity": "Heating & Cooking",
            "emissions_mtco2": 1800,
            "unit_emission": {
              "unit": "household/year",
              "value_kgco2": 1500
            }
          },
          {
            "activity": "Lighting & Appliances",
            "emissions_mtco2": 1000,
            "unit_emission": {
              "unit": "household/year",
              "value_kgco2": 800
            }
          },
          {
            "activity": "Waste Disposal",
            "emissions_mtco2": 500,
            "unit_emission": {
              "unit": "household/year",
              "value_kgco2": 300
            }
          }
        ]
      }
    ]
  }
]