class User {
    id = null;
    firstName = '';
    lastName = '';
    email = '';
    phonenumber = '';
    password = '';

    constructor(id, firstName, lastName, email, phonenumber, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phonenumber = phonenumber;
        this.password = password;
    }
}

module.exports = User;