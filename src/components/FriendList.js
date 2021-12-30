import Friend from "./Friend";

function FriendList({items}) {
   
   return (
      <ul>
      
         {items.map(item => (
            <li key={item.id}>
            <Friend
            name={item.name}
            avatar={item.avatar}
            status={item.isOnline}
         />
         </li>))}
        

      </ul>
   )
}
   export default FriendList;