var mongoose = require('mongoose');
var config = require('../config/database');
var router = express.Router();
var bodyParser = require('body-parser');
var datetime = require('node-datetime');
var dt = datetime.create();
var today = dt.format('YmdHMS')+'s';

db = mongoose.connection;
console.log(db);

var User = require("../models/userModel");
var Candidateassesses = require("../models/candidateassesses");
var Candidatecertifies = require("../models/candidatecertifies");
var Candidateenrolls = require("../models/candidateenrolls");
var Candidateongoings = require("../models/candidateongoings");
var Candidatepasses = require("../models/candidatepasses");
var Candidateplaces = require("../models/candidateplaces");
var Candidatetraineds = require("../models/candidatetraineds");
var path = require('path');

router.get('/getUsers', function(req, res, next) {
        User.findOne({})
            .exec(function(err, post) {
                if (err)
                  {
                    res.json({status: false, msg: 'Unable to Get the Candidate data'});
                  }
                else
                  {
                    res.send({status: true,data: post});
                  }
            });
});


router.get('/insert_candidateassess', function(req, res, next) {

    pipeline = [{
        "$match": {
        "Assessed": "Yes"
       }
      },
      {
        "$group": {
          "_id": {
            "TrainingType": "$TrainingType",
            "TCState": "$TCState",
            "TCDistrict": "$TCDistrict",
            "Sectorname": "$Sectorname",
           "PartnerID": "$PartnerID",
           "SCCentreID": "$SCCentreID"
          },
          "COUNT(*)": {
            "$sum": 1
          }
        }
      }
    ];

   User.aggregate(pipeline).exec(function(err,result){
    let  potatoBag = result;

    if(potatoBag.length >0)
    {
          /* Rename the Old Collection before insert */
          db.collection("candidateassesses").rename('candidateassesses'+today);

          Candidateassesses.collection.insert(potatoBag, onInsert);

          function onInsert(err, docs)
          {
            if (err)
            {
               res.json({status: false, msg: err});
          }else{

              res.json({status: true, msg: 'insered'});
          }
      }
    }
    else
    {
       res.json({status: false, msg: 'data not Found'});
    }
    
    
   })

 
});

router.get('/insert_candidatecertifies', function(req, res, next) {

    pipeline = [{
        "$match": {
        "Cerified": "Yes"
       }
      },
      {
        "$group": {
          "_id": {
            "TrainingType": "$TrainingType",
            "TCState": "$TCState",
            "TCDistrict": "$TCDistrict",
            "Sectorname": "$Sectorname",
           "PartnerID": "$PartnerID",
           "SCCentreID": "$SCCentreID"
          },
          "COUNT(*)": {
            "$sum": 1
          }
        }
      }
    ];

   User.aggregate(pipeline).exec(function(err,result){
    let  potatoBag = result;

    if(potatoBag.length >0)
    {
          /* Rename the Old Collection before insert */
          db.collection("candidatecertifies").rename('candidatecertifies'+today);

          Candidatecertifies.collection.insert(potatoBag, onInsert);

          function onInsert(err, docs)
          {
            if (err)
            {
               res.json({status: false, msg: err});
          }else{

              res.json({status: true, msg: 'insered'});
          }
      }
    }
    else
    {
       res.json({status: false, msg: 'data not Found'});
    }

    
    
   })

 
});

router.get('/insert_candidateenrolls', function(req, res, next) {

    pipeline = [{
        "$match": {
        "Enrolled": "Yes"
       }
      },
      {
        "$group": {
          "_id": {
            "TrainingType": "$TrainingType",
            "TCState": "$TCState",
            "TCDistrict": "$TCDistrict",
            "Sectorname": "$Sectorname",
           "PartnerID": "$PartnerID",
           "SCCentreID": "$SCCentreID"
          },
          "COUNT(*)": {
            "$sum": 1
          }
        }
      }
    ];

   User.aggregate(pipeline).exec(function(err,result){
    let  potatoBag = result;

    if(potatoBag.length >0)
    {
          /* Rename the Old Collection before insert */
          db.collection("candidateenrolls").rename('candidateenrolls'+today);

          Candidateenrolls.collection.insert(potatoBag, onInsert);

          function onInsert(err, docs)
          {
            if (err)
            {
               res.json({status: false, msg: err});
          }else{

              res.json({status: true, msg: 'insered'});
          }
      }
    }
    else
    {
       res.json({status: false, msg: 'data not Found'});
    }

    



    
   })

 
});

router.get('/insert_candidateongoing', function(req, res, next) {

    pipeline = [{
        "$match": {
        "Ongoing": "Yes"
       }
      },
      {
        "$group": {
          "_id": {
            "TrainingType": "$TrainingType",
            "TCState": "$TCState",
            "TCDistrict": "$TCDistrict",
            "Sectorname": "$Sectorname",
           "PartnerID": "$PartnerID",
           "SCCentreID": "$SCCentreID"
          },
          "COUNT(*)": {
            "$sum": 1
          }
        }
      }
    ];

   User.aggregate(pipeline).exec(function(err,result){
    let  potatoBag = result;

    if(potatoBag.length >0)
    {
         /* Rename the Old Collection before insert */
          db.collection("candidateongoings").rename('candidateongoings'+today);

          Candidateongoings.collection.insert(potatoBag, onInsert);

          function onInsert(err, docs)
          {
            if (err)
            {
               res.json({status: false, msg: err});
          }else{

              res.json({status: true, msg: 'insered'});
          }
      }
    }
    else
    {
       res.json({status: false, msg: 'data not Found'});
    }

   
    
   })

 
});

router.get('/insert_candidatepasses', function(req, res, next) {

    pipeline = [{
        "$match": {
        "passed": "Yes"
       }
      },
      {
        "$group": {
          "_id": {
            "TrainingType": "$TrainingType",
            "TCState": "$TCState",
            "TCDistrict": "$TCDistrict",
            "Sectorname": "$Sectorname",
           "PartnerID": "$PartnerID",
           "SCCentreID": "$SCCentreID"
          },
          "COUNT(*)": {
            "$sum": 1
          }
        }
      }
    ];

   User.aggregate(pipeline).exec(function(err,result){
    let  potatoBag = result;
    console.log(potatoBag.length);
    if(potatoBag.length >0)
    {
          /* Rename the Old Collection before insert */
          db.collection("candidatepasses").rename('candidatepasses'+today);

          Candidatepasses.collection.insert(potatoBag, onInsert);

          function onInsert(err, docs)
          {
            if (err)
            {
               res.json({status: false, msg: err});
          }else{

              res.json({status: true, msg: 'insered'});
          }
      }
    }
    else
    {
       res.json({status: false, msg: 'data not Found'});
    }

    
    
   })

 
});

router.get('/insert_candidateplaced', function(req, res, next) {

    pipeline = [{
        "$match": {
        "placed": "Yes"
       }
      },
      {
        "$group": {
          "_id": {
            "TrainingType": "$TrainingType",
            "TCState": "$TCState",
            "TCDistrict": "$TCDistrict",
            "Sectorname": "$Sectorname",
           "PartnerID": "$PartnerID",
           "SCCentreID": "$SCCentreID"
          },
          "COUNT(*)": {
            "$sum": 1
          }
        }
      }
    ];

   User.aggregate(pipeline).exec(function(err,result){
    let  potatoBag = result;

    if(potatoBag.length >0)
    {
          /* Rename the Old Collection before insert */
          db.collection("candidateplaces").rename('candidateplaces'+today);

          Candidateplaces.collection.insert(potatoBag, onInsert);

          function onInsert(err, docs)
          {
            if (err)
            {
               res.json({status: false, msg: err});
          }else{

              res.json({status: true, msg: 'insered'});
          }
      }
    }
    else
    {
       res.json({status: false, msg: 'data not Found'});
    }

   
    
   })

 
});

router.get('/insert_candidatetrained', function(req, res, next) {

    pipeline = [{
        "$match": {
        "Trained": "Yes"
       }
      },
      {
        "$group": {
          "_id": {
            "TrainingType": "$TrainingType",
            "TCState": "$TCState",
            "TCDistrict": "$TCDistrict",
            "Sectorname": "$Sectorname",
           "PartnerID": "$PartnerID",
           "SCCentreID": "$SCCentreID"
          },
          "COUNT(*)": {
            "$sum": 1
          }
        }
      }
    ];

   User.aggregate(pipeline).exec(function(err,result){
    let  potatoBag = result;

    if(potatoBag.length >0)
    {
          
        /* Rename the Old Collection before insert */
          db.collection("candidatetraineds").rename('candidatetraineds'+today);

          Candidatetraineds.collection.insert(potatoBag, onInsert);

          function onInsert(err, docs)
          {
            if (err)
            {
               res.json({status: false, msg: err});
          }else{

              res.json({status: true, msg: 'insered'});
          }
      }
    }
    else
    {
       res.json({status: false, msg: 'data not Found'});
    }

    
    
   })

 
});



module.exports = router;
