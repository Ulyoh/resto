import React from 'react'
import FilterCheckboxLine from './FilterCheckBoxLine'
import i18n from '../../data/i18n.js';

const MyHeaderCheckBoxList = ({ filter, handleCheckedBoxChange }) =>

  <ul className="dropdown-menu" role="menu">
    {/* for list of articles */}
    {i18n.articles_related.map((article) =>
      <div key={article.list_name}>
        <li className="dropdown-header" role="presentation">
          {article.list_name}
        </li>
        {/* for each article */}
        {article.articles_groups.map((group) =>
          <FilterCheckboxLine
            key = {group.title}
            title = {group.title}
            hCBC = {handleCheckedBoxChange}
            group_nbr = {group.group_nbr}
            filter = {filter}
          />
        )}
        {/* end for each article */}
      </div>
    )}
    {/* end for list of articles */}
    <li role="separator" className="divider"></li>
    {/* filtre by article served or not */}
    <li className="dropdown-header" role="presentation"> </li>

  </ul>

export default MyHeaderCheckBoxList
