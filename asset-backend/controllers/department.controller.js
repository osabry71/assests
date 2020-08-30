const department = require("../models/department.model");

exports.getdepartments = (req, res, next) => {
    department.find()
        .then(department => {
            res.status(200).json(department)
        })
        .catch(error => {
            res.status(500).json(error)
        })
};
exports.getdepartment = (req, res, next) => {
    department.find({
            id: req.params.id
        })
        .then(department => {
            res.status(200).json(department)
        })
        .catch(error => {
            res.status(500).json(error)
        })
}; 
exports.adddepartment = (req, res, next) => {
    var Department = new department({
        depName: req.body.depName,
        depPhone: req.body.depPhone,
        depFax: req.body.depFax,
        deplocation: req.body.deplocation,
        depmanager: req.body.depmanager
    });
//    console.log(req.body.depName, req.body.depphone, req.body.depfax, req.body.deplocation, req.body.depmanager);
    Department.save()
        .then(Department => {
            res.status(200).json({
                Department,
                success: true
            })
//            console.log(Department);
        })
        .catch(erorr => {
            res.status(500).json({
                msg: erorr.message,
                success: false

            })
        })

};

exports.updatedepartment = (req, res, next) => {
    var Department = new department({
        _id: req.body._id,
        depName: req.body.depname,
        depPhone: req.body.depphone,
        depFax: req.body.depfax,
        deplocation: req.body.deplocation,
        depmanager: req.body.depmanager
    });
    department.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set: Department
        })
        .then(Department => {
            res.status(200).json({
                Department,
                success: true
            })
            console.log("Department data =" + Department);
        })
        .catch(erorr => {
            res.status(500).json({
                msg: erorr.message,
                success: false

            })
        })
};

exports.deletedepartment = (req, res, next) => {
    //console.log("delete department id , ", req.body.depid);
    department.findOneAndRemove({
//            _id: req.body.depid
              _id: req.headers["id"]
        })
        .then(DelOK => {
            res.status(200).json({
                DelOK,
                success: true
            })
        })
        .catch(erorr => {
            res.status(500).json({
                msg: erorr.message,
                success: false
            })
        })
 
};