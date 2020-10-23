export default function (app) {

    app.get('/', function (req, res) {
        res.send('Please go to /whos-there');
      });
}