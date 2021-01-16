import React, { Component } from 'react'
import { render } from 'react-dom';
// import { PostData } from "../store/postData";
import {
  Table,
  Button,
  Icon,
  Input,
  Comment
} from "semantic-ui-react";
import "./admin.css";

class Admin extends Component {
 constructor(props){
     super(props)
     this.state={}
 }
render(){
        return (
         <div>
          <div className="rcrow1">
            <b>ADD EMPLOYEE DETAILS</b>
            <div className="inputtxt">
              <Input
                placeholder="name"
                name="fullName"
               className='inputfields'
                // onChange={handleChange}
              />
              <Input
                placeholder="email"
                name="email"
                className='inputfields'
                // onChange={handleChange}
              />
              <Input
                placeholder="email Id"
                name="email"
                className='inputfields'
                // onChange={handleChange}
              />
                <Button
                  className="empbtn"
                  title="Add Employe"
                  color="blue"
                //   onClick={login}
                >
                  Add Employee
                </Button>
            </div>
          </div>
          
          <div >
          
            <Table className='tableContent'  >
               
              <Table.Row>
                <Table.Cell>Full Name</Table.Cell>
                <Table.Cell>Email</Table.Cell>
                <Table.Cell>Created At</Table.Cell>
                <Table.Cell>Actions</Table.Cell>
                <Table.Cell>Status</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {" "}
                  <Comment className="avtar">
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                  </Comment>{" "}
                   Momin
                </Table.Cell>
                <Table.Cell>momin@gmail.com</Table.Cell>
                <Table.Cell>Jan 15,2021</Table.Cell>
                <Table.Cell>
                  <Icon name="edit" size="large" color="green" />{" "}
                  <Icon name="trash" size="large" color="red" />{" "}
                </Table.Cell>
                <Table.Cell>
                  <Button color="green">Status</Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  {" "}
                  <Comment className="avtar">
                    <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  </Comment>{" "}
                  Mohasin 
                </Table.Cell>
                <Table.Cell>momin@gmail.com</Table.Cell>
                <Table.Cell>Jan 15,2021</Table.Cell>
                <Table.Cell>
                  <Icon name="edit" size="large" color="green" />
                  <Icon name="trash" size="large" color="red" />
                </Table.Cell>
                <Table.Cell>
                  <Button color="green">Status</Button>
                </Table.Cell>
              </Table.Row>
            </Table>    
            </div> 
        
      </div>
     
        )
    }

}
export default Admin
