const express=require('express')
const router=express.Router()

router.get('/',(req,res,next)=>{
    res.send('<h1>HELLO FROM EXPRESS JS</h1>')
})

module.exports=router
