import React, { Component } from "react";
import "./profile.css";
import NavDropdown from "react-bootstrap/NavDropdown";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaydata: "about",
    };
  }
  showdata = (comp) => {
    // e.preventDefault();
    this.setState({ displaydata: comp });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4 left_section">
                    <div className="prof_skill">
                      <div className="border text-center pb-4 info">
                        <img
                          src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                          alt="profile"
                          className="img-lg rounded-circle mb-1"
                        />
                        <div className="mb-3">
                          <h3 className="name"> David Grey.H </h3>
                          <div className="d-flex align-items-center justify-content-center">
                            <h5 className="mb-0 mr-2 text-muted"> Indian </h5>
                          </div>
                        </div>
                        <p className="w-75 mx-auto mb-3">
                          Bureau Oberhaeuser is a design bureau focused on
                          Information - and Interface Design.
                        </p>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-dark mr-1">Hire Me</button>
                          <button className="btn btn-dark">Follow</button>
                        </div>
                      </div>
                      <div className=" py-4 skills mb-4">
                        <b> Skills </b>
                        <div className="skills_section">
                          <label className="badge  badge-outline-dark mr-1">
                            ReactJS
                          </label>
                          <label className="badge  badge-outline-dark mr-1">
                            React Native
                          </label>
                          <label className="badge badge-outline-dark mr-1">
                            MongoDB
                          </label>
                          <label className="badge badge-outline-dark mr-1">
                            NodeJS
                          </label>
                          <label className="badge badge-outline-dark mr-1">
                            Web Designer
                          </label>
                          <label className="badge badge-outline-dark mr-1">
                            Mobile Developer
                          </label>
                        </div>
                      </div>
                    </div>

                    <button className="btn btn-success text-white btn mb-3">
                      Preview
                    </button>
                  </div>
                  <div className="col-lg-8 border info">
                    <div className="mt-1 py-2 right">
                      <ul className="nav profile-navbar">
                        <li className="nav-item">

                          <b onClick={(e) => this.showdata("about")}>About Me</b>

                        </li>

                        <NavDropdown
                          title="Settings"
                          id="nav-dropdown"
                          className="nav-link d-flex align-items-center about "
                        >
                          <NavDropdown.Item
                            eventKey="2.1"
                            onClick={(e) => this.showdata("edit")}
                          >
                            Edit Profile
                          </NavDropdown.Item>
                          <NavDropdown.Item
                            eventKey="2.2"
                            onClick={(e) => this.showdata("changePassword")}
                          >
                            Change Password
                          </NavDropdown.Item>
                        </NavDropdown>
                      </ul>
                    </div>
                    <div className="profile-feed">
                      <div className="d-flex align-items-start profile-feed-item">
                        {this.state.displaydata === "about" ? (
                          <div className="about_text">
                            <p>
                              For the past 16 years, I've been developing
                              applications for the web using mostly React JS. I
                              do this for a living and love what I do as every
                              day there is something new and exciting to learn.
                            </p>

                            <p>
                              In my spare time, the web development community is
                              a big part of my life. Whether teaching code to
                              kids at a local school, managing online
                              programming groups and blogs or attending a
                              conference, I find keeping involved helps me stay
                              up to date.{" "}
                            </p>

                            <p>
                              Besides programming I love spending time with
                              friends and family and can often be found together
                              going out catching the latest movie, staying in
                              playing games on the sofa or planning a trip to
                              someplace I've never been before.{" "}
                            </p>
                            <p>
                              I graduated from university Hull School of Art &
                              Design where I studied web design and got a first
                              class degree with honours. While I was at
                              university I worked part time for a web design
                              agency called Surrect Media that helped me to
                              further hone in my skills as a developer. When not
                              at work I'm usually working on a new project from
                              home which could be anything to updating one of my
                              sites to creating a new CRM application. Since
                              leaving university I've been lucky enough to work
                              for The One Point.
                            </p>
                            <p>
                              My job involves doing what I love, Developing new
                              websites/applications, customer relationship
                              management (CRM) applications and developing
                              fantastic content management systems (CMS).
                            </p>
                            <p>
                              I spend a lot of time learning new techniques and
                              actively help other people learn web development
                              through a variety of help groups and writing web
                              development tutorials for my website and blog
                              about advancements in web design and development.
                            </p>
                          </div>
                        ) : this.state.displaydata === "edit" ? (
                          <div className="about_text">
                            <p>Edit</p>
                            <p>
                              My job involves doing what I love, Developing new
                              websites/applications, customer relationship
                              management (CRM) applications and developing
                              fantastic content management systems (CMS).
                            </p>
                            <p>
                              I spend a lot of time learning new techniques and
                              actively help other people learn web development
                              through a variety of help groups and writing web
                              development tutorials for my website and blog
                              about advancements in web design and development.
                            </p>
                          </div>
                        ) : this.state.displaydata === "changePassword" ? (
                          <div className="about_text">
                            <p>Change Password</p>
                            <p>
                              My job involves doing what I love, Developing new
                              websites/applications, customer relationship
                              management (CRM) applications and developing
                              fantastic content management systems (CMS).
                            </p>
                            <p>
                              I spend a lot of time learning new techniques and
                              actively help other people learn web development
                              through a variety of help groups and writing web
                              development tutorials for my website and blog
                              about advancements in web design and development.
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
