import InsertChart from '@material-ui/icons/InsertChart';
import Reports from '../views/Reports/Reports';
// import Permissions from '../stores/Permissions';

const dashboardRoutes = [
  {
    path: '/reports',
    sidebarName: 'Dashboard',
    navbarName: '',
    icon: InsertChart,
    component: Reports,
    // permission: Permissions.ViewReports,
  },
  {
    redirect: true, path: '/', to: '/login', navbarName: 'Redirect',
  },
];

export default dashboardRoutes;
