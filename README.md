[React 再帰コンポーネント 親子関係を持つリストをツリー表示する](https://qiita.com/hikonaz/items/b0d1f6e1486563ab9391)のサンプルコートです。

---

親子関係を持つリストをツリー表示するコンポーネント。

サンプルサイト: https://react-recursive-array-to-tree.netlify.com/
レポジトリ: https://github.com/natsuhikok/react-recursive-array-to-tree

## リストデータ
以下の配列をツリー表示にします。

```list.js
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
```

## 再帰コンポーネント

`<RecursiveComponent rootId={0} list={list} />`でリストと最初の回で表示する`parentId`を渡します。


```RecursiveComponent.jsx
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
```
