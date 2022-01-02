import Transaction from './Transaction';
import PropTypes from 'prop-types';

function TransactionsList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </li>
      ))}
    </ul>
  );
}

TransactionsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionsList;
