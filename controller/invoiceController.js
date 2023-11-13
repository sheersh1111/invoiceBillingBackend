const { default: axios } = require("axios");
const Invoice = require("../model/invoiceModel");

// const mongoose= require("mongoose");

//Create Invoice
exports.createInvoice = async (req, res) => {

    // req.body.user = req.user.id;
    const invoice = await Invoice.create(req.body);// body contains userId, Blog Name, description
    return res.status(201).json({
        success: true,
        invoice
    });
};

//GET ALL BLOGS
exports.getAllInvoices = async (req, res, next) => {
    let invoices;
    if(req.query.email){
        invoices= await Invoice.find({email:req.query.email});
    }else{
        invoices= await Invoice.find();
    }

    res.status(200).json({
        success: true,
        invoices
    })
};
exports.manualUserMailer = async(req,res)=>{
    const currentDate=new Date();
    const invoices= await Invoice.find({
        email:req.query.email,
        paid:false,
        deadline:{$lt:currentDate}
    });
    invoices.forEach(async(invoice)=>{
        const dataToSend={
            to:invoice.email,
            subject: "Invoice Due",
            message:`Your due amount is <b>Rs.${invoice.amount}</b>. <p> Please pay by today. </p>`
        }
        try{
            await axios.post(process.env.ZAPIER_WEBHOOK_URL,dataToSend);
            console.log('mail sent')
        }
        catch(e){
            console.log(e);
        }
    })
    res.status(200).json({
        success: true
    })
}
exports.sendMailForInvoicesPastDeadline= async() =>{
    const currentDate=new Date();
    const invoices= await Invoice.find({
        paid:false,
        deadline:{$lt:currentDate}
    });
    invoices.forEach(async(invoice)=>{
        const dataToSend={
            to:invoice.email,
            subject: "Invoice Due",
            message:`Your due amount is Rs.${invoice.amount}. Please pay by today.`
        }
        try{
            await axios.post(process.env.ZAPIER_WEBHOOK_URL,dataToSend);
            console.log('mail sent')
        }
        catch(e){
            console.log(e);
        }
    })
}