const { imgToPDF } = require('../utils/imgToPDF');

const convert = async (req, res) => {
    if(!req.file) return res.status(422).json({error:'image missing'})

    const pdf = await imgToPDF(req.file)
    res.status(200).download(pdf)
}

module.exports = convert;
