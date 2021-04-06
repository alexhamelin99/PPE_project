import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Signin extends Component {

  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }

    render (){
        return(
            <div>
                <div className="register-photo" style={{paddingTop: 150}}>
                    <div className="form-container">
                    <div className="image-holder" />
                        <form method="post" onSubmit={this.onSubmit}>
                            <h2 className="text-center"><strong>Créer</strong> un compte</h2>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Email" required value={this.state.username} onChange={this.onChangeUsername} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password" placeholder="Mot de passe" required value={this.state.password} onChange={this.onChangePassword}/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password-repeat" placeholder="Mot de passe (répéter)" />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" />J'accepte les termes de la licence.
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit">S'inscrire</button>
                            </div>
                            <Link to="/login" className="already">Vous avez déjà un compte? Se connecter ici.</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

