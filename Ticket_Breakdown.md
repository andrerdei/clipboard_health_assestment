# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

* Ticket 1: Update Agent Model and Database Schema

Description: Update the Agent model and corresponding database schema to include a new field for storing the custom id provided by Facilities.

Acceptance Criteria:

Add a new field "customId" to the Agent model.
Modify the database schema to include the "customId" field.
The "customId" field should be nullable.
Ensure that existing Agents are not affected by the schema change.
Effort Estimate: 2 hours

Implementation Details:

Update the Agent model in the codebase to include the "customId" field.
Run a database migration script to add the "customId" column to the Agents table.
Handle nullability of the "customId" field in the application code where necessary.


* Ticket 2: Update Facility User Interface

Description: Update the Facility user interface to allow Facilities to input and save custom ids for Agents they work with.

Acceptance Criteria:

Add a new input field for custom ids on the Facility user interface.
Ensure the input field is only displayed to authorized Facility users.
Validate and save the custom id input by Facilities for each Agent.
Handle validation errors and display appropriate error messages.
Effort Estimate: 4 hours

Implementation Details:

Identify the appropriate page or form in the Facility user interface to add the input field for custom ids.
Add the input field to the user interface and integrate it with the backend API.
Implement client-side validation to ensure the custom id meets any requirements.
Update the backend API to handle the custom id input and save it to the Agent record.


* Ticket 3: Update Shift Report Generation

Description: Modify the Shift report generation process to use the custom id instead of the internal database id for each Agent.

Acceptance Criteria:

Retrieve the custom id of the assigned Agent for each Shift in the report.
Use the custom id in place of the internal database id when generating the report.
Ensure that the report generation process remains accurate and efficient.
Effort Estimate: 3 hours

Implementation Details:

Identify the specific code section responsible for generating the Shift report.
Modify the code to retrieve the custom id of the assigned Agent for each Shift.
Update the report generation logic to use the custom id instead of the internal database id.
Test the report generation process to ensure the custom ids are correctly included in the generated reports.


* Ticket 4: Update Facility User Interface - Display Custom IDs in Agent Listing

Description: Update the Facility user interface to display the custom IDs of Agents in the Agent listing view.

Acceptance Criteria:

Add a new column or field in the Agent listing table/grid to display the custom IDs.
Ensure the custom IDs are retrieved from the backend API and rendered correctly.
Handle any formatting or styling requirements for the custom ID display.
Effort Estimate: 2 hours

Implementation Details:

Identify the Agent listing page or component in the Facility user interface.
Add a new column or field to the Agent listing table/grid to display the custom IDs.
Fetch the custom IDs from the backend API when retrieving the Agent data.
Integrate the custom ID data into the frontend rendering logic to display the custom IDs correctly.
Apply any necessary formatting or styling to ensure the custom IDs are displayed in a readable manner.
