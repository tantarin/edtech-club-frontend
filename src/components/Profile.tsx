import React from "react";
import { getCurrentUser } from "../services/auth.service";

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();

  return (
      <>
          <h2 className="mt-5 ml-5">My Profile</h2>
          <div className="row justify-content-around mt-5 user-info">
              <div className="col-12 col-md-3">
                  <figure className='avatar avatar-profile'>
                      <img className="rounded-circle img-fluid"   src={`https://picsum.photos/200/300`}
                           alt={`The image alt tag for the big image`}/>
                  </figure>
                  <a href="#" id="edit_profile" className="btn btn-primary btn-block my-5">
                      Edit Profile
                  </a>
              </div>

              <div className="col-12 col-md-5">
                  <h4>Full Name</h4>
                  <p>Ghulam Abbas</p>

                  <h4>Email Address</h4>
                  <p>ghulamabbas258@gmail.com</p>

                  <a href="#" className="btn btn-danger btn-block mt-5">
                      My Orders
                  </a>

                  <a href="#" className="btn btn-primary btn-block mt-3">
                      Change Password
                  </a>
              </div>
          </div>
      </>
  );
};

export default Profile;
