import React, {
  Component
} from 'react';
import i18n from './data/i18n.js';

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: i18n.txt.filter,
      articles_related: i18n.articles_related,
    };
  }

  render() {
      return(
      <div className="header-blue resto_header" style={{height:80 + 'px'}}>
        <nav className="navbar navbar-default navigation-clean-search">
          <div className="container">
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav">
                <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#"> {this.state.filter} <span className="caret"></span></a>

                  <ul className="dropdown-menu" role="menu">
                  {this.state.articles_related.map((article) =>
                    <div key={article.list_name}>
                    <li className="dropdown-header" role="presentation">
                      {article.list_name}
                    </li>
                    {article.articles_groups.map((group) =>
                      <li key={group.title} role="presentation">
                        <input type="checkbox" aria-label="..." />
                        {group.title}
                      </li>
                    )}
                    </div>
                  )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default MyHeader;
