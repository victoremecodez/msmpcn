import React from 'react';
import UserDashboardSidebar from './UserDashboardSidebar.tsx';
import { User, DashboardView } from '../../types.ts';

interface UserDashboardLayoutProps {
  children: React.ReactNode;
  user: User;
  activeView: DashboardView;
  onSetView: (view: DashboardView) => void;
  onLogout: () => void;
}

const UserDashboardLayout: React.FC<UserDashboardLayoutProps> = ({ children, user, activeView, onSetView, onLogout }) => {
  return (
    <div className="flex min-h-screen bg-church-gray">
      <UserDashboardSidebar user={user} activeView={activeView} onSetView={onSetView} onLogout={onLogout} />
      <div className="flex-1 flex flex-col pl-0 lg:pl-64 pt-16 lg:pt-0">
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
