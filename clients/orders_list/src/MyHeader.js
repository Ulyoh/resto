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
      <div class="header-blue resto_header" style={{height:80 + 'px'}}>
        <nav class="navbar navbar-default navigation-clean-search">
          <div class="container">
            <div class="collapse navbar-collapse" id="navcol-1">
              <ul class="nav navbar-nav">
                <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#"> {this.state.filter} <span class="caret"></span></a>

                  <ul class="dropdown-menu" role="menu">
                  {this.state.articles_related.map((article) =>
                    <div>
                    <li class="dropdown-header" role="presentation">
                      {article.list_name}
                    </li>
                    {article.articles_groups.map((group) =>
                      <li role="presentation">
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
