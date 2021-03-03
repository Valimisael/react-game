import React from 'react';
import {hotKeysList} from './HotKeys';

const HotKeysList = () => {
  return (
    <div className='hot-keys'>
      <h2>Hot Keys List</h2>
      <div className="hot-keys__list">
        {
          hotKeysList.map((key, index) => {
            return (
              <div className="hot-keys__item">
                <div className="hot-keys__item-key">{`${key.key}:`}</div>
                <div className="hot-keys__item-role">{key.role}</div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default HotKeysList;