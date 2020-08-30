const employee = require("../models/employee.model");

exports.getemployee = (req, res, next) => {
    employee.find()
        .then(employee => {
            res.status(200).json(employee)
        })
        .catch(error => {
            res.status(500).json(error)
        })
};
exports.getemployee = (req, res, next) => {
    employee.find({
            id: req.params.id
        })
        .then(employee => {
            res.status(200).json(employee)
        })
        .catch(error => {
            res.status(500).json(error)
        })
};
exports.addemployee = (req, res, next) => {
    var Employee = new employee({
        Empname: req.body.Empname,
        Email: req.body.Email,
        Degre: req.body.Degre,
        dateofbeinghired: req.body.dateofbeinghired,
        gender: req.body.gender,
        department: req.body.department


    });
    Employee.save()
        .then(Employee => {
            res.status(200).json({
                Employee,
                success: true
            })
            console.log("Employee data =" + Employee);
        })
        .catch(erorr => {
            res.status(500).json({
                msg: erorr.message,
                success: false
            })
        })


};

exports.updateemployee = (req, res, next) => {
    var Employee = new employee({
        _id: req.body._id,
        Empname: req.body.Empname,
        Email: req.body.Email,
        Degre: req.body.Degre,
        dateofbeinghired: req.body.dateofbeinghired,
        gender: req.body.gender,
        department: req.body.department
    });
    console.log(Employee.gender);
    employee.findOneAndUpdate({
            _id: req.body._id
        }, {
            $set: Employee
        })
        .then(Employee => {
            res.status(200).json({
                Employee,
                success: true
            })
            console.log("Employee data =" + Employee);
        })
        .catch(erorr => {
            res.status(500).json({
                msg: erorr.message,
                success: false
            })
        })

};



exports.deleteemployee = (req, res, next) => {
    employee.findOneAndRemove({
            _id: req.headers["id"]
        })
        .then(emps => {
            res.status(200).json({
                emps,
                success: true
            })
            console.log(emps + "Is deleted");
        })

        .catch(erorr => {
            res.status(500).json({
                msg: erorr.message,
                success: false
            })
        })

};