const {getAllSkillDB,getAllSkillByIdDB,createSkillDB} = require('../repository/skill.repository')

async function getAllSkill() {
    const data = await getAllSkillDB()
    return data
}

async function getAllSkillById(id) {
    const data = await getAllSkillByIdDB(id)
    return data
}

async function createSkill(label, category, priority) {
    const data = await createSkillDB(label, category, priority)
    return data
}

module.exports = {getAllSkill, getAllSkillById,createSkill}