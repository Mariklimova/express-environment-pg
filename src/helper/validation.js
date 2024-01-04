function IsVAlidId(req, _res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('id not valid')
   
    next();
}

function IsValidSkill(req, _res, next) {
    const { label, category, priority } = req.body;


    if (typeof (label) != 'string') throw new Error('label not string');
    if (typeof (category) != 'string') throw new Error('category not string');
    if (typeof (priority) != 'number') throw new Error('priority not number');
    if (!isNaN(label)) throw new Error('label not valid');
    if (!isNaN(category)) throw new Error('category not valid');
    if (isNaN(priority)) throw new Error('priority not valid');
    if (priority < 0) throw new Error('priority < 0')
    next();
}

module.exports = { IsValidSkill }
