import s from './Transaction.module.css';
import PropTypes from 'prop-types';

function Transactions({ items }) {
  return (
    <table className={s.container}>
      <thead>
        <tr>
          <th className={s.thTitle}>Type</th>
          <th className={s.thTitle}>Amount</th>
          <th className={s.thTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={s.child} key={item.id}>
            <td className={s.tdTitle}>{item.type}</td>
            <td className={s.tdTitle}>{item.amount}</td>
            <td className={s.tdTitle}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
