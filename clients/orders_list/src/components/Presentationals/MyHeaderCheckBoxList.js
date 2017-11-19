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
            toShow = {filter[group.group_nbr].show}
          />
        )}
        {/* end for each article */}
      </div>
    )}
    {/* end for list of articles */}
    <li role="separator" className="divider"></li>
    <li className="dropdown-header" role="presentation"> </li>
    {/* filtres by article served or not */}
    {Object.keys(filter).map((group_nbr) =>

      (group_nbr >= 1000) && <FilterCheckboxLine
        key = {filter[group_nbr].title}
        title = {filter[group_nbr].title}
        hCBC = {handleCheckedBoxChange}
        group_nbr = {group_nbr}
        toShow = {filter[group_nbr].show}
                             />

    )}
  </ul>

export default MyHeaderCheckBoxList
