// ==================== Enums in TS ================

enum role {
    user = "user",
    admin = "admin"
}

type userDetails = {
    name ?: string ,
    email : string,
    password : string
    role : role
}


const user1 : userDetails ={
    name : "kush",
    email : "kush@gmail.com",
    password : "123",
    role : role.user
}

const user2 : userDetails ={
    name : "admin",
    email : "admin@gmail.com",
    password : "123",
    role : role.admin
}



const  isAdmin = (user : userDetails)=>{
    if(user.role === role.admin){
       console.log("admin");
    }
    else{
        console.log("user");
    }
}

isAdmin(user1);
isAdmin(user2);