const Computer = function (name, model) {
  this.name = name;
  this.model = model;
  this.aboutComputer = function () {
    console.log(
      `this computer name is ${this.name}, and this computer model is ${this.model}`
    );
  };
};

const dell = new Computer("dell", "latitude");
const hp = new Computer("hp", "elite");
// console.log(dell);
// console.log(hp);
// dell.aboutComputer();
// hp.aboutComputer();
