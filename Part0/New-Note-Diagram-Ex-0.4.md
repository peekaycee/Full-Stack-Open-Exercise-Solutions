sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 Found [Reload]
    deactivate server

    Note right of browser: The browser is required to do a new HTTP GET request to the address (https://studies.cs.helsinki.fi/exampleapp/notes), hence reloads.
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML Document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The execution of the JavaScript code that fetches the JSON from the server begins

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTTPs Protocols", "date": "2024-1-29" }, ... ]
    deactivate server

    Note right of browser: The callback function that renders the notes is executed by the browser
