import Crypto from "../config/hash.config";
import User from "../models/user.model";

const users = [
    {
        name: "Asdrubal",
        password: Crypto.hash("1234"),
        biography: "Gosto da Lupita"
    },
    {
        name: "Lupita",
        password: Crypto.hash("1234"),
        biography: "Gosto da Lucrécia"
    },
    {
        name: "Lucrécia",
        password: Crypto.hash("1234"),
        biography: "Gosto do Asdrubal"
    }
]

export default {
    up: () => {
        User.bulkCreate(users, {returning: true})
        .then(() => { console.log("Users created successfully!"); })
        .catch(() => { console.log("Some error occured seeding 'user'!"); });
    }
};