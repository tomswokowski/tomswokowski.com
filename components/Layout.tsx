import { ReactNode } from 'react';
import Navigation from './Navigation';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen-md mx-auto">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
