import Headers from "../components/Headers";
import Footers from "../components/Footers";
import ProgressBar from "../components/ProgressBar";
import { Outlet } from "react-router-dom";
import FetchingItems from "../components/FetchingItems";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  return (
    <>
      <Headers />
      {fetchStatus.currentlyFetching ? <ProgressBar /> : <Outlet />}
      <FetchingItems />

      <Footers />
    </>
  );
}

export default App;
