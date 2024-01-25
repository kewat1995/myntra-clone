import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((state) => state.bag);
  const element = bagItems.indexOf(item.id) >= 0;

  const handelAddItems = () => {
    dispatch(bagSliceActions.addToitems(item.id));
  };
  const handelRemoveItems = () => {
    dispatch(bagSliceActions.removeFromitems(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">${item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {element ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handelRemoveItems}
        >
          <MdDelete /> Remove to items
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handelAddItems}
        >
          <IoIosAddCircle /> Add To Items
        </button>
      )}
    </div>
  );
};

export default HomeItems;
