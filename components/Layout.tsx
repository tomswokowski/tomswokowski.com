import { ReactNode } from 'react';
import Navigation from './Navigation';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;