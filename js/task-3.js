const profile = {
    username: "Jacob",
    playTime: 300,
    
    getInfo() {
       let Username = this.username;
      let amount = this.playTime;
      return `${Username} has ${amount} active hours!`;
    },
    changeUsername(newName) {  
      this.username = newName;
    },
     updatePlayTime(hours) {
      this.playTime += hours;
    },
  }
   console.log(profile.getInfo()); // "Jacob has 300 active hours!"
   profile.changeUsername("Marco");
   console.log(profile.getInfo()); // "Marco has 300 active hours!"
   profile.updatePlayTime(20);
  console.log(profile.getInfo()); // "Marco has 320 active hours!"
  