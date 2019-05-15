const User = require('../../models/user.model');

class GetUserById {
    constructor(userId) {
        this.userId = userId;
    }
    execute() {
        return User.findById(userId);
    }
}

module.exports = GetUserById;