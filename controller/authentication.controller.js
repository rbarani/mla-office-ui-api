const Authentication = require('../model/authentication.model');

exports.findAll = function(req, res) {
    Authentication.findAll(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};

exports.petitionsList = function(req, res) {
    Authentication.petitionsList(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};

exports.getMlaFunds = function(req, res) {
    Authentication.getMlaFunds(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};

exports.getComplaintCategory = function(req, res) {
    Authentication.getComplaintCategory(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};

exports.getUnionAndPanchayat = function(req, res) {
    Authentication.getUnionAndPanchayat(function(err, data) {
        if (err)
            res.send(err);

        /*        console.log(array);
         */
        res.json(data);
    });

};

exports.getFundDeptCategory = function(req, res) {
    Authentication.getFundDeptCategory(function(err, data) {
        if (err)
            res.send(err);

        /*        console.log(array);
         */
        res.json(data);
    });

};

exports.getDashboardData = function(req, res) {
    Authentication.getDashboardData(function(err, data) {
        if (err)
            res.send(err);

        /*        console.log(array);
         */
        res.json(data);
    });

};

exports.getDepartmentPetions = function(req, res) {
    Authentication.getDepartmentPetions(function(err, data) {
        if (err)
            res.send(err);
        res.json(data);
    });

};

exports.getPanchayatPetions = function(req, res) {
    Authentication.getPanchayatPetions(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};


exports.getDataDepartmentWise = function(req, res) {
    Authentication.getDataDepartmentWise(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};


exports.getDataPanchayatWise = function(req, res) {
    Authentication.getDataPanchayatWise(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};


exports.getPanchayatDetails = function(req, res) {
    Authentication.getPanchayatDetails(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};



exports.getDepartmentFundUtilization = function(req, res) {
    Authentication.getDepartmentFundUtilization(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};




exports.getPanchayatFundUtilization = function(req, res) {
    Authentication.getPanchayatFundUtilization(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};



exports.getPanchayatLowFundUtilization = function(req, res) {
    Authentication.getPanchayatLowFundUtilization(function(err, data) {
        if (err)
            res.send(err);
        res.send(data);
    });
};


exports.createPetitions = function(req, res) {
    const petitionsData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Authentication.createPetitions(petitionsData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Petitions Created Successfully', data: user })
        })
    }
}

exports.createPanchayat = function(req, res) {
    const petitionsData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Authentication.createPanchayat(petitionsData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Panchayat Created Successfully', data: user })
        })
    }
}

exports.createMlaFunds = function(req, res) {
    const petitionsData = new Authentication(req.body);
    console.log(petitionsData);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Authentication.createMlaFunds(petitionsData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Mla fund Created Successfully', data: user })
        })
    }
}

exports.create = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Authentication.create(employeeReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'User Created Successfully', data: user })
        })
    }
};

exports.login = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Authentication.login(employeeReqData, (err, user) => {
            if (err)
            /*   res.send(err); */
                if (!user.length) {
                    res.json({ status: true, message: 'User not found', data: user })
                    return;
                }

            res.send(JSON.stringify({ status: 200, error: null, response: user }));
        })
    }
};

exports.update = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        Authentication.update(req.params.id, employeeReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'User Updated Successfully', data: user })
        })
    }
};

exports.updatePetitions = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {

        Authentication.updatePetitions(req.params.id, employeeReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Petitions Updated Successfully', data: user })
        })
    }
};

exports.updatePanchayat = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {

        Authentication.updatePanchayat(req.params.id, employeeReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Panchayat Updated Successfully', data: user })
        })
    }
};

exports.updateMlaFunds = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {

        Authentication.updateMlaFunds(req.params.id, employeeReqData, (err, user) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Mla fund Updated Successfully', data: user })
        })
    }
};

exports.getById = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    Authentication.getById(req.params.id, (err, user) => {
        if (err)
            res.send(err);
        // res.json({"first_name":"Dheeraj"});
        res.send(JSON.stringify({ status: 200, error: null, response: user }));
    })
};

exports.getMlaFundById = function(req, res) {
    const employeeReqData = new Authentication(req.body);
    Authentication.getMlaFundById(req.params.id, (err, user) => {
        if (err)
            res.send(err);
        // res.json({"first_name":"Dheeraj"});
        res.send(JSON.stringify({ status: 200, error: null, response: user }));
    })
};

exports.deleteUser = function(req, res) {
    Authentication.deleteUser(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'User deleted successully!' });
    })
};