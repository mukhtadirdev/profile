'use client';

import React, { useEffect, useState } from 'react';
import { Cursor } from './Cursor';
import { ScrollProgress } from './ScrollProgress';

export const ClientProviders: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <>
          <ScrollProgress />
          <Cursor />
        </>
      )}
      {children}
    </>
  );
};
