const MouseTrack = require('../models/MouseTrack');

exports.index = (req, res) => {
  res.render('home', {
    title: 'Research'
  });
};


exports.store = (req, res, next) => {
  
  const mouseTrack = new MouseTrack({
    email: req.body.email,
    track: req.body.buffer
  });

  mouseTrack.save((err) => {
    if (err) { 
      console.log(err)
      return next(err); 
    }
    res.redirect('/');
  });
};
