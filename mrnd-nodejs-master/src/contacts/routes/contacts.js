var fs = require('fs');
var express = require('express');
var router = express.Router();
var id = 1;
var contact_base = {}, message_base = {};


var getContactFileName = function (id) {

    // We assume contacts are stored under data sub-folder
    return './routes/data/' + id + '-Contact.json';
}

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
    /*var new_id = req.params.id;                                               //meory code starts
    console.log('id is' + new_id);
    var contact = contact_base[new_id];
    console.log('contact is'+contact);
    if ((typeof contact) == 'undefined')
    {
        var html = 'No Record found';
        res.send(html);
    }
    var payload = { "firstName": contact[0], "lastName": contact[1], "phone": contact[2] };
    res.send(payload);
    //res.send(contact);        //this ismy output*/                           //memory code ends


                    

                                                                                //file codestarts
    var new_id = req.params.id;                                                
    console.log('id is' + new_id);
    var path=getContactFileName(new_id);
    var contact;
    fs.open(path, 'r', function (err) {
        if (err) {
            res.send("Error in reading memory Invalid id");
            return;
        }
    });

    fs.readFile(path, function (err, data) {

        if (err) {
            return console.log("Runtime error in database");
        }

        try {
            //contact = JSON.parse(data);
            //console.log(JSON.parse(data.toString()));
            res.send(JSON.parse(data.toString()));
        }
        catch (e) {
            console.log(e);
        }
    });                                                       //file code ends
});

router.post('/', function (req, res, next) {
    //console.log('test');
    //console.log(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phone = req.body.phone;
    //console.log('name is ' + firstName + ',' + lastName);


    /*contact_base[id] = [firstName, lastName, phone];                  //memory code
    console.log(contact_base);*/                                        //memory code



    var path = (getContactFileName(id));                                //file codestarts

    fs.open(path, 'w', function (err) {
        if (err) {
            console.log("Error in creating new memory");
            return;
        }
    });
    fs.writeFile(path, JSON.stringify(req.body), function (err) {

        if (err) {
            return console.log("Runtime error in database");
        }
    });
                                                                        //filecode ends

    var html = 'First nameis:' + firstName + '<br>' + 'last name is:' + lastName + '<br>' + 'phone number is:' + phone+'<br>'+'<br>'+'your ID is:'+id;
    res.send(id+"");
    id++;

    //res.send(html);       //this is my output
    
});

router.put('/:id', function(req, res, next) {
    /*console.log(req.params.id);                                                                                   //meory code  starts
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
    res.send(payload);*/                                                                                                //memory code ends

                                                                                                                        //file codestarts
    var new_id = req.params.id;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var phone = req.body.phone;
    var new_id = req.params.id;
    console.log('id is' + new_id);
    var path = getContactFileName(new_id);
    var contact;
    fs.open(path, 'r', function (err) {
        if (err) {
            res,send("Invalid id please enter valid id to update");
            return;
        }
    });
    fs.readFile(path, function (err, data) {

        if (err) {
            return console.log("Runtime error in database");
        }

        try {
            //contact = JSON.parse(data);
            //console.log(JSON.parse(data.toString()));
            contact = JSON.parse(data.toString());
            if ((typeof firstName) != 'undefined')
                contact.firstName = firstName;
            if ((typeof lastName) != 'undefined')
                contact.lastName = lastName;
            if ((typeof phone) != 'undefined')
                contact.phone = phone;


            var temp_fs = require('fs');
            temp_fs.open(path, 'w', function (err) {
                if (err) {
                    res.send("Error in creating new memory");
                    return;
                }
            });
            temp_fs.writeFile(path, JSON.stringify(contact), function (err) {

                if (err) {
                    return console.log("Runtime error in database");
                }
            });
            res.send(contact);
        }
        catch (e) {
            console.log(e);
        }
    });
});

router.get('/:id/messages', function (req, res, next) {

    var new_id = req.params.id;
    var messages = message_base[new_id];

    if ((typeof messages) == 'undefined') {
        var contact = contact_base[new_id];
        if ((typeof contact) == 'undefined') {
            var html = 'Id not issued yet';
            res.send(html);
        }
        var html = 'No Messages for this id' + '<br>' + 'please enter valid id';
        res.send(html);
    }
    res.send(messages);


});


router.post('/:id/messages', function (req, res, next) {

    var new_id=req.params.id;
    var contact = contact_base[new_id];
    var new_message;
    if ((typeof contact) == 'undefined') {
        var html = 'Id not issued yet';
        res.send(html);
    }

    else {
        var messages = message_base[new_id];
        console.log(req.body);
        new_message = req.body.message;
        if ((typeof messages) == 'undefined') {

            messages = [new_message];
            message_base[new_id] = messages;
        }
        else {
            messages.push(new_message);
            message_base[new_id] = messages;
        }
        res.send(messages);
    }
    
});
module.exports = router;
