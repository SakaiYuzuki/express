var express = require('express');
var router = express.Router();
const request = require('request');
router.get('/', async (req, res) => {
request('https://dog.ceo/api/breeds/image/random', function (error, response,
body) {
if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
res.json(data);
}
});
})
<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 526dd8e58ac7d4954377c2b8492093c8a55a7195
