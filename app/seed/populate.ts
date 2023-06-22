import users from "./user.seed";
import languages from "./language.seed";
import chats from "./chat.seed";
import learns from "./learn.seed";
import speaks from "./speak.seed";
import messages from "./message.seed";


export default () => {
    users.up();
    languages.up();
    learns.up();
    speaks.up();
    messages.up();
    chats.up();
}