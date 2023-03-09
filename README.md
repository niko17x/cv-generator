# cv-generator


// Todo's: 
[] Add additional checks that validates correct data input.
    - Remember JS custom form validation? Time to re-explore?
[] Create a separate component for the buttons in Form.js.
[] Save all user input data to local storage.
[] Go through each section (i.e. GeneralInfo.js) and find a way to make the code short/proficient.
[] Compare user start dates for each component and automatically reorganize components in cv application from earliest to latest start dates.


// Completed:
[check] Allow the user to add an image to their application if they want to.
[check] When click event fires to add additional info, all existing data in the input gets wiped out.
[check] Delete button is causing info on cv application to remain - it should be deleted as well.
    - Bug => Click on add button is adding data objects to 'userInfo' state but delete button is not deleting the data object from state.
[check] Edit submit button styling.
[check] Allow user to delete additional data.
[check] Create an outline that will eventually be filled in with the data user enters in application (CV form).
[check] Once submit button has been executed, all the input elements should be cleared.
[check] Deal with correct input data types (Age: numbers only / Email: email format / etc...).
[check] Work on the logic that will allow the user to add additional info.


// Redo: