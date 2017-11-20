import React from 'react';
import MyHeaderCheckBoxList from './MyHeaderCheckBoxList';
import i18n from '../../data/i18n';

const MyHeader = props => (

  <div className="header-blue resto_header" style={{ height: `${80}px` }}>
    <nav className="navbar navbar-default navigation-clean-search">
      <div className="container">
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
                href="#"
              > {i18n.txt.filter}
                <span className="caret" />
              </a>
              <MyHeaderCheckBoxList {...props} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default MyHeader;
