let skills = [
    {text: 'JavaScript', learned: true},
    {text: 'HTML', learned: true},
    {text: 'CSS', learned: true},
    {text: 'Node.js', learned: false},
  ];

  module.exports = {
    getAll,
    getOne,
  };

  function getAll(){
    return skills;
  }

  function getOne(id) {
    return skills[id];
  }