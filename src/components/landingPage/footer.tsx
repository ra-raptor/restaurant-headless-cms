import React from 'react'
import { GoLocation }from 'react-icons/go'
import { IoCall }from 'react-icons/io5'
import { MdEmail }from 'react-icons/md'
import { MapContainer, TileLayer } from 'react-leaflet'

function Footer() {
  const buildMap = () => {
    if (typeof window !== 'undefined') {
      return (
        <MapContainer center={[22.5448, 88.3426]} zoom={13}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
      )
    }
    return null;
  }
 
  return (
    <div className='footer'>
      <div className="grid">
        <div className="text">
          <h2>Chillax</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus hic, culpa veritatis reprehenderit maxime pariatur repellat quidem incidunt nostrum facere.</p>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <ul>
            <li> <span> <GoLocation /> </span> Kolkata, IN</li>
            <li> <span> <IoCall /> </span> +91-999-999-9999</li>
            <li> <span> <MdEmail /> </span> chillax@canteen.in</li>
            
          </ul>
        </div>
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Payemnt Methods</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">Careers</a></li>
            
          </ul>
        </div>
        <div className="map-wrapper">
          <h3>Map</h3>
          <div className="map">
            {buildMap()}
          </div>
        </div>
      </div>
      <div className="cop">&copy; 2022 Chillax Canteen</div> 
    </div>
  );
}

export default Footer