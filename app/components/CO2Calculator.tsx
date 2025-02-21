'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import ErrorBoundary from './ErrorBoundary';
import LoadingState from './LoadingState';
import { emissionFactors } from '../config/emissionFactors';
import type { FormData, EmissionResults, PieChartData } from '../types/calculator';

const COLORS = ['#0088FE', '#00C49F'];

const initialFormData: FormData = {
  electricityConsumption: 25000,
  wasteGenerated: 5000,
  waterConsumption: 1000,
  gasConsumption: 10000,
  carTravel: 50000,
  busTravel: 20000,
  trainTravel: 15000,
  flightShortHaul: 10000,
};

const CO2Calculator = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isCalculating, setIsCalculating] = useState(false);
  const [emissions, setEmissions] = useState<EmissionResults>({ building: 0, transport: 0 });

  const calculateEmissions = () => {
    const buildingEmissions = {
      electricity: formData.electricityConsumption * emissionFactors.electricity.value,
      waste: formData.wasteGenerated * emissionFactors.waste.value,
      water: formData.waterConsumption * emissionFactors.water.value,
      gas: formData.gasConsumption * emissionFactors.gas.value,
    };

    const transportEmissions = {
      car: formData.carTravel * emissionFactors.car.value,
      bus: formData.busTravel * emissionFactors.bus.value,
      train: formData.trainTravel * emissionFactors.train.value,
      flight: formData.flightShortHaul * emissionFactors.flightShort.value,
    };

    return {
      building: Object.values(buildingEmissions).reduce((a, b) => a + b, 0),
      transport: Object.values(transportEmissions).reduce((a, b) => a + b, 0),
    };
  };

  useEffect(() => {
    setIsCalculating(true);
    const results = calculateEmissions();
    setEmissions(results);
    setIsCalculating(false);
  }, [formData]);

  const totalEmissions = emissions.building + emissions.transport;

  const pieData: PieChartData[] = [
    { name: 'Building', value: emissions.building },
    { name: 'Transport', value: emissions.transport },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  if (isCalculating) {
    return <LoadingState />;
  }

  return (
    <ErrorBoundary>
      <div className="w-full max-w-4xl mx-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle>SME CO2 Footprint Calculator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Building Emissions Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Building Emissions</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="electricity">
                    Electricity (kWh/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.electricity.unit})
                    </span>
                  </Label>
                  <Input
                    id="electricity"
                    type="number"
                    name="electricityConsumption"
                    value={formData.electricityConsumption}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waste">
                    Waste Generated (kg/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.waste.unit})
                    </span>
                  </Label>
                  <Input
                    id="waste"
                    type="number"
                    name="wasteGenerated"
                    value={formData.wasteGenerated}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="water">
                    Water Consumption (m³/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.water.unit})
                    </span>
                  </Label>
                  <Input
                    id="water"
                    type="number"
                    name="waterConsumption"
                    value={formData.waterConsumption}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gas">
                    Gas Consumption (m³/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.gas.unit})
                    </span>
                  </Label>
                  <Input
                    id="gas"
                    type="number"
                    name="gasConsumption"
                    value={formData.gasConsumption}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
              </div>

              {/* Transport Emissions Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Transport Emissions</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="car">
                    Car Travel (km/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.car.unit})
                    </span>
                  </Label>
                  <Input
                    id="car"
                    type="number"
                    name="carTravel"
                    value={formData.carTravel}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bus">
                    Bus Travel (km/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.bus.unit})
                    </span>
                  </Label>
                  <Input
                    id="bus"
                    type="number"
                    name="busTravel"
                    value={formData.busTravel}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="train">
                    Train Travel (km/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.train.unit})
                    </span>
                  </Label>
                  <Input
                    id="train"
                    type="number"
                    name="trainTravel"
                    value={formData.trainTravel}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="flight">
                    Short Haul Flights (km/year)
                    <span className="text-sm text-gray-500 ml-1">
                      ({emissionFactors.flightShort.unit})
                    </span>
                  </Label>
                  <Input
                    id="flight"
                    type="number"
                    name="flightShortHaul"
                    value={formData.flightShortHaul}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${Number(value).toFixed(2)} kg CO2e`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-4">
                  <p className="text-xl font-bold">
                    Total CO2 Emissions: {totalEmissions.toFixed(2)} kg CO2e
                  </p>
                  <div className="space-y-2">
                    <p>Building: {emissions.building.toFixed(2)} kg CO2e</p>
                    <p>Transport: {emissions.transport.toFixed(2)} kg CO2e</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-sm text-gray-500 mt-4 border-t pt-4">
            <p>
              This application was autonomously created by Claude 3.5 Sonnet based on a prompt. 
              The calculations and emission factors have not been independently validated and are provided without any warranties.
            </p>
            <p>
              For further information and source code please visit  {' '}
              <a 
                href="https://github.com/jzinnegger/co2-calculator" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
              >
                github.com/jzinnegger/co2-calculator
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </ErrorBoundary>
  );
};

export default CO2Calculator;