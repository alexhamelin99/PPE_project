import React from 'react'
import {Link} from 'react-router-dom';

const Signin = () => {
    return (
        <div>
            <div className="register-photo" style={{paddingTop: 150}}>
                <div className="form-container">
                <div className="image-holder" />
                    <form method="post">
                        <h2 className="text-center"><strong>Créer</strong> un compte</h2>
                        <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Mot de passe" /></div>
                        <div className="form-group">
                        <input className="form-control" type="password" name="password-repeat" placeholder="Mot de passe (répéter)" /></div>
                        <div className="form-group">
                        <div className="form-check">
                            <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" />J'accepte les termes de la licence.
                            </label>
                        </div>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary btn-block" type="submit">S'inscrire</button></div>
                        <Link to="/login"><a className="already">Vous avez déjà un compte? Se connecter ici.</a></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin
