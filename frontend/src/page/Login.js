import React from 'react'

const Login = () => {
    return (
        <div>
            <div class="login-dark">
                <form method="post">
                    <h2 class="sr-only">Login Form
                    </h2>
                    <div class="illustration">
                    <i class="icon ion-ios-locked-outline"></i>
                    </div>
                    <div class="form-group">
                    <input class="form-control" type="email" name="email" placeholder="Email"></input>
                    </div>
                    <div class="form-group">
                    <input class="form-control" type="password" name="password" placeholder="Mot de passe"></input>

                    </div>
                    <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Se connecter</button>
                    </div>
                    <a class="forgot">Vous avez oublié votre email ou votre mot de passe ?</a>
                </form>
            </div>

        </div>
    )
}

export default Login
