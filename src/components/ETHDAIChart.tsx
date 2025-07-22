import { useQuery } from "@apollo/client";
import { GET_ETH_DAI_HOURLY } from "../queries/getPairHourData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ETHDAIChart = () => {
  const { loading, error, data } = useQuery(GET_ETH_DAI_HOURLY);

  if (loading) return <p>Loading chart...</p>;
  if (error) return <p>Error loading chart: {error.message}</p>;

  // Reverse to get chronological order
  const chartData = data.pairHourDatas
    .map((hour: any) => ({
      time: new Date(hour.hourStartUnix * 1000).getHours() + ":00",
      price: parseFloat(hour.reserve1) / parseFloat(hour.reserve0), // DAI per ETH
    }))
    .reverse();
  console.log(chartData);

  return (
    <div className="p-4 bg-white rounded-xl shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">ETH/DAI Price (Last 24h)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ETHDAIChart;
