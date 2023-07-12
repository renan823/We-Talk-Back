import Speak from "../models/speak.model";

const speaks = [
    {
        LanguageId: 1,
        UserId: 2
    },
    {
        LanguageId: 3,
        UserId: 1
    }
];


export default {
    up: () => {
        Speak.bulkCreate(speaks)
        .then(() => { console.log("Speaks created successfully!"); })
        .catch((err) => { console.log(""); });
    }
};
//"Some error occured seeding 'speak'!"
