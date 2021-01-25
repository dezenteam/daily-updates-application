import React from "react";
import "./table.css";
// import Select from "react-select";
import axios from "axios";

import {
BootstrapTable,
TableHeaderColumn,
SizePerPageDropDown,
} from "react-bootstrap-table";
import { Button } from "reactstrap";
import Model2 from "./model";

class Table2 extends React.Component {
constructor() {
super();

// let history = useHistory();
this.state = {
products: [
{
id: 1,
name: "product1",
price: 100,
type: "Electronic",
},
{
id: 2,
name: "product2",
price: 180,
type: "Accessories",
},
{
id: 3,
name: "product3",
price: 190,
type: "Laptops",
},
],
todos: [
{
id: 2,
title: "quis ut nam facilis et officia qui",
completed: false,
},
],

// dropdownLables : [
// { value:'Electronic' , label: 'Electronic' },
// { value: 'Accessories', label: 'Accessories' },
// { value: 'Laptops', label: 'Laptops' }] ,

addShowModal: false,
};
}

componentDidMount() {
axios
.get("https://jsonplaceholder.typicode.com/todos?_limit=6")
.then((res) =>
this.setState({
todos: res.data,
})
);
}

selectButton = (cell, row) => {
return (
<div>
{/* <Select options={this.state.dropdownLables} /> */}
</div>
);
};

actionButtonsFormatter = (cell, row) => {
console.log("row items");

// console.log('cellitems',cell)
return (
<div>
<Button  className="update-btn">
Update
</Button>
<Button
onClick={() => {
this.deleteChange(row.id);
}}
className="danger-btn"
>
Delete
</Button>
</div>
);
};

// updateChange = () => {
// alert
// };

// let table_row =
// [ {
// userId: 1,
// id: 2,
// title: "quis ut nam facilis et officia qui",
// completed: false
// } ]

// this.setState({ products:product_row})

deleteChange = (id) => {
console.log("delete clicked", id);
const delet = this.state.todos.filter((todos) => todos.id !== id);
this.setState({
todos: delet,
});
};

//pagination customization

onToggleDropDown = (toggleDropDown) => {
// do your stuff here
// console.log('toggle dropdown');
this.toggleDropDown();
};

toggleDropDown = () => {
// console.log('toggle')
};

renderSizePerPageDropDown = (props) => {
return (
<SizePerPageDropDown
className="my-size-per-page"
btnContextual="btn-warning"
variation="dropup"
onClick={() => this.onToggleDropDown(this.props.toggleDropDown)}
/>
);
};

//Adding items to table
inserList = (productId, productName, productPrice, productType) => {
var { products } = this.state;
products.push({
id: products.length + 1,
name: productName,
price: productPrice,
type: productType.value,
});
this.setState({
products,
});
};

render() {
const {  todos } = this.state;
const options = {
sizePerPageDropDown: this.renderSizePerPageDropDown,
};

return (
<div className="container">
<BootstrapTable
width="100"
data={todos}
options={options}
pagination
search
>
<TableHeaderColumn width="100" dataField="id" isKey={true}>
{" "}
ID
</TableHeaderColumn>
<TableHeaderColumn width="100" dataField="title">
{" "}
Title
</TableHeaderColumn>
<TableHeaderColumn width="100" dataField="completed">
Status
</TableHeaderColumn>
<TableHeaderColumn
width="100"
dataFormat={this.actionButtonsFormatter}
>
Actions
</TableHeaderColumn>
</BootstrapTable>

<Model2
inserList={this.inserList}
selectTypeofProduct={this.selectTypeofProduct}
/>
</div>
);
}
}

// <TableHeaderColumn dataFormat={ (c, r) => {return '<Button > Delete<Button/> <Button > update<Button/> <Button > Reject<Button/>' } } >Actions</TableHeaderColumn>
export default Table2;