import React from 'react';
import { RecursiveComponent } from './RecursiveComponent';

const App = () => {
  const list = [
    { id: 1, name: 'at 01', parentId: 0 },
    { id: 2, name: 'at 02', parentId: 0 },
    { id: 3, name: 'at 03', parentId: 0 },
    { id: 4, name: 'at 04', parentId: 0 },
    { id: 5, name: 'at 05', parentId: 0 },
    { id: 6, name: 'at 06', parentId: 0 },
    { id: 7, name: 'at 07', parentId: 0 },
    { id: 8, name: 'at 08', parentId: 0 },
    { id: 9, name: 'at 01-01', parentId: 1 },
    { id: 10, name: 'at 02-01', parentId: 2 },
    { id: 11, name: 'at 02-01-01', parentId: 10 },
    { id: 12, name: 'at 02-02', parentId: 2 },
    { id: 13, name: 'at 03-01', parentId: 3 },
    { id: 14, name: 'at 03-01-01', parentId: 13 },
    { id: 15, name: 'at 03-01-01-01', parentId: 14 },
    { id: 16, name: 'at 08-01', parentId: 8 },
    { id: 17, name: 'at 09', parentId: 0 },
  ];
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>ツリー化したリスト</h1>
        <RecursiveComponent rootId={0} list={list} />
      </div>
      <div style={{ flex: 1 }}>
        <h1>普通のリスト</h1>
        <ul>
          {list.map(i => <li key={i.id}>#{i.id} #{i.name}</li>)}
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h1>リスト配列</h1>
        <ul>
          {list.map(i => <li key={i.id}>{`{ id: ${i.id}, name: '${i.name}', parentId: ${i.parentId} }`}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default App;
