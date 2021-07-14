const multer = require('multer');
const fs = require('fs');

const uploadsDir = __dirname+'../../../uploads';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(uploadsDir)){
            fs.mkdirSync(uploadsDir);
        }
      cb(null, uploadsDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname)
    }
  })
  
const upload = multer({ storage: storage })

module.exports = upload