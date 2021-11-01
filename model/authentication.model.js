var sql = require("../config/db.config");


var Authentication = function(users) {
    this.first_name = users.firstname;
    this.last_name = users.lastname;
    this.email = users.email;
    this.username = users.username;
    this.password = users.password;
    this.mobile = users.mobile;
    this.user_id = users.user_id;
    this.gender = users.gender;

    this.mla_fund = users.mla_fund;
    this.panchayat = users.panchayat;
    this.scheme_title = users.scheme_title;
    this.scheme_desc = users.scheme_desc;
    this.scheme_year = users.scheme_year;
    this.fund_dept = users.fund_dept;
    this.union_panchayat = users.panchayat_union;

    this.total_wards = users.total_wards;
    this.total_rations = users.total_rations;
    this.panchayat_category = users.panchayat_category;
    this.panchyat_female_voters = users.panchyat_female_voters;
    this.panchayat_male_voters = users.panchayat_male_voters;
    this.panchayat_female = users.panchayat_female;
    this.panchayat_male = users.panchayat_male;
    this.panchayat_papulation = users.panchayat_papulation;
    this.panchayat_clerk = users.panchayat_clerk;
    this.panchayat_vao = users.panchayat_vao;
    this.panchayat_president = users.panchayat_president;

    this.name = users.name;
    this.father_name = users.father_name;
    this.door_no = users.door_no;
    this.pincode = users.pincode;
    this.street = users.street;
    this.department = users.department;
    this.complaints = users.complaints;
    this.petitions_status = users.petitions_status;

}

Authentication.create = function(users, result) {
    sql.query('INSERT INTO users SET ?', users,
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.createPetitions = function(users, result) {
    sql.query("INSERT INTO petitions SET name=?,father_name=?,gender=?,door_no=?,street=?,panchayat_union=?,panchayat_name=?,mobile=?,pincode=?,complaints=?,department=?,petition_status=?", [users.name, users.father_name, users.gender, users.door_no, users.street, users.union_panchayat, users.panchayat, users.mobile, users.pincode, users.complaints, users.department, users.petitions_status],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.createPanchayat = function(users, result) {
    var union_id = users.union_panchayat;
    var unionName = '';
    if (union_id == '1') {
        unionName = 'Thirupanandal';
    } else if (union_id == '2') {
        unionName = 'Thiruvidaimaruthur';
    } else if (union_id == '2') {
        unionName = 'Kumbakonam';
    }
    console.log(unionName);
    console.log(users);
    sql.query("INSERT INTO panchayat_details SET panchayat=?,panchayat_union=?,panchayat_union_id=?,panchayat_president=?,panchayat_vao=?,panchayat_clerk=?,panchayat_papulation=?,panchayat_male=?,panchayat_female=?,panchayat_male_voters=?,panchyat_female_voters=?,panchayat_category=?,total_rations=?,total_wards=?", [users.panchayat, unionName, users.union_panchayat, users.panchayat_president, users.panchayat_vao, users.panchayat_clerk, users.panchayat_papulation, users.panchayat_male, users.panchayat_female, users.panchayat_male_voters, users.panchyat_female_voters, users.panchayat_category, users.total_rations, users.total_wards],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.createMlaFunds = function(users, result) {
    sql.query("INSERT INTO mla_funds SET mla_fund=?,panchayat_name=?,scheme_title=?,scheme_desc	=?,scheme_year=?,union_panchayat=?,fund_dept=? ", [users.mla_fund, users.panchayat, users.scheme_title, users.scheme_desc, users.scheme_year, users.union_panchayat, users.fund_dept],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.login = function(users, result) {
    sql.query('SELECT * FROM users WHERE email = ? AND password = ?', [users.username, users.password],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.update = function(id, users, result) {
    sql.query("UPDATE users SET first_name=?,last_name=?,email=?,mobile=?,gender=? WHERE user_id = ?", [users.first_name, users.last_name, users.email, users.mobile, users.gender, id],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.updatePetitions = function(id, users, result) {
    sql.query("UPDATE petitions SET name=?,father_name=?,gender=?,door_no=?,street=?,panchayat_union=?,panchayat_name=?,mobile=?,pincode=?,complaints=?,department=?,petition_status=?  WHERE petition_id = ?", [users.name, users.father_name, users.gender, users.door_no, users.street, users.union_panchayat, users.panchayat, users.mobile, users.pincode, users.complaints, users.department, users.petitions_status, id],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.updatePanchayat = function(id, users, result) {
    var union_id = users.union_panchayat;
    var unionName = '';
    if (union_id == '1') {
        unionName = 'Thirupanandal';
    } else if (union_id == '2') {
        unionName = 'Thiruvidaimaruthur';
    } else if (union_id == '2') {
        unionName = 'Kumbakonam';
    }
    sql.query("UPDATE panchayat_details SET panchayat=?,panchayat_union=?,panchayat_union_id=?,panchayat_president=?,panchayat_vao=?,panchayat_clerk=?,panchayat_papulation=?,panchayat_male=?,panchayat_female=?,panchayat_male_voters=?,panchyat_female_voters=?,panchayat_category=?,total_rations=?,total_wards=?  WHERE panchayat_id = ?", [users.panchayat, unionName, users.union_panchayat, users.panchayat_president, users.panchayat_vao, users.panchayat_clerk, users.panchayat_papulation, users.panchayat_male, users.panchayat_female, users.panchayat_male_voters, users.panchyat_female_voters, users.panchayat_category, users.total_rations, users.total_wards, id],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.updateMlaFunds = function(id, users, result) {
    sql.query("UPDATE mla_funds SET mla_fund=?,panchayat_name=?,scheme_title=?,scheme_desc=?,scheme_year=?,union_panchayat=?,fund_dept=?  WHERE m_id = ?", [users.mla_fund, users.panchayat, users.scheme_title, users.scheme_desc, users.scheme_year, users.union_panchayat, users.fund_dept, id],
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.getById = function(id, result) {
    sql.query('SELECT * FROM users WHERE user_id=?', id,
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.getMlaFundById = function(id, result) {
    sql.query('SELECT * FROM mla_funds WHERE m_id=?', id,
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.deleteUser = function(id, result) {
    sql.query('DELETE FROM users WHERE user_id=?', id,
        function(err, res) {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

Authentication.findAll = function(result) {
    sql.query("SELECT * from users", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.petitionsList = function(result) {
    sql.query("SELECT * from petitions ORDER BY created_at DESC", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getMlaFunds = function(result) {
    sql.query("SELECT * from mla_funds", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}


Authentication.getUnionAndPanchayat = function(result) {
    sql.query("SELECT panchayat_id, panchayat, panchayat_union,panchayat_union_id FROM panchayat_details", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            if (res.length > 0) {
                const sortedPanchayats = res.reduce((array, { panchayat_id, panchayat_union, panchayat, panchayat_union_id }) => {
                    array[panchayat_union_id] = array[panchayat_union_id] || { panchayat_union, panchayat_union_id, panchayats: [] }
                    array[panchayat_union_id] = array[panchayat_union_id]
                    array[panchayat_union_id]["panchayats"].push({
                        'panchayat_id': panchayat_id,
                        'panchayat': panchayat
                    })
                    return array;
                }, {})
                result(null, Object.values(sortedPanchayats));
            }
        }
    });
}

Authentication.getComplaintCategory = function(result) {
    sql.query("SELECT * from petition_category", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getFundDeptCategory = function(result) {
    sql.query("SELECT * from fund_departments_category", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getDashboardData = function(result) {
    sql.query("SELECT COUNT(DISTINCT petition_id) AS TotalPetitions, COUNT(DISTINCT IF(petition_status = '1', petition_id, NULL)) AS Pending, COUNT(DISTINCT IF(petition_status = '2', petition_id, NULL)) AS Resolved, COUNT(DISTINCT IF(petition_status = '3', petition_id, NULL)) AS Rejected FROM petitions", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getDataPanchayatWise = function(result) {
    sql.query("SELECT panchayat_name, COUNT(*) AS TotalPanchayatPetitions, COUNT(DISTINCT IF(petition_status = '1', petition_id, NULL)) AS Pending, COUNT(DISTINCT IF(petition_status = '2', petition_id, NULL)) AS Solved, COUNT(DISTINCT IF(petition_status = '3', petition_id, NULL)) AS Rejected FROM petitions GROUP BY panchayat_name ORDER BY COUNT(*) DESC LIMIT 7", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getDataDepartmentWise = function(result) {
    sql.query("SELECT department, COUNT(*) AS TotalDepartmentPetitions, COUNT(DISTINCT IF(petition_status = '1', petition_id, NULL)) AS Pending, COUNT(DISTINCT IF(petition_status = '2', petition_id, NULL)) AS Solved, COUNT(DISTINCT IF(petition_status = '3', petition_id, NULL)) AS Rejected FROM petitions GROUP BY department ORDER BY COUNT(*) DESC LIMIT 7", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getPanchayatDetails = function(result) {
    sql.query("SELECT * from panchayat_details", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getPanchayatPetions = function(result) {
    sql.query("SELECT panchayat_name, COUNT(*) AS TotalPanchayatPetitions FROM petitions GROUP BY panchayat_name ORDER BY COUNT(*) DESC LIMIT 7", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getDepartmentPetions = function(result) {
    sql.query("SELECT department, COUNT(*) AS TotalDepartmentPetitions FROM petitions GROUP BY department ORDER BY COUNT(*) DESC LIMIT 7", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getDepartmentFundUtilization = function(result) {
    sql.query("SELECT fund_dept,SUM(mla_fund) AS total_dept_fund FROM mla_funds GROUP BY fund_dept ORDER BY COUNT(*) DESC LIMIT 10", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getPanchayatFundUtilization = function(result) {
    sql.query("SELECT panchayat_name,SUM(mla_fund) AS total_panchayat_fund FROM mla_funds GROUP BY panchayat_name ORDER BY total_panchayat_fund DESC LIMIT 10", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

Authentication.getPanchayatLowFundUtilization = function(result) {
    sql.query("SELECT panchayat_name,SUM(mla_fund) AS total_panchayat_fund FROM mla_funds GROUP BY panchayat_name ORDER BY total_panchayat_fund ASC LIMIT 10", function(err, res) {
        if (err) {
            result(null, err);
        } else {
            result(null, res);
        }
    });
}

module.exports = Authentication;