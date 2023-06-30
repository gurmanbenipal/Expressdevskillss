let skills = [
  {id: 1, text: 'JavaScript', learned: true},
  {id: 2, text: 'HTML', learned: true},
  {id: 3, text: 'CSS', learned: true},
  {id: 4, text: 'Node.js', learned: false},
];


  module.exports = {
    getAll,
    getOne,
  };

  function getAll(){
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
