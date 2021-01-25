import React, { Component } from "react";

export default class EditProfile extends Component {
  savePassword= ()=> {
    this.props.history.push('/')
  }
  render() {
    return (
      <section className="widget Widget_widget__2TZ57">
        <header className="Widget_title__3KVxS">
          <h4>Change Password</h4>
        </header>
        {/* <div className="Widget_widgetControls__3QeoL widget-controls">
          <span>
            <button id="collapseId-35d2124f-0a39-4299-a8ab-0de13ee1dcda">
              <i className="la la-angle-down" />
            </button>
          </span>
          <button id="closeId-35d2124f-0a39-4299-a8ab-0de13ee1dcda">
            <i className="la la-remove" />
          </button>
        </div> */}
        <div
          aria-hidden="false"
          className="rah-static rah-static--height-auto"
          style={{ height: "auto", overflow: "visible" }}
        >
          <div>
            <div className="Widget_widgetBody__2md2e widget-body ">
              <form>
                <div className="form-group">
                  <label
                    className="col-form-label null "
                    htmlFor="currentPassword"
                  >
                    Current Password
                  </label>
                  <input
                    id="currentPassword"
                    type="password"
                    className="form-control  "
                   
                  />
                  <div className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label className="col-form-label null " htmlFor="newPassword">
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    className="form-control  "
                    
                  />
                  <div className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label
                    className="col-form-label null "
                    htmlFor="confirmNewPassword"
                  >
                    Confirm new Password
                  </label>
                  <input
                    id="confirmNewPassword"
                    type="password"
                    className="form-control  "
                    
                  />
                  <div className="invalid-feedback" />
                </div>
                <div className="form-buttons">
                  <button className="btn btn-primary mr-md" type="button" onClick={this.savePassword}>
                    Change Password
                  </button>
                  <button className="btn btn-light" type="button">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
