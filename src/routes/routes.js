export default function (app) {

    app.get('/', function (req, res) {
        res.send('Please go to /whos-there');
    });

    app.get('/whos-there', function (req, res) {
        res.send('Hi Trax! This is Anna\n')
    });
}