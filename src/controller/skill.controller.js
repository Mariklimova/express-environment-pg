const express = require('express')
const {getAllSkill,getAllSkillById,createSkill} = require('../service/skill.service');


const route = express.Router();

route.get('/',async(req,res)=>{
    try {
        const data = await getAllSkill()
        res.status(200).send(data) 
    } catch (error) {
       res.status(400).send(error.message) 
    }
})

route.get('/:id',async(req,res)=>{
    try {
        const {id} = peq.params;
        const data = await getAllSkillById(id)
        res.status(200).send(data) 
    } catch (error) {
       res.status(400).send(error.message) 
    }
})

route.post('/',async(req,res)=>{
    try {
        const {label, category, priority} = req.body;
        const data = await createSkill(label, category, priority)
        res.status(200).send(data) 
    } catch (error) {
       res.status(400).send(error.message) 
    }
})





module.exports = route