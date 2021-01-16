import React from 'react';
import axios from 'axios';
import {Button,Table} from 'reactstrap'


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
      .get(`https://jsonplaceholder.typicode.com/posts`)
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

  deleteData = (id)=>  {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        const data = res.data;
        this.setState({ data });
    })
}

updateData = (id)=>  {
  axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(res => {
      const data = res.data;
      this.setState({ data });
  })

}

  render() {
    const { data, fetchingUser } = this.state;
    return (
      <div className=''>
        <h4>Api User Data</h4>
        {fetchingUser ? (
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
                <td> <Button color="success">UPDATE</Button> </td>
                <td> <Button color="danger" onClick={(data)=> this.deleteData(data.id)}   >DELETE</Button> </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default User;
