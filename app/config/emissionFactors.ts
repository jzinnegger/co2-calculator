// app/config/emissionFactors.ts
export const emissionFactors = {
  // Building factors
  electricity: {
    value: 0.233,
    unit: 'kg CO2e/kWh',
    source: 'EU EEA'
  },
  waste: {
    value: 0.500,
    unit: 'kg CO2e/kg',
    source: 'EU EEA'
  },
  water: {
    value: 0.300,
    unit: 'kg CO2e/m³',
    source: 'EU EEA'
  },
  gas: {
    value: 2.000,
    unit: 'kg CO2e/m³',
    source: 'EU EEA'
  },
  
  // Transport factors
  car: {
    value: 0.120,
    unit: 'kg CO2e/km',
    source: 'EU JRC'
  },
  bus: {
    value: 0.080,
    unit: 'kg CO2e/km',
    source: 'EU EEA'
  },
  train: {
    value: 0.020,
    unit: 'kg CO2e/km',
    source: 'EU EEA'
  },
  flightShort: {
    value: 0.140,
    unit: 'kg CO2e/km',
    source: 'EU EEA'
  }
} as const;

export type EmissionCategory = keyof typeof emissionFactors;