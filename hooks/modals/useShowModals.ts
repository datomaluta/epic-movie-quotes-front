import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ReturnDataTypes } from './types';

const useShowModals = (): ReturnDataTypes => {
  const isRegistering = useSelector(
    (state: RootState) => state.auth.isRegistering
  );

  const isLogining = useSelector((state: RootState) => state.auth.isLogining);

  const showForgotPasswordModal = useSelector(
    (state: RootState) => state.auth.showForgotPasswordModal
  );

  return { isRegistering, isLogining, showForgotPasswordModal };
};

export default useShowModals;
