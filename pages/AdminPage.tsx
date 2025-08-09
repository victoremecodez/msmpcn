

import React from 'react';
import { AdminView } from '../../App.tsx';
import AdminLayout from '../components/admin/AdminLayout.tsx';
import DashboardHome from '../components/admin/DashboardHome.tsx';
import ManageContent from '../components/admin/ManageContent.tsx';
import ManageSermons from '../components/admin/ManageSermons.tsx';
import ManageEvents from '../components/admin/ManageEvents.tsx';
import AdminSettings from '../components/admin/AdminSettings.tsx';

interface AdminPageProps {
  currentView: AdminView;
  onSetView: (view: AdminView) => void;
  onLogout: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ currentView, onSetView, onLogout }) => {

  const renderAdminView = () => {
    switch(currentView) {
      case 'dashboard':
        return <DashboardHome onSetView={onSetView} />;
      case 'content':
        return <ManageContent />;
      case 'sermons':
        return <ManageSermons />;
      case 'events':
        return <ManageEvents />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <DashboardHome onSetView={onSetView} />;
    }
  }

  return (
    <AdminLayout activeView={currentView} onSetView={onSetView} onLogout={onLogout}>
      {renderAdminView()}
    </AdminLayout>
  );
};
export default AdminPage;