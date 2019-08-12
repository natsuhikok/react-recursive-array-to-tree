import React from 'react';
export const RecursiveComponent = ({ list, rootId }) => {
  const targetList = list.filter(item => item.parentId === rootId);
  return (
    <ul>
      {targetList.map(item => (
        <li key={item.id}>
          <span>#{item.id}</span> {item.name}
          {list.find(l => l.parentId === item.id) &&
            <RecursiveComponent list={list} rootId={item.id} />
          }
        </li>
      ))}
    </ul>
  )
}