import { useEffect } from "react";

import { itemSliceActions } from "../store/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchingActions } from "../store/FetchingStatusSlice";
const FetchingItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  // console.log(fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchingActions.markFetchStart());
    fetch("https://myntra-backend-server.onrender.com", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchingActions.markFetchDone());
        dispatch(fetchingActions.markFetchFinished());
        dispatch(itemSliceActions.addInitialItems(items));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchingItems;
