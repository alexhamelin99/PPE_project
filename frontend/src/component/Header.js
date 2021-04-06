import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark navbar-custom">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img className="rounded-circle"  src="/image/logo.png" alt="" style={{width: 36, marginRight: 15}} />TRIP-Covid</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation"><Link to="/equipe" className="nav-link">Notre equipe</Link></li>
                            <li className="nav-item" role="presentation"><Link to="/covid" className="nav-link">info covid</Link></li>
                            <li className="nav-item" role="presentation"><Link to="/prediction" className="nav-link">prédiction</Link></li>
                        </ul>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item" role="presentation"><Link to="/signin" className="nav-link">Sign Up</Link></li>
                            <li className="nav-item" role="presentation"><Link to="/login" className="nav-link">Log In</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
