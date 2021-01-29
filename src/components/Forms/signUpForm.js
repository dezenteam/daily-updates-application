import React from 'react'
import './singUpForm.css'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'






const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().required('Invalid!'),
    password: Yup.string().required('Required!'),
    confirmPassword: Yup.string().required('Required!'),
    number: Yup.string().required('Required!'),
    date: Yup.string().required('Required!'),


})


const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    }
    if (!values.date) {
        errors.date = 'Select Date'
    }


    return errors
}

const SignUpForm = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            number: '',
            date: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        validationSchema
    });


    return (
        <div className='container-fluid bg-light' className='form-container' >
            <div className='row text-success ' className='register-title'>
                <b>Registration Form</b>
            </div>
            <div className='signUpcontent'>
                <Form onSubmit={formik.handleSubmit} className='formcontent'>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" id="exampleEmail" placeholder="Enter Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='nameField' />
                        {formik.touched.name && formik.errors.name ? <p style={{ color: 'red' }}> {formik.errors.name} </p> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='nameField' />
                        {formik.touched.email && formik.errors.email ? <p style={{ color: 'red' }}> {formik.errors.email} </p> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='nameField' />
                        {formik.touched.password && formik.errors.password ? <p style={{ color: 'red' }}> {formik.errors.password} </p> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Confirm Password</Label>
                        <Input type="password" name="confirmPassword" id="exampleEmail" placeholder="confirm Password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.confirmPassword} className='nameField' />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p style={{ color: 'red' }}> {formik.errors.confirmPassword} </p> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect" className='nameField'>
                            <option>Jr.Developer</option>
                            <option>Sr.Developer</option>
                            <option>Team Lead</option>
                            <option>Accountant</option>
                        </Input>
                        {formik.touched.name && formik.errors.name ? <p style={{ color: 'red' }}> {formik.errors.name} </p> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelectMulti">Select Multiple</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" className='selectField' multiple>
                            <option>Reactjs</option>
                            <option>ReactNative</option>
                            <option>Nodejs</option>
                            <option>MongoDB</option>
                            <option>Bootstrap</option>
                        </Input>
                        {formik.touched.name && formik.errors.name ? <p style={{ color: 'red' }}> {formik.errors.name} </p> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Mobile</Label>
                        <Input type="number" name="number" id="exampleText" placeholder='mobile number' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.number} className='nameField' />
                        {formik.touched.number && formik.errors.number ? <p style={{ color: 'red' }}> {formik.errors.number} </p> : null}
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Date</Label>
                        <Input type="date" name="date" id="exampleText" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.date} />
                        {formik.touched.date && formik.errors.date ? <p style={{ color: 'red' }}> {formik.errors.date} </p> : null}
                    </FormGroup>
                    <div className='row'>
                        <FormGroup>
                            <b>Gender</b>
                        </FormGroup>
                        <div className='row'>
                            <div className='col-6 '>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" className='radioButton' checked />{' '}
                                        male
                                      </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" className='radioButton' />{' '}
                                        female
                                    </Label>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 ml-0'>
                            <FormGroup check >
                                <Label check>
                                    <Input type="checkbox" />{' '}
                                                keep signin
                                    </Label>
                            </FormGroup>
                        </div>

                    </div>

                    <FormGroup>
                        <Button className='btn btn-block btn-success mt-3' type='submit'>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    )
}


export default SignUpForm;

