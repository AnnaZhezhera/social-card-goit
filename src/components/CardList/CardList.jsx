import { useEffect } from 'react';
import { CardItem } from '../CardItem/CardItem';
import { data } from '../../data/users.js';

export const CardList = () => {
  useEffect(() => {
    JSON.parse(localStorage.getItem('followers'));
  }, []);

  return (
    <ul style={{ display: 'flex' }}>
      {data.map(item => {
        return <CardItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
