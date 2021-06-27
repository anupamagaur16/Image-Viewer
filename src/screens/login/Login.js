import React, {Component} from 'react';
import './Login.css';
import Header from '../../common/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

class Login extends Component {
	constructor() {
        super();
        this.state = {
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
			usernameRequired:"dispNone",
			loginPasswordRequired:"dispNone",
			successful:"dispNone",
			failure:"dispBlock",
			username:"",
			loginPassword:""
        }
	}

	inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }

	loginClickHandler = () => {
		this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
		this.state.loginPassword === "" ? this.setState({ loginPasswordRequired: "dispBlock" }) : this.setState({ loginPasswordRequired: "dispNone" });
        let accessToken = "8661035776.d0fcd39.39f63ab2f88d4f9c92b0862729ee2784";
		let that = this;

		if(that.state.username==="validuser" &&  that.state.loginPassword==="validpassword" ){ 
			sessionStorage.setItem("access-token", accessToken); 
			sessionStorage.setItem("access-token", accessToken);

			that.setState({
				loggedIn: true,
				successful:"successText"
			});

			//Route to home here  
			this.props.history.push('/home/');             
		} 
		else {
			sessionStorage.setItem("access-token", "null");
			if(that.state.username==="" || that.state.loginPassword==="") {
				that.setState({
					loggedIn: false,
					failure:"dispNone"
				});
			} 
			else {
				that.setState({
					loggedIn: false,
					failure:"dispBlock"
				});
			}
		}
	}

	render() {
		return (

			<div>
				<div className="header-container">
					<Header heading="Image Viewer"/><br />
				</div>
				<div className="card-container">
					<Card className="cardStyle">
						<CardContent>
							<Typography variant="headline" component="h2">
								LOGIN
							</Typography>
							<FormControl required>
								<InputLabel htmlFor="username">Username</InputLabel>
								<Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
								<FormHelperText className={this.state.usernameRequired}>
									<span className="red">required</span>
								</FormHelperText>
							</FormControl>
							<br /><br />
							<FormControl required>
								<InputLabel htmlFor="loginPassword">Password</InputLabel>
								<Input id="loginPassword" type="password" loginpassword={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler} />
								<FormHelperText className={this.state.usernameRequired}>
									<span className="red">required</span>
								</FormHelperText>
							</FormControl>
							<br /><br />
							{this.state.loggedIn === true &&
								<FormControl>
									<span className={this.state.successful}>
										Login Successful!
									</span>
								</FormControl>
							}
							{this.state.loggedIn === false &&
								<FormControl>
									<span className={this.state.failure}>
										<span className="red">Incorrect username and/or password</span>
									</span>
								</FormControl>
							}
							<br /><br />
							<Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		)
	}
}
export default Login;