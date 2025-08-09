import React from 'react';
import AdminSidebar from './AdminSidebar.tsx';
import { AdminView } from '../../App.tsx';

interface AdminLayoutProps {
  children: React.ReactNode;
  activeView: AdminView;
  onSetView: (view: AdminView) => void;
  onLogout: () => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, activeView, onSetView, onLogout }) => {
  return (
    <div className="flex min-h-screen bg-church-gray pt-16">
      <AdminSidebar activeView={activeView} onSetView={onSetView} onLogout={onLogout} />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;