# SME CO2 Footprint Calculator

A web-based calculator helping small and medium enterprises (SMEs) track and calculate their carbon footprint. The calculator provides instant feedback with numerical results and visual representations.

## Features

- Building emissions tracking (electricity, waste, water, gas)
- Transport emissions tracking (car, bus, train, short-haul flights)
- Real-time calculations
- Visual data representation with pie charts
- Responsive design
- Type-safe implementation

## Tech Stack

- **Framework:** Next.js 14.1.0
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **React Version:** 18.2.0

## Project Structure

```
app/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── CO2Calculator.tsx  # Main calculator component
│   ├── ErrorBoundary.tsx  # Error handling component
│   └── LoadingState.tsx   # Loading state component
├── config/
│   └── emissionFactors.ts # CO2 emission conversion factors
├── types/
│   └── calculator.ts      # TypeScript type definitions
├── lib/
│   └── utils.ts          # Utility functions
├── layout.tsx
├── globals.css
└── page.tsx
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/jzinnegger/co2-calculator.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application
- `npm run start` - Start production server

## Deployment

The project is automatically deployed through Vercel integration. Every push to the main branch triggers a new deployment.

## Project Links

- GitHub Repository: https://github.com/jzinnegger/co2-calculator.git
- Vercel Deployment: [Your Vercel URL]

## Development Status

- ✅ Initial setup complete
- ✅ Core calculator functionality implemented
- ✅ UI components integrated
- ✅ Build errors resolved
- ✅ Local testing successful
- ✅ Production deployment ready
