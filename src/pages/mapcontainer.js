import React from "react";
import "./contact.scss";
import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const mapStyles = {
    height: "82vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 17.400480,
    lng: 78.394470,
  };
  const locations = [
    {
      name: "Shaikpet",
      location: { 
        lat: 17.400480,
        lng: 78.394470
      },
    }
  ];
  return (
    <div className="contact-page-content-wrap sp-y">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <LoadScript googleMapsApiKey="AIzaSyBlnGWa3xA5PX18LotF1Xh26FJEsAA5QA8">
            <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap>
            </LoadScript>
          </div>
          <div className="col-md-6">
            <div className="contact-form-area">
              <h4>Get in touch</h4>
              <p>
                Drop us a line or give us a ring. We love to hear about your
                experience and are happy to answer any questions.
              </p>
              <div className="contact-form-wrap comment-area-wrapper p-0 m-0">
                <form
                  action="http://whizthemes.com/mail-php/raju/Hopkins/mail.php"
                  id="contact-form"
                >
                  <div className="form-content-wrap">
                    <div className="form-input-item">
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="con_name"
                        placeholder="Name *"
                        required
                      />
                    </div>
                    <div className="form-input-item">
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="con_email"
                        placeholder="Email *"
                        required
                      />
                    </div>
                    <div className="form-input-item">
                      <label htmlFor="message" className="sr-only">
                        Message *
                      </label>
                      <textarea
                        name="con_message"
                        id="message"
                        cols={30}
                        rows={5}
                        placeholder="Write Your Message *"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-submit mt-40">
                      <button className="btn btn-hvr-brand">Send Us</button>
                      <div className="form-message" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
