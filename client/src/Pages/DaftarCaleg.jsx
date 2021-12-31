import React, { useEffect } from "react";
import Table from "../components/DataTable";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCalegVerified } from "../store/action";

const DaftarCaleg = () => {
  const { verified } = useSelector(state => state.caleg);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCalegVerified())
  }, [])

  useEffect(() => {
  },[verified])

  return (
    <React.Fragment>
      <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                    <h1 className="m-0">CALEG {localStorage.getItem('partai')}</h1>
                    </div>{/* /.col */}
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><NavLink to="/dashboard">Calon</NavLink></li>
                        <li className="breadcrumb-item active">Caleg</li>
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
                            <Table calegs={verified} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    </React.Fragment>
  )
}

export default DaftarCaleg