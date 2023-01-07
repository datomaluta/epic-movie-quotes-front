import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ReturnDataTypes } from './types';

const useShowModals = (): ReturnDataTypes => {
  const isRegistering = useSelector(
    (state: RootState) => state.auth.isRegistering
  );

  const isLogining = useSelector((state: RootState) => state.auth.isLogining);

  return { isRegistering, isLogining };
};

export default useShowModals;
