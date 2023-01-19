import { useSelector } from 'react-redux';
import { RootState } from 'store';

const useShowModals = () => {
  const isRegistering = useSelector(
    (state: RootState) => state.auth.isRegistering
  );

  const isLogining = useSelector((state: RootState) => state.auth.isLogining);

  const showForgotPasswordModal = useSelector(
    (state: RootState) => state.auth.showForgotPasswordModal
  );

  const showConfirmEmailSentModal = useSelector(
    (state: RootState) => state.auth.showConfirmEmailSentModal
  );

  return {
    isRegistering,
    isLogining,
    showForgotPasswordModal,
    showConfirmEmailSentModal,
  };
};

export default useShowModals;
