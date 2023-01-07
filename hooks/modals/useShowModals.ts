import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { returnDataTypes } from './type';

const useShowModals = (): returnDataTypes => {
  const isRegistering = useSelector(
    (state: RootState) => state.auth.isRegistering
  );

  const isLogining = useSelector((state: RootState) => state.auth.isLogining);

  return { isRegistering, isLogining };
};

export default useShowModals;
