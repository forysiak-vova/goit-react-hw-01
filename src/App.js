import logo from './logo.svg';
import './App.css';
import FriendList from './components/FriendList';
import ProfileList from './components/ProfileList';
import TransactionList from './components/TransactionList'
import user from './user.json'
import friends from './friends.json';
import transactions from './transactions.json'


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <ProfileList items={user} />
      <FriendList items={friends} />
      <TransactionList items={transactions}/>
    </div>
   
  );
}

export default App;
