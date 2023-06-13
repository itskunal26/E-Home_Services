import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./UserPages/HomePage/HomePage";
import UserSignup from "./UserPages/Signup/UserSignup";
import SPLogin from "./SPPages/SPLogin/SPLogin";
import SPSignup from "./SPPages/SPSignup/SPSignup";
import AdminLogin from "./AdminPages/Login/AdminLogin";
import Dash from "./UserPages/UserDashboard/Dash";
import UserDashboard from "./UserPages/UserDashboard/UserDashboard";
import Profile from "./UserPages/Profile/Profile";
import Booking from "./UserPages/Booking/Booking";
import ACService from "./UserPages/Services/AcService/ACService";
import BikeService from "./UserPages/Services/BikeService/BikeService";
import CleaningService from "./UserPages/Services/CleaningService/CleaningService.js";
import PaintingService from "./UserPages/Services/PaintingService/PaintingService";
import PlumbingService from "./UserPages/Services/PlumbingService/PlumbingService";
import PestControlService from "./UserPages/Services/PestControlService/PestControlService";
import ReadReview from "./UserPages/Reviews/ReadReview/ReadReview";
import AddReview from "./UserPages/Reviews/AddReview/AddReview";
import SPDashboard from "./SPPages/SPDashboard/SPDashboard";
import sProfile from "./SPPages/Profile/Profile";
import SPReviews from "./SPPages/SPReviews/SPReviews";
import AdminDashboard from "./AdminPages/AdminDashboard/AdminDashboard";
import RegisterdUsers from "./AdminPages/RegisterdUsers/RegisterdUsers";
import RegisterdSp from "./AdminPages/RegisterdSP/RegisterdSp";
import ApproveSp from "./AdminPages/ApproveSP/ApproveSp";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/home"></Link>

        <Switch>

          {/* User */}
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/usersignup" component={UserSignup} />
          {/* <Route exact path="/dashboard" component={UserDashboard} /> */}
          <Route exact path="/dashboard" component={Dash} /> 
          <Route exact path="/profile" component={Profile} /> 
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/acservice" component={ACService} />
          <Route exact path="/bikeservice" component={BikeService} />
          <Route exact path="/cleaningservice" component={CleaningService} />
          <Route exact path="/paintingservice" component={PaintingService} />
          <Route exact path="/plumbingservice" component={PlumbingService} />
          <Route exact path="/pestcontrol" component={PestControlService} />
          <Route exact path="/reviews" component={ReadReview} />
          <Route exact path="/addreviews" component={AddReview} />



          {/* Service Provider */}
          <Route exact path="/SPLogin" component={SPLogin} />
          <Route exact path="/SPSignup" component={SPSignup} />
          <Route exact path="/spdashboard" component={SPDashboard} />
          <Route exact path="/spprofile" component={sProfile} />
          <Route exact path="/spreviews" component={SPReviews} />


          {/* Admin */}
          <Route exact path="/adminlogin" component={AdminLogin} />
          <Route exact path="/addashboard" component={AdminDashboard} />
          <Route exact path="/registerdusers" component={RegisterdUsers} />
          <Route exact path="/registerdsp" component={RegisterdSp} />
          <Route exact path="/approvesp" component={ApproveSp} />

          <Route exact path="*" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
