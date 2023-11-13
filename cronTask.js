// cronTask.js
const cron = require('node-cron');
const { sendMailForInvoicesPastDeadline } = require('./controller/invoiceController');

const scheduledTask = () => {
  console.log('Running your scheduled task...');
  sendMailForInvoicesPastDeadline();
  // Add your task logic here
};

const startScheduledTask = () => {
  cron.schedule('0 9 * * *', scheduledTask);
};

module.exports = { startScheduledTask };
