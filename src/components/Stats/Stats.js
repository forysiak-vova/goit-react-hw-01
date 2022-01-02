// import PropTypes from 'prop-types';
import s from './Stats.module.css';

function Stats({ options }) {
  return (
    <section className={s.container}>
      <h2 className={s.title}>Upload stats</h2>

      <ul className={s.statlist}>
        <li className="item">
          {options.map(option => (
            <span className={s} key={option.id}>
              {option.label}
            </span>
          ))}
          {options.map(option => (
            <span className="percentage" key={option.id}>
              {option.percentage}
            </span>
          ))}
        </li>
      </ul>
    </section>
  );
}

// Stats.propTypes = {
//   label: PropTypes.string,
// percentage:PropTypes.number,

// };

export default Stats;
