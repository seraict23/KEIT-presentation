import React from 'react';
import max from '../data/max';
import test_data from '../data/test';
import MenuBar from '../components/MenuBar';

export default function RootSubLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className='m-2 min-w-200 overflow-scroll'>
    <div className='border-y border-black border-solid'>
      <MenuBar max={test_data} />
    </div>
    <div>
      {children}
    </div>
  </div>
);
}