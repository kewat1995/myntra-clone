import BagItems from "../components/BagItems";
import BagSummery from "../components/BagSummery";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.item);
  const finalItems = items.filter((item) => {
    const indexItems = bagItems.indexOf(item.id);
    return indexItems >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItems item={item} />
          ))}
        </div>
        <div className="bag-summary">
          <BagSummery />
        </div>
      </div>
    </main>
  );
};
export default Bag;
