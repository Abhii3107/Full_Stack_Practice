# Authetication AND  Authorization

**Authetication** - who the user is
**Authorization** - what can user access (Grant a access)

**without session** 
- server and browser
1. browser send a request for something , server validate and grant access

2. browser again send a request for any other work , this sometime server forget who the user is , again ask to authenctiate itself(login)

- thats why session and cookie concept is used

**with session and cookies**
 1. on first request server eject a cookie(ex-string) in browser

2. 2nd time , when request send by browser , a string is attached with request , and server understand this is valid user (and its one session) 

-------------------------------------------
**3 steps**

1. how to set cookie - res.send("name" , "Abhay"); -   ("key" ,"Value")
2. how to use bcrypt for password encryption and decryption

3. what is jwt and how we can store a data in jwt and how extract a data from jwt 


## JWT

🔑 What is JWT?

JWT = JSON Web Token
It’s just a long string (looks like gibberish) that encodes who the user is and is signed so no one can tamper with it.

Example JWT looks like this:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJpZCI6IjEyMyIsIm5hbWUiOiJBYmhh
eSIsImlhdCI6MTY5MjM0NTY3OCwiZXhwI
joxNjkyMzQ5Mjc4fQ
.CZk4L3oU6q0lP9SKuVHyQgxM5f0DHL0KmP0h5cHqJXk


It has 3 parts:

Header → says the algorithm & type (HS256, JWT)

Payload → the actual data (like id, email)

Signature → proves the token is valid & not modified

⚙️ How it Works (Flow)
1. User logs in

User sends username + password to the server.

Server checks password against the database (maybe using bcrypt).

If correct, server generates a JWT and sends it back.

const jwt = require("jsonwebtoken");
const token = jwt.sign(
  { id: user._id, name: user.name },  // payload
  "mySecretKey",                      // secret key
  { expiresIn: "1h" }                 // token expiry
);
res.json({ token });

2. Client stores the JWT

Usually in localStorage, sessionStorage, or as a cookie.

Client now sends this token with every request (usually in the Authorization header):

Authorization: Bearer <token>

3. Server verifies the JWT

On each request, server checks the token:

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, "mySecretKey", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // decoded payload
    next();
  });
}


Now only logged-in users can access protected routes.

4. Token expires

JWTs usually expire (e.g., 1h).

When expired, the client must log in again or use a refresh token.

✅ Key Benefits

Stateless → Server doesn’t need to remember sessions.

Portable → Can be used across different servers/services.

Secure → Data is signed (can’t be modified without the secret key).

👉 In short:

Login → Get JWT

Store JWT → Send with every request

Server verifies JWT → Grants or denies access

