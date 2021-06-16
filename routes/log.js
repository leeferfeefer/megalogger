var express = require('express');
var router = express.Router();
var DataParserService = require('../service/dataParser.service');

router.post('/', function(req, res) {
  try {
    DataParserService.parse(req.body);
    res.status(200).end();
  } catch (error) {
    console.log("Error receiving log: ", error);
    res.status(500).end();
  }  
});

module.exports = router;