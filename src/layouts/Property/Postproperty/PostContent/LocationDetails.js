// import React from 'react';
// // import { Link } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import '../../../../layouts/Property/Property.css';
// import TextField from '@mui/material/TextField';

// const LocationDetails = () => {
//   const validationSchema = Yup.object({
//     city: Yup.string().required('City is required'),
//     building: Yup.string().required('Building/Project/Society is required'),
//     locality: Yup.string().required('Locality is required'),
//     address: Yup.string().required('address is required'),
//   });

//   const formik = useFormik({
//     initialValues: {
//       city: '',
//       building: '',
//       locality: '',
//       address: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
  
//   return (
//     <div>
//       <div className="location">
//         <h3 className='basic_heading m-0'>Property Location Details?</h3>
//         <div className="location_details">
//           <form onSubmit={formik.handleSubmit}>
//             <div className="location_city">
//               <TextField
//                 id="city"
//                 name="city"
//                 label="City*"
//                 variant="standard"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.city}
//                 error={formik.touched.city && Boolean(formik.errors.city)}
//                 helperText={formik.touched.city && formik.errors.city}/>
//             </div>
//             <div className="location_city">
//               <TextField
//                 id="building"
//                 name="building"
//                 label="Building/Project/Society*"
//                 variant="standard"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.building}
//                 error={formik.touched.building && Boolean(formik.errors.building)}
//                 helperText={formik.touched.building && formik.errors.building}/>
//             </div>
//             <div className="location_city">
//               <TextField
//                 id="locality"
//                 name="locality"
//                 label="Locality *"
//                 variant="standard"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.locality}
//                 error={formik.touched.locality && Boolean(formik.errors.locality)}
//                 helperText={formik.touched.locality && formik.errors.locality}/>
//             </div>
//             <div className="location_city">
//               <TextField
//                 id="address"
//                 name="address"
//                 label="Address"
//                 variant="standard"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.address}
//                 error={formik.touched.address && Boolean(formik.errors.address)}
//                 helperText={formik.touched.address && formik.errors.address}/>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationDetails;
