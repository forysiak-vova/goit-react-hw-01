import PropTypes from 'prop-types';

function Friend({ name, status, avatar }) {
  return (
    <div className="item">
      <span className="status">{status ? 'Онлайн' : 'Офлайн'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  status: PropTypes.bool,
};
export default Friend;
