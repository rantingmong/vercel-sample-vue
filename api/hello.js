import axios from 'axios'

module.exports = async (req, res) => {

  try {
    const response = await axios('https://jsonplaceholder.typicode.com/posts')

    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}! Posts have ${response.data.length} items in it.`)
  } catch (error) {
    res.status(500).send("Can't process data.")
  }
}
