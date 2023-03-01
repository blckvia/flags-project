import { useSelector, useDispatch } from 'react-redux';
import { selectSearch } from '../../store/controls/control-selector';
import { setSearch } from '../../store/controls/control-actions';

export const useSearch = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
