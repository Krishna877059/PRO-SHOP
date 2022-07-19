import bcrypt from 'bcryptjs'

const users = [{
    name:'Admin USER',
    email:'admin@example.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin: true
},
{
    name:'Krishna sharma',
    email:'krishna@example.com',
    password:bcrypt.hashSync('123456',10),
},
{
    name:'Shubham sharma',
    email:'shubham@example.com',
    password:bcrypt.hashSync('123456',10),
}

]
export default users
