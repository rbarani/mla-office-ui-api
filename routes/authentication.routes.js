const express = require('express');
const router = express.Router();
const authentication = require("../controller/authentication.controller");


router.get('/', authentication.findAll);
router.post('/create', authentication.create);
router.post('/login', authentication.login);
router.put('/update/:id', authentication.update);

router.get('/retrive/:id', authentication.getById);
router.get('/mla-fund/retrive/:id', authentication.getMlaFundById);

router.delete('/delete/:id', authentication.deleteUser);

router.post('/petitions/create', authentication.createPetitions);
router.post('/panchayat-details/create', authentication.createPanchayat);
router.post('/mla-fund/create', authentication.createMlaFunds);

router.put('/petitions/update/:id', authentication.updatePetitions);
router.put('/panchayat-details/update/:id', authentication.updatePanchayat);
router.put('/mla-fund/update/:id', authentication.updateMlaFunds);

router.get('/petitions', authentication.petitionsList);
router.get('/mla-funds', authentication.getMlaFunds);
router.get('/panchayat-details', authentication.getPanchayatDetails);
router.get('/complaint-category', authentication.getComplaintCategory);
router.get('/union-panchayat-lists', authentication.getUnionAndPanchayat);
router.get('/fund-dept-category', authentication.getFundDeptCategory);


router.get('/dashboard-data', authentication.getDashboardData);
router.get('/dashboard-department-petitions', authentication.getDepartmentPetions);
router.get('/dashboard-panchayat-petitions', authentication.getPanchayatPetions);
router.get('/dashboard-panchayat-wise-total', authentication.getDataPanchayatWise);
router.get('/dashboard-department-wise-total', authentication.getDataDepartmentWise);
router.get('/dashboard-department-fund-utilization', authentication.getDepartmentFundUtilization);
router.get('/dashboard-panchayat-fund-utilization', authentication.getPanchayatFundUtilization);
router.get('/dashboard-panchayat-low-fund-utilization', authentication.getPanchayatLowFundUtilization);



module.exports = router;