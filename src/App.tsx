import Asidebar from "./components/Asidebar";
import OverviewPage from "./pages/HomePage";

export default function App() {

  return (
    <div className="flex min-h-screen  bg-gray-100 font-sans h-[1064px]">
      <Asidebar />
      <OverviewPage />
    </div>
  );
}
