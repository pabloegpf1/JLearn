class Student {
    constructor(data) {
        this.firstName = data.first_name;
        this.lastName = data.last_name;
        this.email = data.email;
    }

    getFirstName() {
        return this.firstName
    }

    getLastName() {
        return this.lastName
    }

    getEmail() {
        return this.email
    }

}

module.exports = Student