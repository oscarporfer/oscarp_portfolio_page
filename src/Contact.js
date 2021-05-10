import React from 'react';
import axios from 'axios';
import './Contact.css';



export default class Contact extends React.Component {
  
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
	this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.resetForm = this.resetForm.bind(this)
  }

  render() {
	return (
  	<form className="contact">
    	<h1>Let's start this journey</h1>
       <div className="contact__title">Name(Required):</div> 
      <textarea
        	id="name"
        	name="name"
        	onChange={this.handleChange}
        	placeholder="Name"
        	required
        	value={this.state.name}
        	
      	/>
        <div className="contact__title">Email(Required):</div>
        <textarea
        	id="email"
        	name="email"
        	onChange={this.handleChange}
        	placeholder="Email Address"
        	required
        	value={this.state.email}
      	/>
        <div className="contact__title">Message:</div>
      	<textarea
        	id="feedback"
        	name="feedback"
        	onChange={this.handleChange}
        	placeholder="Write your message here"
        	required
          value={this.state.feedback}
          style={{ height: '100px'}}
        	
      	/>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    console.log()
    this.setState({[event.target.name]:event.target.value})
  }
  resetForm() {
    this.setState({ feedback: '', name: '', email: '' })
  }

  handleSubmit (event) {
        console.log("aaa", this.state)
        const dataObj = {
          "service_id": process.env.REACT_APP_SERVICE_ID,
          "template_id": process.env.REACT_APP_TEMPLATE_ID,
           "user_id": process.env.REACT_APP_USER_ID,
          "template_params": {
              "to_name": this.state.name,
              "from_name" : this.state.email,
              "message": this.state.feedback
          }
      };
      
              axios({
                  method: "POST",
                  url:"https://api.emailjs.com/api/v1.0/email/send",
                  data: dataObj
              }).then((response)=>{
                  console.log(response)
                  this.resetForm()
                  if (response.data === 'OK'){
                      alert("Email sent, awesome!");
                      
                  }else if(response.data.msg === 'fail'){
                      alert("Oops, something went wrong. Try again")
                  }
              })
      }

}




