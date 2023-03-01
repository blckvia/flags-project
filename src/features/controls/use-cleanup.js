import { useDispatch } from 'react-redux';
import { clearControls } from '../features/controls/controls-slice';

export const useCleanup = () => {
  const dispatch = useDispatch();
  const cleanUp = () => dispatch(clearControls());

  return cleanUp;
};
