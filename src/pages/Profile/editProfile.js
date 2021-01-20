import React, { Component } from 'react';

 
export default class EditProfile extends Component {
  render () {
    return (
<div>
  {/* <div className="page-top-line">
    <h2 className="page-title">
      User - <span className="fw-semi-bold">Password</span>
    </h2>
    <div className="Users_promoAlert__3EC-n Users_showAlert__3SmtE alert alert-success fade show" role="alert">
      This page is only available in
      <a className="text-white font-weight-bold" rel="noreferrer noopener" href="https://flatlogic.com/templates/light-blue-react-node-js" target="_blank">Light Blue React with Node.js/.NET</a>
      integration!
    </div>
  </div> */}
  <section className="widget Widget_widget__2TZ57">
    <header className="Widget_title__3KVxS"><h4>Edit My Profile</h4></header>
    {/* <div className="Widget_widgetControls__3QeoL widget-controls">
      <span><button id="collapseId-b515ce67-e702-4ece-866c-a922b3fa1f1b">
          <i className="la la-angle-down" /></button></span><button id="closeId-b515ce67-e702-4ece-866c-a922b3fa1f1b">
        <i className="la la-remove" />
      </button>
    </div> */}
    <div aria-hidden="false" className="rah-static rah-static--height-auto" style={{height: 'auto', overflow: 'visible'}}>
      <div>
        <div className="Widget_widgetBody__2md2e widget-body ">
          <form>
            <div className="form-group">
              <label className="col-form-label null " htmlFor="firstName">First Name</label><input id="firstName" type="text" className="form-control  "  />
              <div className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label className="col-form-label null " htmlFor="lastName">Last Name</label><input id="lastName" type="text" className="form-control  "  />
              <div className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label className="col-form-label null " htmlFor="phoneNumber">Phone Number</label><input id="phoneNumber" type="text" className="form-control  "  />
              <div className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label className="col-form-label null " htmlFor="email">E-mail</label><input id="email" type="text" className="form-control  " />
              <div className="invalid-feedback" />
            </div>
            <div className="form-group">
              <label className="col-form-label null" htmlFor="avatar">Avatar</label><br />
              <div className="sc-AxjAm bcMPWx">
                <label className="btn btn-outline-secondary px-4 mb-2" style={{cursor: 'pointer'}}>Upload an image<input accept="image/*" type="file" style={{display: 'none'}} /></label>
              </div>
              <div className="invalid-feedback" />
            </div>
            <div className="form-buttons">
              <button className="btn btn-primary mr-3" type="button">Save</button>
              <button className="btn btn-light mr-3" type="button">Reset</button>
              <button className="btn btn-light" type="button">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <div className="Widget_widgetBackground__jmQhW" style={{display: 'none'}} />
</div>
    );
  }
}
