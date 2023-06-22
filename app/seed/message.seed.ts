import Message from "../models/message.models";

const messages = [
    {
        text: "Olá meu bem!",
        status: "enviada",
        date: new Date(),
        ChatId: 1,
        UserId: 1,
    },
    {
        text: "Oiii",
        status: "enviada",
        date: new Date(),
        ChatId: 1,
        UserId: 2,
    }
];

export default {
    up: () => {
        Message.bulkCreate(messages)
        .then(() => { console.log("Messages created successfully!"); })
        .catch((err) => { console.log(err); });
    }
};
