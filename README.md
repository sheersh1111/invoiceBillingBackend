# Invoice Billing Backend

## Project Setup

1. Initialize the project:

   ```bash

   npm init
   
npm install

npm run dev

# Scheduling Process Automation

The project uses node-cron for scheduling tasks. Check the cronTask.js file for details. Process automation, such as sending emails, is handled in the invoiceController.js file.

# Database Configuration

For testing with your own MongoDB Atlas cluster, update the connection link in the .env file.

# Zapier Integration
Zapier is used for custom email notifications to users. Follow these steps:
1. Create a new Zap in Zapier.
2. Generate a custom webhook as a trigger.
3. Set up an email action in Zapier.
4. Customize the email content, including HTML templating, in the invoiceController.js file.

Feel free to explore and modify the code based on your requirements. If you have any questions, please refer to the project documentation or reach out for assistance.
