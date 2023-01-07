import React from 'react';

import { PropsType } from './type';
import useModalWrapper from './useModalWrapper';

const ModalWrapper: React.FC<PropsType> = (props) => {
  const { hideModals } = useModalWrapper();

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
