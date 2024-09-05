function App() {
    return (
      <div>
        <Tweet
          name="Matt Lane"
          username="mmmaaatttttt"
          date={new Date().toDateString()}
          message="This app will disrupt everything!!"
        />
        <Tweet
          name="Elie Schoppik"
          username="eschoppik"
          date={new Date().toDateString()}
          message="#Ilovehashtags"
        />
        <Tweet
          name="Tim Garcia"
          username="TimGarcia0"
          date={new Date().toDateString()}
          message="Follow me on Twitter!"
        />
      </div>
    );
  }
  


// function App() {
//     return (
//         <div>
//             <Tweet 
//                 username="SweetPie"
//                 name="Casey Zzz"
//                 date={new Date().toDateString()}
//                 message="I love dancing."
//             />
//             <Tweet
//                 username="MonsterTheAwsome"
//                 name="Aiden Zzz"
//                 date={new Date.toDateString()}
//                 message="I love vedio games."
//             />
//             <Tweet 
//                 username="prettywoniu"
//                 name="Eva Zzz"
//                 date={new Date.toString()}
//                 message="I loving painting."
//             />
//         </div>
//     );
// }