import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  authButton() {
    return <button>Sign In</button>
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">Resources</Link>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
