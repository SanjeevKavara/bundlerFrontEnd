import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentSuccess from './components/Donate/Payments/PaymentSuccess';
import PaymentFail from './components/Donate/Payments/PaymentFail';
import Donate from './components/Donate/Payments/Donate';
import CourseDetail from './components/CoursePage/CourseDetail';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Addanime from './components/Admin/AddAnime/Addanime'
import AdminCourses from './components/Admin/AdminCourses/AdminCourses'
import Users from './components/Admin/Users/Users'


function App() {

  // window.addEventListener('contextmenu', function (e) { // Not allow right click on website 
  //   e.preventDefault(); // Not allow right click on website 
  // });


  return (
    <Router>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/request' element={<Request />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/changepassword' element={<ChangePassword />} />

        <Route path='/updateprofile' element={<UpdateProfile />} />


        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/donate' element={<Donate />} />


        <Route path='*' element={<NotFound />} />
        <Route path='/paymentsuccess' element={<PaymentSuccess />} />
        <Route path='/paymentfail' element={<PaymentFail />} />



        {/* Admin Routes */ }
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/addanime' element={<Addanime />} />
        <Route path='/admin/admincourses' element={<AdminCourses />} />
        <Route path='/admin/users' element={<Users />} />







      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
