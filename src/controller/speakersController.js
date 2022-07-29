const speaker_index = (req, res) => {
   res.render('speakers', {title: 'Speakers'})
}

module.exports = {
   speaker_index
}