# invoiceBillingBackend
# These are steps to configure

 npm init
 
 npm i
 
 npm run dev
# For creating invoices
 1. Go to Postman
 2. Do a post request at http//localhost:4000/invoice/create
 3. json body will look like:
    {
    "email":"xckdk@gmail.com",
    "amount":120,
    "deadline":{
    "$date":"2023-10-01T09:00:00.000+00:00"
    },
    "paid":false
    }
# Scheduling of Process Automation at morning 9 am
 Using node-cron
 You can view file cronTask.js and mail function in invoiceController.js

# For testing with your own DB you can change the link to your own invoice cluster of mongoDB Atlas in .env file.

# Zapier 
I have used Zapier for custom mail to user. You can go to zapier and create a new Zap and generate a custom web hook in the zap which will act as a trigger and do the email action. 

You can also give html templating in message you are providing as you will see in my mail function in invoiceController.js


