import { Navigate,Outlet } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import DaftarCaleg from './Pages/DaftarCaleg';
import DaftarBacaleg from './Pages/DaftarBacaleg';
import Verifikasi from './Pages/Verifikasi';
import DaftarAdminParpol from './Pages/DaftarAdminParpol';
import TambahUser from './Pages/TambahUser';
import Header from './components/Header';
import SideNav from './components/SideNav';
import DetailCalon from './Pages/DetailCalon';
import DataCalon from './Pages/DataCalon';

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? (
      <>
        <Header />
        <SideNav />
        <Outlet />
      </>
    ) : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <Home /> },
      { path: '/caleg', element: <DaftarCaleg /> },
      { path: '/bacaleg', element: <DaftarBacaleg /> },
      { path: '/detail', element: <DataCalon /> },
      { path: 'verifikasi/user', element: <DetailCalon /> },
      {
        path: 'verifikasi',
        element: <Verifikasi />,
      },
      { path: '/pengguna/tambah', element: <TambahUser /> },
      { path: '/pengguna/list', element: <DaftarAdminParpol /> },
      { path: '/', element: <Navigate to="/dashboard" /> },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <Login /> : <Navigate to="/dashboard" />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '/', element: <Navigate to="/login" /> },
    ],
  },
];

export default routes;