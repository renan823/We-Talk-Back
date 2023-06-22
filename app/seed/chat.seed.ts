import Chat from "../models/chat.model";

const chats = [
    {
        UserId: 1,
        otherUserId: 2

    }
];



export default {
    up: () => {
        Chat.bulkCreate(chats, {returning: true})
        .then(() => { console.log("Users created successfully!"); })
        .catch(() => { console.log("Some error occured seeding 'user'!"); });
    }
};