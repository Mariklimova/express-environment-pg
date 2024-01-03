const {getAllSkillDB,getAllSkillByIdDB,createSkillDB,updateSkillDB, deleteSkillDB, updateSkillOnReqDB} = require('../repository/skill.repository')

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

async function updateSkill(id,label, category, priority) {
   const data = await updateSkillDB(id,label, category, priority);
   return data 
}

async function deleteSkill(id) {
    const data = await deleteSkillDB(id);
    return data
}

// async function updateSkillOnReq(id,body) {
//     const data = await updateSkillOnReqDB(id,body);
//     return data 
//  }

async function updateSkillOnReq(id,body) {
    const data = await updateSkillOnReqDB(id,body);
    return data
    
}

module.exports = {getAllSkill, getAllSkillById,createSkill, updateSkill,deleteSkill,updateSkillOnReq}