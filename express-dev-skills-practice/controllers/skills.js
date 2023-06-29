let skills = require('../models/skill'); 

module.exports = {
    index,
    show,
};

function index(req, res) {
    res.render('skills/index',{
      skills: skills.getAll(), 
    });
}
function show(req, res) {
    res.render('skills/show', {
      skill: skills.getOne(req.params.id),
    });
  }