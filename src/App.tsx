import TopPairs from "./components/TopPairs";
import ETHDAIChart from "./components/ETHDAIChart";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        📊 Uniswap Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <TopPairs />
        <ETHDAIChart />
      </div>
    </div>
  );
}

export default App;
