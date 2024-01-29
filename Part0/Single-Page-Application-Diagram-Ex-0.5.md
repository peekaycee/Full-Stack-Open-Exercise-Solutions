sequenceDiagram
    participant spa
    participant server

    spa->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>spa: 304 Not Modified
    deactivate server

    Note over spa: The server response to the spa indicates that the requested resource has not changed since the last request.
    

  
