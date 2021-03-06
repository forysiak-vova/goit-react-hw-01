import PropTypes from 'prop-types';
import s from './Stats.module.css';
import getRandomHexColor from './Color';

function Stats({ options, title }) {
  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statlist}>
        <li className={s.item}>
          {options.map(option => (
            <span
              className={s.span}
              key={option.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span>{option.label}</span>
              <span> {option.percentage}%</span>
            </span>
          ))}
        </li>
      </ul>
    </section>
  );
}

Stats.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  option: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Stats;
