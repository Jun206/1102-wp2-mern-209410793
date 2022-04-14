import React from 'react'

import { useAppContext } from '../context/appContext_xx'

const Alert_xx = () => {
  const { alertText, alertType } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}

export default Alert_xx
