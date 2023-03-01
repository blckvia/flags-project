import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectControls } from '../controls/controls-slice';
import {
  loadCountries,
  selectCountriesInfo,
  selectVidibleCountries,
} from './countries-slice';

export const useCountries = () => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVidibleCountries(state, controls)
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
