import React from 'react';
import { useAppContext } from '../context/appContext_93';
const Alert_93 = () => {
  const { alertText, alertType } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert_93;
