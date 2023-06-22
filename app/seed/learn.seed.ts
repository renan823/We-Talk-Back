import Learn from "../models/learn.model";

const learns = [
    {
        LanguageId: 1,
        UserId: 1
    },
    {
        LanguageId: 2,
        UserId: 1
    }
];


export default {
    up: () => {
        Learn.bulkCreate(learns)
        .then(() => { console.log("Learns created successfully!"); })
        .catch((err) => { console.log(""); });
    }
};
//"Some error occured seeding 'learn'!"