import users from "./user.seed";
import languages from "./language.seed";
import chats from "./chat.seed";

export default () => {
    users.up();
    languages.up();
    chats.up();
}