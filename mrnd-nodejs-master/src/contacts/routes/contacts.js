var express = require('express');
var router = express.Router();
var id = 1;
var contact_base = {};

router.get('/', function (req, res, next) {
    //res.send('contacts you need to enter with proper data');
    var html = '<form action="/contacts" method="post">' +
               'Enter your fist name:' +
               '<input type="text" name="firstName" placeholder="..." />' +
               '<br>' +
               '<br>'+
               'Enter your lastname:' +
               '<input type="text" name="lastName" placeholder="..." />' +
               '<br>' +
               '<br>'+
               'Enter your phone number' +
               '<input type="text" name="phone" placeholder="..." />' +
               '<br>'+
               '<button type="submit">Submit</button>' +
            '</form>';
    res.send(html);
});
/* GET contacts */
router.get('/:id', function (req, res, next) {
    console.log(req.params.id);
    var new_id = req.params.id;
    console.log('id is' + new_id);
    var contact = contact_base[new_id];
    console.log('contact is'+contact)
    if ((typeof contact) == 'undefined')
    {
        var html = 'No Record found';
        res.send(html);
    }
    //res.send(contact);        //this ismy output

    /*hereon testcasse purpose*/

    var payload = { "firstName": contact[0], "lastName": contact[1], "phone": contact[2] };
    res.send(payload);
});

router.post('/', function (req, res, next) {
    //console.log('test');
    //console.log(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phone = req.body.phone;
    //console.log('name is ' + firstName + ',' + lastName);
    contact_base[id] = [firstName, lastName, phone];
    console.log(contact_base);
    var html = 'First nameis:' + firstName + '<br>' + 'last name is:' + lastName + '<br>' + 'phone number is:' + phone+'<br>'+'<br>'+'your ID is:'+id;
    res.send(id+"");
    id++;
    //res.send(html);       //this is my output
    
});

router.put('/:id', function(req, res, next) {
    console.log(req.params.id);
    var new_id = req.params.id;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phone = req.body.phone;
    console.log('id is' + new_id);
    var contact = contact_base[new_id];
    console.log('contact is' + contact)
    if ((typeof contact) == 'undefined') {
        var html = 'No Record found'+'<br>'+'please enter valid id to update';
        res.send(html);
    }
    if ((typeof firstName) != 'undefined')
        contact[0] = firstName;
    if ((typeof lastName) != 'undefined')
        contact[1] = lastName;
    if ((typeof phone) != 'undefined')
        contact[2] = phone;
    contact_base[new_id] = contact;
    //res.send('Sucessfully updated' + '<br>' + contact);   //this is my output
    var payload = { "firstName": contact[0], "lastName": contact[1], "phone": contact[2] };
    res.send(payload);
});

module.exports = router;
