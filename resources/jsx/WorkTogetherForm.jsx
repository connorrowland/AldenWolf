import React from 'react';
import $ from 'jquery';

class WorkTogetherForm extends React.Component {
    constructor(props) {
      super(props)

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleFormChange = this.handleFormChange.bind(this)
      this.validateEmail = this.validateEmail.bind(this)

      this.state = {
        canSubmit: false,
        formValid: false,
        full_name: '',
        email: '',
        website: '',
        showError: false
      }
    }

    handleSubmit(data){
      var signUpData = {
        'full_name':this.state.name,
        'email': this.state.email,
        'website': this.state.website
      }
      $.ajax({
        url: "/",
        type: "POST",
        data: JSON.stringify(signUpData),
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json',
        cache: false,
        success: function(data) {
          this.setState({
              hasSubmittedInformation: true
          });
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    }

    handleFormChange(event){
      this.setState({
        [event.target.id]: event.target.value
      })
      if(this.state.email != "" && event.target.id != 'email' || this.state.showError){
        this.validateEmail();
      }
    }

    validateEmail(){
      var email = this.state.email;
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(email)){
        this.setState({
          formValid: true,
          showError: false
        })
      } else {
        this.setState({
          formValid: false,
          showError: true
        })
      }
    }

    showError(){
      return (
        <p className="error-message--text-input">Please enter a valid email.</p>
      )
    }

    render() {
        var errorMessage = this.state.showError ? this.showError() : null;
        var validFormClasses = this.state.formValid ? "button--primary" : "button--primary-disabled";
        var errorFormClass = this.state.showError ? "form-control error-message--text-input" : "form-control";
        return (
            <div>
              <form>
                <div className="form-group">
                  <label className="form-label" for="full_name">Your name</label>
                  <input type="text" className="form-control" id="full_name" placeholder="A name I call myself" onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label className="form-label" for="email">Your email</label>
                  {errorMessage}
                  <input type="email" className={errorFormClass} id="email" placeholder="me@meforever.com" onBlur={this.validateEmail} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label className="form-label" for="phone_number">Website</label>
                  <input type="text" className="form-control" id="website" placeholder="sayrhino.com" onChange={this.handleFormChange}/>
                </div>
                <button type="submit" id="demo-form--submit" className={validFormClasses + " button--primary"} onClick={this.handleSubmit}>Contact Us</button>
              </form>
            </div>
        );
    }

};

export default WorkTogetherForm;