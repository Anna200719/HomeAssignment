import userService from "../services/userService.js";

export default function (app) {

    app.get('/', function (req, res) {
        res.send('Please go to /whos-there');
    });

    app.get('/whos-there', function (req, res) {
        res.send('Hi Trax! This is Anna\n')
    });

    app.get('/contacts', function(req, res){
        const allContacts = userService.getContacts();
        res.send(JSON.stringify(allContacts));
    });

    app.get('/contacts/:name', function(req, res){
        try {
            const contact = userService.getContactByName(req.params.name);
            res.send('Found contact: Name: ' + contact.name + 
            ' ' + ', Role ' + contact.role + ', Phone: '  + contact.phone)
        } catch (error) {
            res.send(error);
        }
    });
}