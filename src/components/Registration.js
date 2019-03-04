import React from 'react';
import 'tachyons';

class Registration extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			numberAdults: '',
			numberKids: '',
			sleepOver: ''
		};
	}

	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}

	onAdultsChange = (event) => {
		this.setState({numberAdults: event.target.value})
	}

	onKidsChange = (event) => {
		this.setState({numberKids: event.target.value})
	}

	onSleepChange = (event) => {
		this.setState({sleepOver: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/birthday', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				numberAdults: this.state.numberAdults,
				numberKids: this.state.numberKids,
				sleepOver: this.state.sleepOver	
			})
		})
		.then((response) => (response.json()))
		.then((user) => {
		 if ('success') {
			this.props.onRouteChange('list');
		}
	  })
	}

	render() {
		return (
			<div>
			<h1 className="header">Registration for my Birthday party on the date</h1>
			<article className="br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center container">
			<div className="w-80 w-70-m w-100-l fr">
				<header className="pa3 bb b--light-gray relative">
					<h1 className="b ma0 f3 container">Register</h1>
					</header>
						<div id="register-form" action="" className="ph3 pt3 pb4 f7">
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Name</label>
								<input 
									name="username" 
									type="text" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onNameChange}
								/>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">Email</label>
								<input 
									name="email" 
									type="email" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray"
									onChange={this.onEmailChange} 
								/>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">How many adults are comming</label>
								<input 
									name="age" 
									type="number" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onAdultsChange}
								/>
							</div>
							<div className="mb3">
								<label htmlFor="" className="db ttu b lh-copy">How many kids are comming</label>
								<input 
									name="age" 
									type="number" 
									className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" 
									onChange={this.onKidsChange}
								/>
							</div>
							<div className="mb4">
							<label htmlFor="" className="db ttu b lh-copy">Do you need a place to sleep</label>
								<div className="form-check">
						          <label className="db ttu b lh-copy">
						            <input
						              type="radio"
						              name="react-tips"
						              value="Yes"
						              className="form-check-input"
						              onChange={this.onSleepChange}
						            />
						            Yes
						          </label>
						        </div>

						        <div className="form-check">
						          <label className="db ttu b lh-copy">
						            <input
						              type="radio"
						              name="react-tips"
						              value="No"
						              className="form-check-input"
						              onChange={this.onSleepChange}
						            />
						            No
						          </label>
						        </div>
							</div>
							<div className="tc">
								<input type="submit" value="Register" onClick={this.onSubmitSignIn} className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
							</div>
						</div>
					</div>
				</article>
				</div>
			);
	}
}

export default Registration;