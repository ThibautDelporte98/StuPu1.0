import React from 'react';

const AppShell = ({ children }) => {
  return (
    <>
        <div className="px-4 sm:px-8 py-2 bg-gray-100">
          {children}
        </div>
    </>
  );
};

export default AppShell;
