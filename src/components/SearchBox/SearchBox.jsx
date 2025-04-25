import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.searchWrapper}>
      <label htmlFor="search">
        <span>Find contacts by name</span>
        <input id="search" type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default SearchBox;
