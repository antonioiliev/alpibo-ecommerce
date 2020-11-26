import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'admin',
        email: 'antonio@alpibo.com',
        password: bcrypt.hashSync('123456789', 10),
        isAdmin: true
    },
    {
        name: 'Teodora',
        email: 'teodora@mychocolatier.bg',
        password: bcrypt.hashSync('123456789', 10),
        isAdmin: false
    }
];

export default users;