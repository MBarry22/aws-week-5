import express from 'express'
import bcrypt from 'bcrypt'
import * as database from '../backend/database.js'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())


// Custom jwt middleware function
function authorize(req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader ? authHeader.split(' ')[1] : null

  if (!token) {
    console.error("no token sent to server")
    res.status(401).send({error: "no token sent to server"})
    return 
  }

  let decoded
  try {
    decoded = jwt.verify(token, "shhhhh");
  } catch(error) {
    console.error(error)
    res.status(403).send({error: "Invalid Token"})
    return
  }

  req.user = decoded
  next()
}




// Post Login
app.post("/api/login", async (req, res) => {
  console.log("sign in", req.body)
  const {email, password} = req.body
  
  // Get user from db 
  const user = await database.getUserWithEmail(email)
  console.log(user)
 // getting hashed password 
  const hashedPassword = user.password
  //comparing password to hashed password 
  const same = await bcrypt.compare(password, hashedPassword)
  
// if email or password are not valid send 400 Bad Request missing fields
  if(!email || !password){
   return  res.status(400).send({status: "error", message: "missing fields"})
  }

  // if passwords are not same send 400 Bad Request invalid password
 if (!same){
  return res.status(400).send({status: "error", message: "invalid password"})
 }
 //JWT token
 const token = jwt.sign(
  {
    sub: user.id,
    email: user.email,
    displayName: user.displayName,
    profileImage: user.profileImage,
  },
  //secret (if used in production obv change to a secure one)
  "shhhhh",
  {expiresIn: "10000000000000000s"}
);

  res.send({status: "ok", token})
})

// Post Signup 
app.post("/api/signup", async (req, res) => {
  const {email, password, displayName} = req.body
  console.log("sign up", req.body)
  
// salt and hash password
  const salt = await bcrypt.genSalt(13)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user with hashed / salted password
  const results = await database.createUser({email, password: hashedPassword, displayName})
  console.log(results)
  res.send({status: "ok"})
})


// Update Display Name
app.put("/api/users/displayName", authorize, async  (req, res) => {
  // verify user is logged in 

  const {displayName} = req.body

  const userId = req.user.sub
  console.log("user Info Before:", req.user)
  
  // update user display name in database
  await database.updateUserDisplayName(userId, displayName)
  console.log("user Info After:", req.user)
  
  //console.log("update displayName", displayName, userId)
  
  res.send({status: "ok"})
})

// Update Profile Image 
app.put("/api/users/:id/profileImage", async (req, res) => {
  
  const userId = req.params.id
  const {profileImage} = req.body

  await database.updateUserProfileImage(userId, profileImage)
  
  console.log("update profile image", profileImage, userId)
  res.send({status: "ok"})
})


// Listen On Port 8080

app.listen(8080, () => console.log("listening on port 8080"));