// enahced object literals

function newUser(user, age, country, uId){
  return {
    user,
    age,
    country,
    //id: uId
    uId
  }
}

console.log(newUser("gndx", 34, "MX", 1));