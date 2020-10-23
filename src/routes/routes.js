import userServices from "../services/userServices.js";

export default function (app) {

    app.get('/', function (req, res) {
        res.send('Please go to /whos-there');
    });

    app.get('/whos-there', function (req, res) {
        res.send('Hi Trax! This is Anna\n')
    });

    app.get('/contacts', function(req, res){
        const allContacts = userServices.getContacts();
        res.send(JSON.stringify(allContacts));
    });
}