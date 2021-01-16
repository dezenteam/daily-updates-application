import React from 'react';
import Cards from '../components/cards/cards';
import CardType2 from '../components/CradType2/CardType2';
import img1 from '../../src/Images/image.png';

class HomePage extends React.Component {
  render() {
    return (
      <div >
        <div class="media border bg-white p-3">
          <img src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" alt="John Doe" class="mr-2 mt-3 rounded-circle" style={{width:'60px'}} />
          <div class="media-body">
            <h4>Admin <small><i> Jan 15, 2021</i></small></h4>
            <p>Detailed Description Analytics...</p>
          </div>
        </div>
  
        <CardType2 />
      </div>
    );
  }
}
export default HomePage;
