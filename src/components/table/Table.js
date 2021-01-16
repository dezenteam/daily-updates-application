import React from 'react';
import './table.css';
import Select from 'react-select';



import {BootstrapTable,TableHeaderColumn,SizePerPageDropDown } from 'react-bootstrap-table';
import { Button } from 'reactstrap';
import Model2 from '../models2/model2';




 class TableData extends React.Component {
    constructor(){
        super()

        // let history = useHistory();
        this.state={
             
            products: [{
                id:1,
                name:'product1',
                price:100,
                type:'Electronic'
            },
            {
                id:2,
                name:'product2',
                price:180,
                type:'Accessories'
            },
            {
                id:3,
                name:'product3',
                price:190,
                type:'Laptops'
                
            }] ,

            // dropdownLables : [
            //   { value:'Electronic' , label: 'Electronic' },
            //   { value: 'Accessories', label: 'Accessories' },
            //   { value: 'Laptops', label: 'Laptops' }] ,

            addShowModal:false,
          
        } 
}



selectButton =(cell,row)=>{
  return(
    <div>
          <Select  options={this.state.dropdownLables} />
    </div>
  )
}


actionButtonsFormatter = (cell, row) => {
  console.log('row items',row)
  
  // console.log('cellitems',cell)
  return (
  <div>
      <Button onClick={this.updateChange(row)} className='update-btn'  >Update</Button>
      <Button onClick= { () =>  {this.deleteChange(row.id)} }  className='danger-btn' >Delete</Button>
      <Button onClick={this.approveChange(row)} className='approve-btn' >Approve</Button>
  </div>
  )}


  updateChange=(row)=>{
    console.log(row)
  
  }

  deleteChange=(id)=>{

    console.log("delete clicked",id)
    const delet = this.state.products.filter( products => products.id !==id )
    this.setState({
      products :delet
    })
    
  }

  approveChange=(rejectproductItem)=>{

    // console.log("rejectproductItem clicked",rejectproductItem)
  }


  //pagination customization

  onToggleDropDown = (toggleDropDown) => {
    // do your stuff here
    // console.log('toggle dropdown');
    this.toggleDropDown();
  }

  toggleDropDown=()=>{
    // console.log('toggle')
  }
  
  renderSizePerPageDropDown = (props) => {
    return (
      <SizePerPageDropDown
        className='my-size-per-page'
        btnContextual='btn-warning'
        variation='dropup'
        onClick={ () => this.onToggleDropDown(this.props.toggleDropDown) }/>
    );
  }

//Adding items to table
  inserList=(productId,productName,productPrice,productType)=>{
    var { products } = this.state;
    products.push(
       {
      id:products.length + 1,
      name:productName,
      price:productPrice,
      type:productType.value,
      });
    this.setState({
      products
    })
  }

  

  

    render() {

        const {products } = this.state;
        const options = {
          sizePerPageDropDown: this.renderSizePerPageDropDown
        };
       

      return (
        <div>
          <BootstrapTable width='100' data={ products } options={options}   pagination   search   >
            <TableHeaderColumn width='100' dataField='id' isKey={true}>Product ID</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='price'>Product Price</TableHeaderColumn>
            <TableHeaderColumn width='100' dataField='type'>Product Type</TableHeaderColumn>

            {/* <TableHeaderColumn width='100'  dataFormat={this.selectButton}>Product Type</TableHeaderColumn> */}
            <TableHeaderColumn width='100' dataFormat={ this.actionButtonsFormatter} >Actions</TableHeaderColumn>
            {/* <TableHeaderColumn></TableHeaderColumn> */}
          </BootstrapTable>
         
              <Model2  inserList={this.inserList} selectTypeofProduct={this.selectTypeofProduct} />
          
        </div>
      );
    }
  }

  //          <TableHeaderColumn dataFormat={ (c, r) => {return '<Button > Delete<Button/> <Button  > update<Button/> <Button  > Reject<Button/>' } } >Actions</TableHeaderColumn>
export default TableData;