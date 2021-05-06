import React from 'react';
import axios from 'axios';



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
  	<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      <textarea
        	id="name"
        	name="name"
        	onChange={this.handleChange}
        	placeholder="Name"
        	required
        	value={this.state.name}
        	style={{width: '20%', height: '50px'}}
      	/>
        <textarea
        	id="email"
        	name="email"
        	onChange={this.handleChange}
        	placeholder="Email"
        	required
        	value={this.state.email}
        	style={{width: '20%', height: '50px'}}
      	/>
      	<textarea
        	id="feedback"
        	name="feedback"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
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




