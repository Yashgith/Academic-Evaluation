const express= require('express')
const router=express.Router()

const templatecopy=require('../Database/Data')

router.post('/signup',(request,response)=>{
    const user= new templatecopy({
        Name:request.body.Name,
        lastName:request.body.lastName,
        email:request.body.email,
        password:request.body.password
    })
      user.save()
      .then(data=>{
        response.json(data)
      })
      .catch(error=>{
        response.json(error)
      })
})

module.exports = router;
