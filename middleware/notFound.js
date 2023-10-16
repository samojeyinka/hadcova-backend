const notFound = (req,res) => res.status(404).send("Page doesn't exist.")

module.exports = notFound