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

  updateChange = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { userId, title, body, posts, errorMassage } = this.state;
    return (
      <div>
        Enter Input Data
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
            ADD DATA
          </button>
          <button
            onClick={(id) => this.updateChange(5)}
            style={{ margin: "5px" }}
          >
            {" "}
            DELETE{" "}
          </button>
        </div>
        <div>
          <Table style={{ width: "100%", border: "none" }}>
            <tr>
              <th>POST ID </th>
              <th>POST TITLE </th>
              <th>POST BODY </th>
            </tr>

            {posts.length
              ? posts.map((post) => (
                  <tr key={post.id}>
                    <td> {post.id} </td>
                    <td> {post.title.slice(0, 10)} </td>
                    <td> {post.body.slice(0, 25)} </td>
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
