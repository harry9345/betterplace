// Challenge 1 solution
const friends = [
  {
    name: "Sam",
    score: 20,
    isMeet: false,
  },
  {
    name: "John",
    score: 100,
    isMeet: true,
  },
  {
    name: "Mykaila",
    score: 1000,
    isMeet: true,
  },
  {
    name: "jeniffer",
    score: 5,
    isMeet: false,
  },
  {
    name: "Mona",
    score: 10 ^ 7,
    isMeet: true,
  },
  {
    name: "Jim",
    score: 10,
    isMeet: false,
  },
  {
    name: "Adele",
    score: 5,
    isMeet: false,
  },
  {
    name: "Harry",
    score: 10 ^ 7,
    isMeet: false,
  },
];
export default function tobiesFriends(n) {
  console.table(friends);
  // sort the friends list by thier score DESC
  n.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  let callCount = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i].isMeet) {
      n[i].score = n[n.length - 1].score - 1;
    } else {
      n[i].isMeet = true;
      n[i].score = n[n.length - 1].score - 1;
      addScore(n, i);
      callCount++;
    }
  }
  function addScore(FriendsList, index) {
    let m = 10 ^ 7;
    for (let i = index + 1; i < FriendsList.length; i++) {
      if (FriendsList[i].score >= m) {
        return FriendsList[i].score;
      } else {
        FriendsList[i].score++;
      }
    }
  }
  // callCount is the amout call he has to make
  console.table(friends);
  console.log("call count", callCount);
  return callCount;
}
tobiesFriends(friends);
