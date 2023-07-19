const mongoose = require('mongoose');


//mongoose schema
const PrototypSchema = mongoose.Schema(
    {
        Name: {
            type: String, require: [true, 'Veuillez renseigner votre nom et prénom svp']
        },

        Email: {
            type: String, require: [true, 'Veuillez renseigner votre E-mail svp']
        },
        Tel: Number,
        Age: Number,
    });

const Person = new mongoose.model('Person', PrototypSchema)

const p = new Person({
    Name: 'Youssouf Mbechezi',
    Email: 'mbechezi@yahoo.fr',
    Tel: '2693203020',
    Age: 63,

},
)

p.save();

//create a nothers persons
Person.create([
    {
        Name: 'Fatima Ibrahim',
        Email: 'ibrahim@yahoo.fr',
        Tel: '2693202030',
        Age: 60,
    },

    {
        Name: 'Fatima Mkoufoundi',
        Email: 'mkoufoundi@yahoo.fr',
        Tel: '2693204130',
        Age: 65,
    },
]
);

module.exports = mongoose.model('Person', PrototypSchema);


