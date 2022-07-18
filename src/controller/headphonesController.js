
const headphone_index = (req, res) => {
   res.render('headphones', {title: 'Headphones'})
}

const headphone_xx99_two = (req, res) => {
   res.render('xx99-mark-two-headphones', {title: 'xx99-mark-two-headphones'})
}

const headphone_xx99_one = (req, res) => {
   res.render('xx99-mark-one-headphones', {title: 'xx99-mark-one-headphones'})
}

module.exports = {
   headphone_index,
   headphone_xx99_two,
   headphone_xx99_one
}