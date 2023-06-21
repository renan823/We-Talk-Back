import Language from "../models/language.model";

const languages = [
    {
        language: "Inglês"
    },
    {
        language: "Espanhol"
    },
    {
        language: "Francês"
    }
];


export default {
    up: () => {
        Language.bulkCreate(languages)
        .then(() => { console.log("Languages created successfully!"); })
        .catch(() => { console.log("Some error occured seeding 'language'!"); });
    }
};
