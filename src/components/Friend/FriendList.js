import Friend from '.';
import PropTypes from 'prop-types';
import s from './Friend.module.css';

function FriendList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => (
        <li key={item.id}>
          <Friend
            name={item.name}
            avatar={item.avatar}
            status={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
