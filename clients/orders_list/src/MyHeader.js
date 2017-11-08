import React, {
  Component
} from 'react';

class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'filter',
      articles_related: 'each articles_related',
      list_name: 'list_name',
      articles_groups: 'each articles_groups',
      title: 'title',
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
                    {this.state.articles_related}
                      <li class="dropdown-header" role="presentation">
                        {this.state.list_name}
                      </li>
                        {this.state.articles_groups}
                        <li role="presentation">
                          <input type="checkbox" aria-label="..." /> {this.state.title}
                        </li>
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
