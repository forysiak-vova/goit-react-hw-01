import Transaction from './Transaction'

function TransactionsList({items}) { 
   return (
      <ul>
          {items.map(item => (
            <li key={item.id}>
            <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
         />
         </li>))}
   </ul>
)
}

export default TransactionsList