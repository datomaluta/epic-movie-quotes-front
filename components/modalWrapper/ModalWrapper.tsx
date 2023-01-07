import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from 'store';

const ModalWrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  const dispatch = useDispatch();
  const hideModals = () => {
    dispatch(authActions.hideSignupModal());
    dispatch(authActions.hideLoginModal());
  };
  return (
    <div className='fixed w-full h-screen left-0 top-0 z-50'>
      <div
        className='w-full h-screen backdrop-blur-sm'
        onClick={hideModals}
      ></div>
      {props.children}
    </div>
  );
};

export default ModalWrapper;
