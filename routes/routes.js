const express = require("express");
const { createInvoice, getAllInvoices, manualUserMailer } = require("../controller/invoiceController");
const router= express.Router();

router.post("/invoice/create",createInvoice);
router.get("/invoice/all",getAllInvoices);  
router.get('/getEmail',manualUserMailer);



module.exports = router;