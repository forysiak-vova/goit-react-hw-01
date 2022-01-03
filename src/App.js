import logo from './logo.svg';
import './App.css';
import FriendList from './components/FriendList';
// import StatsList from './components/StatsList'
import Stats from './components/Stats';
import ProfileList from './components/ProfileList';
// import TransactionList from './components/TransactionList';
import Transaction from './components/Transaction';

import user from './json/user.json';
import stats from './json/stats.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

function App() {
  return (
    <div>
      <ProfileList items={user} />
      <FriendList items={friends} />
      <Stats options={stats} title="Upload stats" />
      <Transaction items={transactions} />
    </div>
  );
}

export default App;
