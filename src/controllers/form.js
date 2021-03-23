const Form = require('../models/form');

exports.fill = async (req, res) => {
    const { name, email, age, role, recommend, fcc, future} = req.body;
    const form = new Form({
        Name:name, 
        Email:email, 
        Age:age, 
        role:role, 
        recommend:recommend, 
        FCC:fcc, 
        Future:future
    });
  
    await form.save((error, form) => {
      if (error) return res.status(400).json({ error });
      if (form) {
        res.status(201).json({ form, files: req.files });
      }
    });

};
