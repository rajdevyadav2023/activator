import React from 'react'
import './home.css'
import img1 from '../../img/growth.png';
import img2 from '../../img/team.png';
import img3 from '../../img/gym.png';
const Home = () => {
  return (
    <div>
      <div className="home-container">
        {/* 1 */}
        <div className="ads">
          <div className="ads-content">
            <div className="ads-text">
              <h2>Activate Your Fitness</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad, quo, maiores magnam tempora distinctio perferendis tempore quasi eligendi recusandae unde voluptatum reprehenderit nulla iure!</p>
              <button>Join Now</button>
            </div>
            <div className="ads-img">
              <img src={img3} alt="grow with activator" />
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="ads">
          <div className="ads-content">
          <div className="ads-img">
              <img src={img1} alt="grow with activator" />
            </div>
            <div className="ads-text">
              <h2>Activate Your Finance</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad, quo, maiores magnam tempora distinctio perferendis tempore quasi eligendi recusandae unde voluptatum reprehenderit nulla iure!</p>
              <button>Join Now</button>
            </div>
           
          </div>
        </div>
        {/* 3 */}
        <div className="ads">
          <div className="ads-content">
            <div className="ads-text">
              <h2>Activate Your Productivity</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad, quo, maiores magnam tempora distinctio perferendis tempore quasi eligendi recusandae unde voluptatum reprehenderit nulla iure!</p>
              <button>Join Now</button>
            </div>
            <div className="ads-img">
              <img src={img2} alt="grow with activator" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Activator | Rajdev Yadav | 2023</p>
      </footer>
    </div>
  )
}

export default Home
