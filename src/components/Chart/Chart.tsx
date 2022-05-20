import { ChartBar } from "./ChartBar";
import "./Chart.css";

interface DataPointsProps {
  dataPoints: Array<{ label: string; value: number }>;
}

export function Chart({ dataPoints }: DataPointsProps) {
  const dataPointsValues = dataPoints.map(dataPoints => dataPoints.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
