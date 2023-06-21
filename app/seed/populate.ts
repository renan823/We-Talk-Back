import users from "./user.seed";
import languages from "./language.seed";

export default () => {
    users.up();
    languages.up();
}