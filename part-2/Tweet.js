/** Tweet: a single tweet.
 *
 * Props:
 * - name
 * - username
 * - data
 * - message
 */

function Tweet({ date, message, name, username }) {
    return (
      <div className="tweet">
        <span>{name}</span>
        <span className="username">{username}</span>
        <span className="date">{date}</span>
        <p>{message}</p>
      </div>
    );
  }
  

// function Tweet({username, name, date, message}) {
//     return (
//         <div classname='tweet'>
//             <span>{username}</span>
//             <span classname='name'>{name}</span>
//             <span classname='date'>{date}</span>
//             <p>{message}</p>
//         </div>
//     );
// }