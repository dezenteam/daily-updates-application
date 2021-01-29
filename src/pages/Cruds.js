import React from "react";
import axios from "axios";
import { Table } from "reactstrap";

class CrudOperations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMassage: "",
      userId: "",
      title: "",
      body: "",
      addFields: false,

    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data.slice(0, 6),
        });
      })
      .catch((error) => {
        // console.log(error)
        this.setState({
          errorMassage: "Error retriving Data",
        });
      });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.userId, this.state.title, this.state.body);
    axios
      .post("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      userId: "",
      title: "",
      body: "",
    });
  };

  deleteData = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        const delet = this.state.posts.filter(post => post.id !== id)
        this.setState({
          posts: delet
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateData = (id) => {
    const data = {
      userId: "abc",
      title: "updatingData",
      body: "User data has been updated"
    }
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
    this.setState({
      posts: [...this.state.posts, data]
    })

  }

  render() {
    const { userId, title, body, posts, errorMassage } = this.state;
    return (
      <div>
        { this.state.addFields ?
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <input
              type="text"
              name="userId"
              placeholder="id"
              value={userId}
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={this.changeHandler}
            />
            <input
              type="text"
              name="body"
              placeholder="body"
              value={body}
              onChange={this.changeHandler}
            />
            <button onClick={this.submitHandler} style={{ margin: "5px" }}>
              Submit
             </button>


          </div> : null}

        <div style={{ width: "70%", borderBottom: "none", background: "white" }}>
          <Table >
            <tr style={{ border: "none" }}>
              <th>POST ID </th>
              <th>POST TITLE </th>
              <th>POST BODY </th>
              <th>ACTION </th>
            </tr>

            {posts.length
              ? posts.map((post) => (
                <tr key={post.id}>
                  <td> {post.id} </td>
                  <td> {post.title.slice(0, 15)} </td>
                  <td> {post.body.slice(0, 35)} </td>
                  <td>
                    <button onClick={this.updateData(post.userId)} style={{ margin: "5px" }}>
                      Update DATA
                    </button>
                    <button
                      onClick={() => this.deleteData(post.id)}
                      style={{ margin: "5px", background: "red" }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
              : null}

            {errorMassage ? <div>{errorMassage} </div> : null}
          </Table>
        </div>
      </div>
    );
  }
}

export default CrudOperations;
