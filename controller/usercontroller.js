var usermodel = require('../model/usermodel');

exports.add_data = async (req,res) => {
    var data = await usermodel.create(req.body);
    res.status(200).json({
        data
    })
}

exports.view_data = async (req, res) => {
    try {
        var pageno = req.query.pageno;

        if(pageno == undefined){
            pageno = 1;
        }

        var limit = 3;
        var skip_data = (pageno-1)*limit;

        var data = await usermodel.find().limit(limit).skip(skip_data);
        res.status(200).json({
            data,
            pageno
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}