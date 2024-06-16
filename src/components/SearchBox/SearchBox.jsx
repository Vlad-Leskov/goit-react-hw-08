import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="search">Find contact by name:</label>
      <input
        className={css.inputSearch}
        type="text"
        id="search"
        placeholder="Search contacts..."
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
