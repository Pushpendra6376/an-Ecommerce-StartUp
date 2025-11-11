const getUser = (req,res)=>{
    res.send("Fetching all users");
}

const getuserById = (req,res)=>{
    res.send(`Fetching user with ID: ${req.params.id}`);
}

const addUser = (req,res)=>{
    res.send("Adding a new user");
}

module.exports = {
    getUser,
    getuserById,
    addUser
}