import React from "react";
import TableAdmin from "../components/TableAdmin";
import { NavLink, Outlet } from "react-router-dom";

const DaftarAdminKPU = () => {

  return (
    <React.Fragment>
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">Daftar Admin KPU</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><NavLink to="/dashboard">Pengguna</NavLink></li>
                        <li className="breadcrumb-item active">Admin</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <TableAdmin />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>

        <Outlet />
    </React.Fragment>
  )
}

export default DaftarAdminKPU