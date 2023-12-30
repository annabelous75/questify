import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './GroupSelect.module.css';

function GroupSelect({ category, isOpenGroupSelect, handleSaveSelectedGroupItem }) {
  const [selectedGroup, setSelectedGroup] = useState('');

  useEffect(() => {
    console.log('Selected category state:', selectedGroup);
  }, [selectedGroup]);

  return (
    <div
      style={{ ...groupStyles[category], cursor: isOpenGroupSelect ? 'pointer' : 'auto' }}
      className={s.groupContainer}
      onClick={() => isOpenGroupSelect && handleSaveSelectedGroupItem(category)}
    >
      {category || '...'}
      {isOpenGroupSelect && (
        <ul className={s.list}>
          {Object.keys(groupStyles).map((groupName) => (
            <li
              key={groupName}
              className={category === groupName ? `${s.listItem} ${s.select}` : s.listItem}
              onClick={(e) => {
                e.stopPropagation();
                handleSaveSelectedGroupItem(groupName);
              }}
            >
              {groupName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

GroupSelect.defaultProps = {
  category: '',
  handleSaveSelectedGroupItem: () => {},
  isOpenGroupSelect: true
};

GroupSelect.propTypes = {
  category: PropTypes.string,
  isOpenGroupSelect: PropTypes.bool.isRequired,
  handleSaveSelectedGroupItem: PropTypes.func,
};

const groupStyles = {
  Stuff: { backgroundColor: '#eceff1' },
  Learning: { backgroundColor: '#fcf2b7' },
  Health: { backgroundColor: '#ccf7ff' },
  Work: { backgroundColor: '#d3f6ce' },
  Leisure: { backgroundColor: '#eed8f2' },
  Productivity: { backgroundColor: '#d1e1f6' },
  Social: { backgroundColor: '#e9c0cb' },
  Sport: { backgroundColor: '#baf1e5' },
};

export default GroupSelect;

