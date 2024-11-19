import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import loadgif from '../../../assets/Images/loading.gif';

const Adminlogin = () => {
  const navigate = useNavigate();
  const [adminCookie, setCookie, removeCookie] = useCookies(["useradmin","admin"]);
  const apiKey = process.env.REACT_APP_BASE_URL;
  const [Loading, setLoading] = useState(false);
  const [adminlogin, Selectadminlogin] = useState("");

  // Handle radio button selection
  const handleAdminLoginChange = (event) => {
    Selectadminlogin(event.target.value);
  };

  console.log(adminlogin, 'admin loging selection');

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh', width: '100%' }}>

        {Loading ? (
          <div><img src={loadgif} alt="Loading" /></div> // Loading indicator
        ) : (
          <div className="bg-light border border-1 rounded-3 bg-dark-subtle" style={{ padding: '20px 80px' }}>
            <div className="fw-medium fs-2 p-2">Log In to Admin Panel</div>
            <div className="mb-5 text-center">Enter your mail and Password below</div>

            <Formik
              initialValues={{ adminEmail: '', adminPassword: '' }}
              validationSchema={yup.object({
                adminEmail: yup.string().email('Invalid Email').required('Email is required'),
                adminPassword: yup.string().required('Password is required'),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                setLoading(true);
                try {
                  if (adminlogin === 'Admin') {
                    await axios.post(`http://localhost:7000/subadmin`, values);
                    alert('Admin logged in successfully');
                    setCookie('admin', values.adminEmail); 
                    navigate('/dashboardadmin')
                  }
                  if (adminlogin === 'Subadmin') {
                    await axios.post(`http://localhost:7000/loginmainsubadmin`, values);
                    alert('Super Admin logged in successfully');
                    setCookie('useradmin', values.adminEmail);
                    navigate('/dashboardadmin')
                  }
                } catch (error) {
                  console.log(error);
                  alert('Invalid Credentials');
                } finally {
                  setLoading(false);
                }
              }}
            >
              {
                form => <Form>
                  <dl>
                    <dt>Email</dt>
                    <dd><Field type='input' className='form-control' name='adminEmail' placeholder='Enter Your Email' /></dd>
                    <dd className="text-danger"><ErrorMessage name='adminEmail' /></dd>
                    <dt>Password</dt>
                    <dd><Field type='password' className='form-control' name='adminPassword' placeholder='Enter Your Password' /></dd>
                    <dd>
                      <b>Login as:</b>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="Subadmin"
                          checked={adminlogin === "Subadmin"}
                          onChange={handleAdminLoginChange}
                          name="adminlogin"
                        />
                        <label className="form-check-label">SuperAdmin</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="Admin"
                          checked={adminlogin === "Admin"}
                          onChange={handleAdminLoginChange}
                          name="adminlogin"
                        />
                        <label className="form-check-label">Admin</label>
                      </div>
                    </dd>
                    <dd><button className="btn btn-dark py-2 px-5 w-100 mt-3" type='submit'>Submit</button></dd>
                  </dl>
                </Form>
              }
            </Formik>
          </div>
        )}

      </div>
    </>
  );
}

export default Adminlogin;
