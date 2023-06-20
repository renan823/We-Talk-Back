import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync();

class Crypto {
    public static hash = (password: string) => {
        let hash = bcrypt.hashSync(password, salt);
        return hash;
    }

    public static compare = (password: string, hash: string) => {
        let result = bcrypt.compareSync(password, hash);
        return result;
    }
}

export default Crypto;