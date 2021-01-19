import React from 'react';
import axios from 'axios';
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingUser: false,
      data: {},
    };
  }
  componentDidMount() {
    this.getUser();
  }
  getUser = () => {
    this.setState({ fetchingUser: true });
    let thisView = this;
    axios
      .get(`https://api.github.com/users/${this.props.match.params.id}`)
      .then(function (res) {
        let data = res.data && res.data ? res.data : {};
        console.log(data);
        thisView.setState({ data });
        this.setState({ fetchingUser: true });
      })
      .catch(function (res) {
        console.log(res);
        console.log('An error occurred');
      });
  };

  render() {
    const { data, fetchingUser } = this.state;
    return (
      <div className=''>
        <h4>Api User Data</h4>
        {fetchingUser ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Followers</th>
                <th>Following</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.location}</td>
                <td>{data.followers}</td>
                <td>{data.following}</td>
              </tr>
            </tbody>
            
          
          </table>
          
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default User;
