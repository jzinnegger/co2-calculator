// app/types/calculator.ts
export interface FormData {
  // Building
  electricityConsumption: number;
  wasteGenerated: number;
  waterConsumption: number;
  gasConsumption: number;
  
  // Transport
  carTravel: number;
  busTravel: number;
  trainTravel: number;
  flightShortHaul: number;
}

export interface EmissionResults {
  building: number;
  transport: number;
}

export interface PieChartData {
  name: string;
  value: number;
}