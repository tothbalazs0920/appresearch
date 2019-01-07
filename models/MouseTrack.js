const mongoose = require('mongoose');

const mouseTrackSchema = new mongoose.Schema({
  email: String,
  track: Array
});

const MouseTrack = mongoose.model('MouseTrack', mouseTrackSchema);

module.exports = MouseTrack;
