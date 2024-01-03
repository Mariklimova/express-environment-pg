function IsVAlidId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('')
    next();
}

function IsValidSkill(req, res, next) {
    const { label, category, priority } = req.body;


    if (!isNaN(label)) throw new Error('label not valid');
    if (!isNaN(category)) throw new Error('category not valid');
    if (isNaN(priority)) throw new Error('priority not valid');
    if (priority < 0) throw new Error('priority < 0')
    next();
}

module.exports = {IsValidSkill}
