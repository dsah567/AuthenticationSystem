const register = async (req,res)=>{
    return res.send("register")
}


const login = async (req,res)=>{
    return res.send("login")
}


const resetPassword = async (req,res)=>{
    return res.send("restpassword")
}

export {register,
        login,
        resetPassword}