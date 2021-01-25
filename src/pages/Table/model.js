import React, { Component } from "react";

import {
Button,
Modal,
ModalHeader,
ModalBody,
ModalFooter,
Label,
FormGroup,
Form,
Input,
} from "reactstrap";
// import Select from "react-select";

// const options = [
// { value: "Electronic", label: "Electronic" },
// { value: "Accessories", label: "Accessories" },
// { value: "Laptops", label: "Laptops" },
// ];

export class Model2 extends Component {
constructor() {
super();
this.state = {
productId: "",
productName: "",
productPrice: "",
showmodal: false,
productType: {},
};
}

// show modal to add list
toggleModel = () => {
this.setState({
showmodal: !this.state.showmodal,
productId: "",
productName: "",
productPrice: "",
});
};

handleProductInputs = (e) => {
this.setState({
[e.target.name]: e.target.value,
});
};

onChangeProductType = (selectedProductType) => {
console.log(selectedProductType);
this.setState({
productType: selectedProductType,
});
};

displayModalList = (e) => {
e.preventDefault();
let { productId, productName, productPrice, productType } = this.state;

this.props.inserList(productId, productName, productPrice, productType);
console.log("productType", productType);
this.toggleModel();
};
render() {
const { showmodal } = this.state;
return (
<div>
<Button onClick={this.toggleModel}>AddEmployee</Button>

<Modal isOpen={showmodal}>
<ModalHeader>Employee Details</ModalHeader>
<ModalBody>
<Form onSubmit={this.displayModalList}>
<FormGroup>
<Label> Id</Label>
<Input
placeholder="Id"
name="productId"
value={this.state.productId}
onChange={this.handleProductInputs}
/>
</FormGroup>
<FormGroup>
<Label>Title</Label>
<Input
placeholder="Title"
value={this.state.productName}
name="productName"
onChange={this.handleProductInputs}
/>
</FormGroup>
<FormGroup>
<Label>Status</Label>
<Input
placeholder="status"
value={this.state.productPrice}
name="productPrice"
onChange={this.handleProductInputs}
/>
</FormGroup>
<FormGroup>
<Button color="primary" type="submit">
Submit
</Button>
</FormGroup>
</Form>
</ModalBody>
<ModalFooter>
<Button color="danger" onClick={this.toggleModel}>
Cancel
</Button>
</ModalFooter>
</Modal>
</div>
);
}
}

export default Model2;