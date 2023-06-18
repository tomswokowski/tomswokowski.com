import { ReactNode } from 'react';
import Navigation from './Navigation';

type LayoutProps = {
  children: ReactNode;
};

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
