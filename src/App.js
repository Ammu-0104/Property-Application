import React from "react";
import { PropertyProvider } from "./layouts/Property/Postproperty/Mycontext";
import Main from "./Component/Main";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import Job from "./layouts/Job";
// import Vehicle from "./layouts/Vehicle";
import Login from "./auth/Login";
// import Demo from "./layouts/demo";
import Register from "./auth/Register";
import ResetPassword from "./auth/ResetPassword";
import Welcome from "./layouts/Welcome";
import Property from "./layouts/Property/property";
import "bootstrap/dist/css/bootstrap.min.css";
import Postproperty from "./layouts/Property/Postproperty/PostProperty";
import BasicDetails from "./layouts/Property/Postproperty/PostContent/BasicDetails";
import PropertyDetails from "./layouts/Property/Postproperty/PostContent/PropertyDetails";
import Photo from "./layouts/Property/Postproperty/PostContent/Photo";
import PricingDetails from "./layouts/Property/Postproperty/PostContent/PricingDetails";
import AmenitiesSection from "./layouts/Property/Postproperty/PostContent/AmenitiesSection";
import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/resetpass" element={<ResetPassword />} />
            <Route path="/main" element={<Main />}>
              <Route index element={<Welcome />} />
              <Route path="/main/property/Postproperty"
                element={
                  <PropertyProvider>
                    <Postproperty />
                  </PropertyProvider>
                }
              />
              {/* <Route path="/main/jobs" element={<Job />} /> */}
              {/* <Route path="/main/vehicle" element={<Vehicle />} /> */}
              <Route path="/main/property" element={<Property />}>
                <Route
                  path="Postproperty"
                  element={<Navigate to="Postproperty/basicdetails" />}
                />
                <Route path="Postproperty" element={<Postproperty />}>
                  <Route path="basicdetails" element={<BasicDetails />} />
                  <Route path="propertydetails" element={<PropertyDetails />} />
                  <Route path="photos" element={<Photo />} />
                  <Route path="pricing-others" element={<PricingDetails />} />
                  <Route
                    path="amenities-section"
                    element={<AmenitiesSection />}
                  />
                </Route>
              </Route>
              {/* <Route path="/main/job" element={<job/>}></Route> */}
              {/* <Route path="/main/demo" element={<Demo />} /> */}
            </Route>
          </Routes>
        </Router>
      </div>
    </PrimeReactProvider>
  );
}

export default App;
