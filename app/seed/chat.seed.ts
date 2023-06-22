import Chat from "../models/chat.model";

const chats = [
    {
        UserId: 1,
        otherUserId: 2
    },
    {
        UserId: 2,
        otherUserId: 3
    }

];

export default {
    up: () => {
        Chat.bulkCreate(chats, {returning: true})
        .then(() => { console.log("Chats created successfully!"); })
        .catch(() => { console.log("Some error occured seeding 'chat'!"); });
    }
};