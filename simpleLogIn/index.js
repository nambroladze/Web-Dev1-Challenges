const database = [
  { username: "alice", password: "alice123" },
  { username: "bob", password: "bob123" },
  { username: "charlie", password: "charlie123" },
];

function LogIn(event) {
  event.preventDefault();
  //   შეავსეთ ფუნქცია კოდით რომელიც ამოწმებს
  //   იუზერნეიმი და პაროლი რომ არ იყოს ცარიელი
  //   ასევე, ბაზაში (database array ზემოთ მოცემული) გვაქვს თუ არა მომხმარებელი მსგავსი იუზერით და პაროლით
  //   თუ მომხმარებელი მოიძებნა, დაბეჭდეთ "Login successful." ალერტით
  //   თუ იუზერი ცარიელი დაბეჭდეთ "Username cannot be empty." p ელემენტზე
  //   თუ პაროლი ცარიელი დაბეჭდეთ "Password cannot be empty." p ელემენტზე
  // თუ მომხმარებელი არ მოიძებნა დაბეჭდეთ "Incorrect username or password." p ელემენტზე
}
