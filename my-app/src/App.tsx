import React from 'react';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

const ItemList: React.FC = () => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Fruits List</h1>
      <ItemList />
    </div>
  );
};

export default App;

