sequenceDiagram
  participant spa
  participant server
  participant form
  participant notesList

  spa ->> form: Register onSubmit event handler
  form -->> spa: Event handler for form submit

  Note over SPA: Event handler calls e.preventDefault() to prevent default form submission, 
  Note over SPA: Creates a new note from form data and adds the note to the notes list 
  Note over SPA: Redraws notes on the page and finally calls sendToServer(note) to send the new note to the server
  Note over spa:: The spa uses the Javascript code to generate the data from the server

  spa ->> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
  activate server
  server ->> spa: 201 Created
  deactivate server
  
  Note over Server: Handles the POST request, stores the note, and sends a response (201 created), which does not require that the spa reload.

  spa -->> notesList: Redraw notes on the page


  
  
  
  

  
  
  
