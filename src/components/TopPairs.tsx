"use client";

import { useQuery } from "@apollo/client";
import { GET_TOP_PAIRS } from "../queries/getTopPairs";

const TopPairs = () => {
  const { loading, error, data } = useQuery(GET_TOP_PAIRS);

  if (loading) return <p className="text-gray-400">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  console.log(data);

  return (
    <div className="p-4 bg-black text-white shadow rounded-xl w-full max-w-2xl">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-left">
        Top Pairs by Volume
      </h2>
      <ul className="space-y-4">
        {data.pairs.map((pair: any, i: number) => (
          <li
            key={pair.id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-900 p-3 rounded-lg"
          >
            <span className="text-base md:text-lg font-medium">
              {i + 1}. {pair.token0.symbol}/{pair.token1.symbol}
            </span>
            <div className="mt-2 sm:mt-0 text-sm md:text-base text-gray-300 text-right sm:text-right">
              <p>Volume: ${parseFloat(pair.volumeUSD).toFixed(2)}</p>
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
