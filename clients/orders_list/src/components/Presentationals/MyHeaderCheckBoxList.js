import React from 'react';
import FilterCheckboxLine from './FilterCheckBoxLine';
import i18n from '../../data/i18n';

const MyHeaderCheckBoxList = ({ filter, handleCheckedBoxChange }) => {
  let prelistNumber = 0;
  let head = '';

  return (

    <ul className="dropdown-menu" role="menu">
      {/* for list of groups */}
      {Object.keys(i18n.groups).map((groupNbr) => {
        const group = i18n.groups[groupNbr];
        if (group.list_number !== prelistNumber) {
          head = (
            <div key={group.list_number}>
              <li className="dropdown-header" role="presentation">
                {i18n.lists[group.list_number].list_name}
              </li>
            </div>);
            prelistNumber = group.list_number;
        } else {
          head = null;
        }

        return (
          <div key={group.title}>
            {head}
            <FilterCheckboxLine
              title={group.title}
              hCBC={handleCheckedBoxChange}
              groupNbr={group.groupNbr}
              toShow={filter[group.groupNbr].show}
            />
          </div>
        );
      })
      }
      <li role="separator" className="divider" />
      <li className="dropdown-header" role="presentation" />
      {/* filtres by article served or not */}
      {Object.keys(filter).map(groupNbr =>
        (groupNbr >= 1000) &&
          <FilterCheckboxLine
            key={filter[groupNbr].title}
            title={filter[groupNbr].title}
            hCBC={handleCheckedBoxChange}
            groupNbr={groupNbr}
            toShow={filter[groupNbr].show}
          />)}
    </ul>
  );
};

export default MyHeaderCheckBoxList;
