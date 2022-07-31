const data = require('../../data.json')
const axios = require('axios')



const headphone_index = (req, res) => {
   res.render('headphones', {title: 'Headphones'})
}

const headphone_xx99_two = async (req, res) => {
   const prod = await axios.get("http://localhost:3001/products/4")
   res.render('xx99-mark-two-headphones', {title: 'xx99-mark-two-headphones', item1 : prod.data})
  
}
// res.render('xx99-mark-two-headphones', {title: 'xx99-mark-two-headphones', dataArr: item1})
const headphone_xx99_one = (req, res) => {
   res.render('xx99-mark-one-headphones', {title: 'xx99-mark-one-headphones'})
}

module.exports = {
   headphone_index,
   headphone_xx99_two,
   headphone_xx99_one
}