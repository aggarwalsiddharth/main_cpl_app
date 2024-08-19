import Navbar from "../app/_components/Navbar";
import Sidebar from "../app/_components/Sidebar";
import Board from "../app/_components/Board";
import Filters from "../app/_components/Filters";

export default function Home() {
  return (
    <div>
      <div className="w-screen">
        <Navbar />
      </div>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-grow">
          <Filters />
          <Board />
        </div>
      </div>
    </div>
  );
}
