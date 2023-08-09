const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;
const Schema = mongoose.Schema;

// Connect to the MongoDB server
mongoose.connect('mongodb://localhost:27017/main_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Company schema
const companySchema = new Schema({
  companyName: String,
  // Other company-related fields
});

// Create the Company model
const Company = mongoose.model('Company', companySchema);

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Route to handle inserting data into the Company model and creating a separate database
app.post('/createCompany', async (req, res) => {
  const reqBody = req.body;

  try {
    // Create a new Company instance
    const newCompany = new Company(reqBody);

    // Save the company to the main database
    const savedCompany = await newCompany.save();

    // Create a separate database for the company
    const companyDbName = savedCompany.companyName.toLowerCase(); // Use lowercase for the database name
    const companyDbURI = `mongodb://localhost:27017/${companyDbName}`;

    // Connect to the separate database
    const companyDbConnection = mongoose.createConnection(companyDbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Define a schema and model for company-specific data (optional)
    const CompanySpecificSchema = new Schema({
      // Define fields specific to the company
    });

    const CompanySpecificModel = companyDbConnection.model(
      'CompanySpecific',
      CompanySpecificSchema
    );

    // You can save company-specific data in the separate database
    const companySpecificData = new CompanySpecificModel({
      // Define the data
    });

    await companySpecificData.save();

    // Close the connection to the separate database
    companyDbConnection.close();

    res.status(200).send('Company and specific data saved successfully.');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Error saving data.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});