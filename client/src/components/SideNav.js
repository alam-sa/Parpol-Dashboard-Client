import React from 'react'

const SideNav = () => {
    return (
        <div>
           <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="https://res.cloudinary.com/sisfo-uinam/image/upload/v1633628720/parpol/pdip_a54gvt.jpg" alt="Logo" className="brand-image img elevation-3"  />
                <span className="brand-text font-weight-light">GERINDRA</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">Admin</a>
                </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                    with font-awesome or any other icon font library */}
                    <li className="nav-item menu-open">
                    <a href="#" className="nav-link active">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                        Dashboard
                        <i className="right" />
                        </p>
                    </a>
                    </li>
                    {/* caleg */}
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-user-tie" />
                        <p>
                        Bacaleg
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <div className="ml-3">
                                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                    <i className="fas fa-user-tie nav-icon" />
                                    <p>Daftar Bacaleg</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                    </li>
                    {/* .caleg */}

                    {/* Pengguna */}
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-user-cog" />
                        <p>
                        Pengguna
                        <i className="fas fa-angle-left right" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <div className="ml-3">
                                <a href="#" className="nav-link">
                                    <i className="fas fa-user-plus nav-icon" />
                                    <p>Tambah Admin</p>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="ml-3">
                                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                    <i className="fas fa-user-lock nav-icon" />
                                    <p>Daftar Admin</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <div className="ml-3">
                                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                                    <i className="fas fa-user-edit nav-icon" />
                                    <p>Daftar Pengguna</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                    </li>
                    {/* .Pengguna */}
                    <li className="nav-header">Pengaturan Akun</li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-user nav-icon" />
                        <p className="text">Profil</p>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-sign-out-alt nav-icon" />
                        <p className="text">Log Out</p>
                    </a>
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
