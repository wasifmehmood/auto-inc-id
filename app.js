var mongoose = require('mongoose');
const User = require('./user-model');


mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

async function createUser() {

    const user = new User({
        name: 'Mamoo',
        designation: 'Manager'
    })

    user.save().then(res => {
        console.log('User is added.................');
    });
}

createUser();

