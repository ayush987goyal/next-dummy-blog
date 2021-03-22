import { FC } from 'react';

import MainNavigation from './main-navigation';

const Layout: FC = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
