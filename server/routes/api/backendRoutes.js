const Data = require('../../models/CrudData');
const express = require('express');


module.exports = (app) => {

  app.get('/api/getdata', (req, res, next) => {

    Data.find({})
      .exec()
      .then((data) => {
        return(res.send(data));
      })
      .catch((err) => next(err));
  });

  app.post('/api/adddata', (req, res, next) => {
    
    const data = new Data({...req.body});

    try{
      data.save()
      .then(res.json(data));
      console.log(req.body)
      
    }catch(err){
      console.log(err);
    }
  });

  app.put('/api/editdata/:id', (req,res,next) => {
    console.log(req.params.id)
    console.log(req.body)
    Data.findByIdAndUpdate(req.params.id, req.body)
    .exec()
    .then((data) => res.json(data))
    .catch((err) => next(err))
  })

app.delete('/api/deletedata/:id', (req,res,next) => {
  Data.findByIdAndDelete(req.params.id)
  .exec()
  .then((data) => {
    res.json(data)
    console.log(data)
  })
  .catch((err) => next(err))
  
}) 

  // app.delete('/api/counters/:id', function (req, res, next) {
  //   Counter.findOneAndDelete({ _id: req.params.id })
  //     .exec()
  //     .then((counter) => res.json())
  //     .catch((err) => next(err));
  // });

  // app.put('/api/counters/:id/increment', (req, res, next) => {
  //   Counter.findById(req.params.id)
  //     .exec()
  //     .then((counter) => {
  //       counter.count++;

  //       counter.save()
  //         .then(() => res.json(counter))
  //         .catch((err) => next(err));
  //     })
  //     .catch((err) => next(err));
  // });

  // app.put('/api/counters/:id/decrement', (req, res, next) => {
  //   Counter.findById(req.params.id)
  //     .exec()
  //     .then((counter) => {
  //       counter.count--;

  //       counter.save()
  //         .then(() => res.json(counter))
  //         .catch((err) => next(err));
  //     })
  //     .catch((err) => next(err));
  // });
};
