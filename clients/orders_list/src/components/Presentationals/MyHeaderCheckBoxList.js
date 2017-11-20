import React from 'react';
import FilterCheckboxLine from './FilterCheckBoxLine';
import i18n from '../../data/i18n';

const MyHeaderCheckBoxList = ({ filter, handleCheckedBoxChange }) => (

  <ul className="dropdown-menu" role="menu">
    {/* for list of articles */}
    {i18n.articles_related.map(article => (
      <div key={article.list_name}>
        <li className="dropdown-header" role="presentation">
          {article.list_name}
        </li>
        {/* for each article */}
        {article.articles_groups.map(group => (
          <FilterCheckboxLine
            key={group.title}
            title={group.title}
            hCBC={handleCheckedBoxChange}
            groupNbr={group.groupNbr}
            toShow={filter[group.groupNbr].show}
          />))}
        {/* end for each article */}
      </div>)) }
    {/* end for list of articles */}
    <li role="separator" className="divider" />
    <li className="dropdown-header" role="presentation" />
    {/* filtres by article served or not */}
    {Object.keys(filter).map(groupNbr =>
      (groupNbr >= 1000) && <FilterCheckboxLine
        key={filter[groupNbr].title}
        title={filter[groupNbr].title}
        hCBC={handleCheckedBoxChange}
        groupNbr={groupNbr}
        toShow={filter[groupNbr].show}
      />)}
  </ul>
);

export default MyHeaderCheckBoxList;
