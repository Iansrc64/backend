const getAll =  (req, res) =>{
    return res.status(200).json({message : 'controller on'})
  } 
  
  module.exports = {
      getAll
  }