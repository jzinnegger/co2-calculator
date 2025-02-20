// app/components/LoadingState.tsx
import { Card, CardContent } from "./ui/card";

export default function LoadingState() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
        </div>
      </CardContent>
    </Card>
  );
}