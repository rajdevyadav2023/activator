import React, { useState } from 'react';
import './my_account.css';
const My_Account = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [createForm, setCreateForm] = useState(false);
  const [account, setAccount] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
  }
  function handleCreate(e) {
    e.preventDefault();
  }
  function handleLoginBtnClick() {
    setAccount(true);
    setLoginForm(false);
  }
  function handleCreateBtnClick() {
    setLoginForm(true);
    setCreateForm(false);
  }
  return (
    <div>
      <div className="my-account-page">
        <div className="entery">
          {/* 1 */}
          <form className="login-form" id='login-form' style={{ display: loginForm ? "block" : "none" }} onSubmit={handleLogin}>
            <p className='heading'>Let's Login</p>

            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input type="text" placeholder='Enter Here' id='username' />
            </div>

            <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder='Enter Here' id='password' />
            </div>
            <div className="form-control btn-group">
              <button className='btn' onClick={() => { setLoginForm(!loginForm); setCreateForm(!createForm) }}>Create New Account</button>
              <button className='btn' type='submit' onClick={handleLoginBtnClick}>Login Now</button>
            </div>

          </form>
          {/* 2 */}
          <form className="create-account-from" id='ca-form' style={{ display: createForm ? "block" : "none" }} onSubmit={handleCreate} >
            <p className='heading'>Let's Create New Account</p>
            <div className="form-controls">
              <div className="form-control">
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder='Enter Here' id='firstname' />
              </div>
              <div className="form-control">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" placeholder='Enter Here' id='lastname' />
              </div>
              <div className="form-control">
                <label htmlFor="create-username">User Name</label>
                <input type="text" placeholder='Enter Here' id='create-username' />
              </div>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Enter Here' id='email' />
              </div>
              <div className="form-control">
                <label htmlFor="create-password">Create Password</label>
                <input type="password" placeholder='Enter Here' id='create-password' />
              </div>
              <div className="form-control">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" placeholder='Enter Here' id='confirm-password' />
              </div>
            </div>


            <div className="form-control btn-group">
              <button className='btn' onClick={() => { setCreateForm(!createForm); setLoginForm(!loginForm); }}>Already Have An Account?</button>
              <button className='btn' type='submit' onClick={handleCreateBtnClick}>Create Now</button>
            </div>
          </form>
        </div>

        <div className="my-account" style={{ display: account ? "flex" : "none" }}>
          <div className="details-container">
            <p>Hi Rajdev, Welcome To Your Profile</p>

            <div className="form-control">
              <label>First Name</label>
              <input type="text" value={"Rajdev"} />
            </div>
            <div className="form-control">
              <label >Last Name</label>
              <input type="text" value={"Yadav"} />
            </div>
            <div className="form-control">
              <label >Username</label>
              <input type="text" value={"@rajdev2023"} />
            </div>
            <div className="form-control">
              <label >Email</label>
              <input type="text" value={"rajdev@yadav.com"} />
            </div>
          </div>
          <div className="edit-container">
            <div className="form-control">
              <label htmlFor="e-fname">First Name</label>
              <input type="text" id='e-fname' placeholder='Rajdev' />
              <div className="btn-group">
                <button className='btn'>Change</button>
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="e-lname">Last Name</label>
              <input type="text" id='e-lname' placeholder='Yadav' />
              <div className="btn-group">
                <button className='btn'>Change</button>
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="e-username">Username</label>
              <input type="text" id='e-username' placeholder='@rajdevyadav2568' />
              <div className="btn-group">
                <button className='btn'>Change</button>
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="e-email">Email</label>
              <input type="text" id='e-email' placeholder='rajdev@yadav.com' />
              <div className="btn-group">
                <button className='btn'>Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default My_Account
