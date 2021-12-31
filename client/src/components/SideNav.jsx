import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {

  // const { logo, nama_parpol } = useSelector(state => state.parpol);
  const [data, setData] = useState({
    logo: '',
    nama_parpol: ''
  })
  useEffect(() => {
    setData({
      ...data,
      logo: localStorage.getItem('logo'),
      nama_parpol: localStorage.getItem('partai')
    })
  }, [])
  function logout() {
        localStorage.clear();
  }
    return (
        <div>
           <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <NavLink className="brand-link" to='#'>
                <img src={data.logo} alt="KPU Logo" className="logo p-2" style={{height: '40px', width: '40px'}} />
                <span className="brand-text font-weight-light" style={{fontSize: '12px'}}>{data.nama_parpol}</span>
            </NavLink>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-item menu-open">
                    <NavLink className="nav-link" to="/dashboard">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                        Dashboard
                        <i className="right" />
                        </p>
                    </NavLink>
                    </li>
                    {/* caleg */}
                    <li className="nav-item">
                    <a className="nav-link" to="/caleg">
                        <i className="nav-icon fas fa-users" />
                        <p>
                        Daftar Calon
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <div className="ml-3">
                                <NavLink className="nav-link" to="/bacaleg">
                                    <i className="fas fa-user-plus nav-icon" />
                                    <p> Bakal Calon</p>
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="ml-3">
                                <NavLink className="nav-link" to="/caleg">
                                    <i className="fas fa-user-tie nav-icon" />
                                    <p>Calon Legislatif</p>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                    </li>
                    {/* .caleg */}

                    {/* verifikasi */}
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/verifikasi">
                          <i className="nav-icon fas fa-user-check" />
                          <p>
                          Verifikasi
                          </p>
                      </NavLink>
                    </li>
                    {/* .verivikasi */}

                    {/* Pengguna */}
                    <li className="nav-item">
                    <a className="nav-link" to="#">
                        <i className="nav-icon fas fa-user-cog" />
                        <p>
                        Administrator
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <div className="ml-3">
                                <NavLink className="nav-link" to="/pengguna/tambah">
                                    <i className="fas fa-user-plus nav-icon" />
                                    <p>Tambah Admin</p>
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="ml-3">
                                <NavLink className="nav-link" to="/pengguna/list">
                                    <i className="fas fa-users nav-icon" />
                                    <p>Daftar Admin</p>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                    </li>
                    {/* .Pengguna */}
                    <li className="nav-header">Pengaturan Akun</li>
                    <li className="nav-item">
                    <NavLink className="nav-link" onClick={(e) => logout(e)} to="/login">
                        <i className="nav-icon fas fa-sign-out-alt nav-icon" />
                        <p className="text">Log Out</p>
                    </NavLink>
                    </li>
                </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
            </aside>

        </div>
    )
}

export default SideNav
