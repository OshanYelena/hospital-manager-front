import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { Switch } from "react-router-dom";

import store, { presistor } from "./redux/store";
import setAuthToken from "./redux/auth/auth.utils";
import { loadUser } from "./redux/auth/auth.actions";

import "./App.css";
import Alert from "./Alert/Alert.component";
import Doctors from "./Pages/Doctors/Doctors/Doctors";
import Home from "./Pages/Home/Home/Home";
import Patients from "./Pages/Patients/Patients";
import Footer from "./Pages/Shared/Footer/Footer";
import Staffs from "./Pages/Staffs/Staffs";
import Appointment from "./Pages/Appointments/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddDoctor from "./Pages/Doctors/AddDoctor/AddDoctor";
import Registration from "./Pages/Login/Registration/Registration";
import PatientViewDoctor from "./Pages/Doctors/Doctors/PatientViewDoctor";
import Login from "./Pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import AddPatient from "./Pages/Patients/AddPatients/AddPatient";
import Logout from "./Pages/Logout/logout";
import DocLogin from "./Pages/Login/DoctorReg/DocLogin";
import { PersistGate } from "redux-persist/integration/react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // useEffect(() => {
  //   store.dispatch();
  // }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={presistor}>
        <div className="App">
          <Alert />
          <Router>
            <Routes>
              {/* NESTED ROUTING APPLIED */}
              <Route path="/" element={<Dashboard />}>
                <Route index element={<Home></Home>} />
                <Route path="doctors" element={<PatientViewDoctor />} />
                <Route path="addDoctor" element={<AddDoctor />} />
                <Route path="patients" element={<Patients />} />
                <Route path="addPatient" element={<AddPatient />} />
                <Route path="staffs" element={<Staffs />} />
                <Route path="appointment" element={<Appointment />}>
                  <Route path=":id" element={<Appointment />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="logout" element={<Logout />} />
                <Route path="registration" element={<Registration />} />
                <Route path="doctorLog" element={<DocLogin />} />

                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
            <Footer></Footer>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
