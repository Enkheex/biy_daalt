const mongoose = require('mongoose');

mongoose
  .connect('mongodb+srv://Enkheex:Muukmuuk123@cluster1.0onbmrr.mongodb.net/login')
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));
