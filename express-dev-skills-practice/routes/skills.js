var express = require('express');
var router = express.Router();


let skillsCtrl = require('../controllers/skills');

router.get('/',skillsCtrl.index);
//Get / skills/new  <--- Define before show route
router.get('/new',skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/',skillsCtrl.create);

router.delete('/:id',skillsCtrl.delete);





module.exports = router;