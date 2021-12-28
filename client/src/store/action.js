import { toast } from 'react-toastify';
import axios from '../api/config';

// AUTH
export function setAuth(payload) {
  return { type: 'AUTH/UPDATEAUTH', payload }
}
// REGION
export function setProvinces(payload) {
  return { type: 'REGION/ADDPROVINCES', payload }
}

export function setDistricts(payload) {
  return { type: 'REGION/ADDDISTRICTS', payload }
}

export function setSubdistricts(payload) {
  return { type: 'REGION/ADDSUBDISTRICTS', payload }
}

export function setLoadingProvinces(payload) {
  return { type: 'LOADING/CHANGELOADINGPROVINCES', payload }
}

// CALEG
export function setLoadingCaleg(payload) {
  return { type: 'LOADING/CHANGELOADINGCALEG', payload }
}
export function setCalegs(payload) {
  return { type: 'CALEG/ADDCALEGLIST', payload }
}

export function setCaleg(payload) {
  return { type: 'CALEG/ADDCALEG', payload }
}

export function setCalegRegistered(payload) {
  return { type: 'CALEG/ADDCALEGREGISTER', payload }
}

export function setCalegValidate(payload) {
  return { type: 'CALEG/ADDCALEGVALIDATE', payload }
}

export function setCalegVerified(payload) {
  return { type: 'CALEG/ADDCALEGVERIFIED', payload }
}

// STATUS
export function setStatus(payload) {
  return { type: 'STATUS/UPDATESTATUS', payload }
}

// ADMIN KPU
export function setUsers(payload) {
  return { type: 'USER/ADDUSERLIST', payload }
}

export function setLoadingUsers(payload) {
  return { type: 'LOADING/CHANGELOADINGUSERS', payload }
}

// PARPOL
export function setParpols(payload) {
  return { type: 'PARPOL/ADDPARPOLLIST', payload }
}
export function setParpol(payload) {
  return { type: 'PARPOL/ADDPARPOLCALEG', payload }
}

export function setLoadingParpols(payload) {
  return { type: 'LOADING/CHANGELOADINGPARPOLS', payload }
}

// DAPIL
export function setDapils(payload) {
  return { type: 'DAPIL/ADDDAPILLIST', payload }
}
export function setDapil(payload) {
  return { type: 'DAPIL/ADDDAPILCALEG', payload }
}

export function setLoadingDapils(payload) {
  return { type: 'LOADING/CHANGELOADINGDAPILS', payload }
}

// DOKUMEN
export function setDokumen(payload) {
  return { type: 'DOKUMEN/ADDDOKUMENCALEG', payload }
}

export function setLoadingDokumen(payload) {
  return { type: 'LOADING/CHANGELOADINGDOKUMEN', payload }
}


// REGION
export function getProvinces() {
  return async (dispatch) => {
    try {
      dispatch(setLoadingProvinces(true));
      await axios({
        url: `/provinces`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        data = data.map( (data, index) => {
          return { value: index + 1, label: data }
        })
        dispatch(setProvinces(data));
        dispatch(setLoadingProvinces(false));
      }).catch(err => {
        dispatch(setLoadingProvinces(false));
        console.log(err);
      })
    } catch(err) {
      console.log(err);
    }
  }
}
export function getDistricts(region, data) {
  return async (dispatch) => {
    try {
      dispatch(setLoadingProvinces(true));
      await axios({
        url: `/region?${region}=${data}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        data = data.map( (data, index) => {
          return { value: index + 1, label: data }
        })
        if (region === 'province') {
          dispatch(setDistricts(data));
        } else {
          dispatch(setSubdistricts(data));
        }
        dispatch(setLoadingProvinces(false));
      }).catch(err => {
        dispatch(setLoadingProvinces(false));
        console.log(err);
      })
    } catch(err) {
      console.log(err);
    }
  }
}

// CALEG
export function getCaleg(id) {
  return async (dispatch) => {
    try {
      await axios({
        url: `caleg/data/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        res.data.provinsi = JSON.parse(res.data.provinsi);
        res.data.kabupaten = JSON.parse(res.data.kabupaten);
        res.data.kecamatan = JSON.parse(res.data.kecamatan);
        dispatch(setCaleg(res.data));
        dispatch(setDapil(res.data.Dapil));
        dispatch(setParpol(res.data.Partai));
        dispatch(setStatus(res.data.StatusCaleg));
        dispatch(setDokumen(res.data.Dokumen));
        dispatch(setLoadingCaleg(false));
      }).catch(err => {
        console.log(err);
      })
    } catch(err) {
      console.log(err);
    }
  }
}

export function getCalegRegistered() { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingCaleg(true));
      await axios({
        url: `caleg/filter/register`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        if (res.data) {
          dispatch(setCalegRegistered(res.data));
        }
        dispatch(setLoadingCaleg(false));
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingCaleg(false));
      })
    } catch(err) {
      console.log(err);
      dispatch(setLoadingCaleg(false));
    }
  }
}

export function getCalegValidate() { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingCaleg(true));
      await axios({
        url: `caleg/filter/validasi`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        console.log(res.data, "VALIDATE");
        if (res.data) {
          dispatch(setCalegValidate(res.data));
        }
        dispatch(setLoadingCaleg(false));
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingCaleg(false));
      })
    } catch(err) {
      console.log(err);
      dispatch(setLoadingCaleg(false));
    }
  }
}

export function getCalegVerified() { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingCaleg(true));
      await axios({
        url: `caleg/filter/verified`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        console.log(res.data, "VERIFIED>>>>>>>>");
        if (res.data) {
          dispatch(setCalegVerified(res.data));
        }
        dispatch(setLoadingCaleg(false));
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingCaleg(false));
      })
    } catch(err) {
      console.log(err);
      dispatch(setLoadingCaleg(false));
    }
  }
}

// ADMIN KPU
export function getUsers() { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingUsers(true))
      await axios({
        url: `user`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        dispatch(setUsers(res.data))
        dispatch(setLoadingUsers(false))
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingUsers(false))
      })
    } catch(err) {
      console.log(err);
    }
  }
}

export function updateActiveUser(id, payload) { 
  console.log(payload);
  const is_active = payload
  return async (dispatch) => {
    try {
      dispatch(setLoadingUsers(true))
      await axios({
        url: `user/status/${id}`,
        method: 'PATCH',
        data: {is_active},
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        dispatch(getUsers())
        dispatch(setLoadingUsers(false))
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingUsers(false))
        toast.error(err.response.data.message[0], {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      })
    } catch(err) {
      console.log(err);
    }
  }
}
export function addUser(payload) { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingUsers(true))
      await axios({
        url: `user/addadmin`,
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        dispatch(setLoadingUsers(false))
        dispatch(getUsers())
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingUsers(false))
        toast.error(err.response.data.message[0], {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      })
    } catch(err) {
      console.log(err);
    }
  }
}
export function deleteUser(id) { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingUsers(true))
      await axios({
        url: `user/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        dispatch(setLoadingUsers(false))
        dispatch(getUsers())
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingUsers(false))
        toast.error(err.response.data.message[0], {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      })
    } catch(err) {
      console.log(err);
    }
  }
}

// PARPOL
export function getParpols() { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingParpols(true))
      await axios({
        url: `partai`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setParpols(res.data))
        dispatch(setLoadingParpols(false))
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingParpols(false))
      })
    } catch(err) {
      console.log(err);
    }
  }
}
export function addParpols(payload) { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingParpols(true))
      await axios({
        url: `partai/add`,
        method: 'POST',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        dispatch(setLoadingParpols(false))
        dispatch(getParpols())
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingParpols(false))
        toast.error(err.response.data.message[0], {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
      })
    } catch(err) {
      console.log(err);
    }
  }
}

// DAPIL
export function getDapils() { 
  return async (dispatch) => {
    try {
      dispatch(setLoadingDapils(true))
      await axios({
        url: `dapil`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setDapils(res.data))
        dispatch(setLoadingDapils(false))
      }).catch(err => {
        console.log(err);
        dispatch(setLoadingDapils(false))
      })
    } catch(err) {
      console.log(err);
    }
  }
}

// export function fetchMovie() {
  // return async (dispatch) => {
  //   try {
  //     const response = await fetch('https://the-one-api.dev/v2/movie', { headers: { "authorization": process.env.REACT_APP_API_KEY }})
  //     const data = await response.json()
  //     dispatch(setMovies(data.docs))
  //     dispatch(setLoadingMovie(false))
  //   } catch(err) {
  //     swal({
  //       title: "Error!",
  //       text: `${err.message}`,
  //       icon: "error",
  //     });
  //   }
  // }
// }