let skills = [
  {id: 1, text: 'JavaScript', learned: true},
  {id: 2, text: 'HTML', learned: true},
  {id: 3, text: 'CSS', learned: true},
  {id: 4, text: 'Node.js', learned: false},
];


  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

function  create(skill){
  skill.id = Date.now() % 1000000;
  skill.learned = false;
  skills.push(skill)
}
  function getAll(){
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
