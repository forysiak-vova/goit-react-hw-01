import styles from './Friend.module.css';
import PropTypes from 'prop-types';

function Friend({ name, status, avatar }) {
  return (
    <div className={styles.container}>
      <span className={status ? styles.green : styles.red}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </div>
  );
}

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
export default Friend;
