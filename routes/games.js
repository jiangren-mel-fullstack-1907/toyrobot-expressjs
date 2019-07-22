var express = require('express');
var router = express.Router();

var state = {
  mapSize: 5,
  robotPosition: 2,
  icon: 'R',
  toCells: function() {
    var cells = [];
    for (var i = 0; i < this.mapSize; i++) {
      if (this.robotPosition === i) {
        cells.push({icon: this.icon})
      } else {
        cells.push({icon: ''});
      }
    }
    console.log('cells ============>>>>>>>>>>>>>', cells);
    return cells;
  }
}

router.get('/', function(req, res, next) {
  res.render('games', {cells: state.toCells()});
});


router.post('/', function(req, res, next) {
  console.log('req.body =============>>>>>>>>>>>', req.body);
  state.robotPosition += parseInt(req.body.move);
  res.render('games', {cells: state.toCells()});
});



module.exports = router;
