const express = require('express')
const { getAllSkill, getAllSkillById, createSkill, updateSkill, deleteSkill, updateSkillOnReq } = require('../service/skill.service');
const { IsValidSkill } = require('../helper/validation')


const route = express.Router();

route.get('/', async (_req, res) => {
    try {
        const data = await getAllSkill()
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getAllSkillById(id)
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

route.post('/',IsValidSkill, async (req, res) => {
    try {
        const { label, category, priority } = req.body;
        const data = await createSkill(label, category, priority)
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

route.put('/:id',IsValidSkill, async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await updateSkill(id, label, category, priority);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteSkill(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// route.patch('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const body = req.body;
//         const data = await updateSkillOnReq(id,body);
//         res.status(200).send(data);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// })

route.patch('/:id',IsValidSkill, async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const data = await updateSkillOnReq(id, body);
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send(error.message);
    }
})




module.exports = route