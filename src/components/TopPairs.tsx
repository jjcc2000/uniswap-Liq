"use client";

import { useQuery } from "@apollo/client";
import { GET_TOP_PAIRS } from "../queries/getTopPairs";

const TopPairs = () => {
  const { loading, error, data } = useQuery(GET_TOP_PAIRS);

  if (loading) return <p className="text-gray-400">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4">Top Pairs by Volume</h2>
      <ul className="space-y-3">
        {data.pairs.map((pair: any, i: number) => (
          <li key={pair.id} className="flex justify-between items-center">
            <span>
              {i + 1}. {pair.token0.symbol}/{pair.token1.symbol}
            </span>
            <div className="text-right">
              <p className="text-sm text-gray-700">
                Volume: ${parseFloat(pair.volumeUSD).toFixed(2)}
              </p>
              <p className="text-xs text-gray-500">
                Liquidity: ${parseFloat(pair.reserveUSD).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopPairs;
