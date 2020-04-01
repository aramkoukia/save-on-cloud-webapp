import InsertChart from '@material-ui/icons/InsertChart';
import Reports from '../views/Reports/Reports';
import LoginPage from '../views/Login/Login';
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
    path: '/login',
    sidebarName: 'Login',
    navbarName: '',
    icon: InsertChart,
    component: LoginPage,
    // redirect: true,
  },
];

export default dashboardRoutes;
