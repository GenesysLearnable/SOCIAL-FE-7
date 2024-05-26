import React, { createContext, useState } from 'react';

export const RecoveryContext = createContext();

export const RecoveryProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [page, setPage] = useState('');

  return (
    <RecoveryContext.Provider value={{ email, otp, setPage }}>
      {children}
    </RecoveryContext.Provider>
  );
};
