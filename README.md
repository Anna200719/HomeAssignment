# Home Assignment
Basic node.js server

<b>Steps to run: </b>
1. clone this repository
2. cd src/
3. npm install
4. npm start (starts nodejs server)

Please open http://localhost:8000/ (your server is running on port 8000 and you can change it in app.js if you want)

<b>Routes:</b>

<ol>
  <li>http://localhost:8000/whos-there : 
  
  This route provides response with <i> Hi Trax! This is MY_NAME </i>

  </li>
  <li>http://localhost:8000/contacts

  This route gets all contacts in the system.
  </li>
  
  <li>http://localhost:8000/contacts/SEARCH_NAME
  
  This route gets contact by name and error if contact with this name doesn't exist. 

  </li>
    <li>http://localhost:8000/contact/
    
  In order to add a new contact now we need to use POST method. 
  
  Please use Postman or similar application.
  
  <b> Steps to reproduce using Postman: </b>
  
  Step 1: Click a new tab to create a new request.

  Step 2: In the new tab
  Set your HTTP request to POST.
  Input this link in request url: http://localhost:8000/contact

  Step 3: Switch to the Body tab. Click on raw in this tab and select JSON format. 
  
  Step 4: Add contact data in appropriate format, please see the structure of the object in loaders.js file
  
  For example: {"name":"Tom","role":"test role","phone":"test phone"})
  
  Step 5: Click Send and observe the response message. 
  
  </li>
</ol> 


  
  
