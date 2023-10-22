# JWT
An cli based jwt testing lab to learn about how JWT token works for Authorization and session handling

## Installation:

```bash

git clone https://github.com/sanjai-AK47/JWT.git
cd JWT
npm install express
npm install jsonwebtoken
```


## How to do attack for previlage escalation:

### Server.js:

Run the server.js or and server1.js for basic jwt token manipulation and escalation attack with using [jwt.io](https://jwt.io)
```bash
cd JWT
node server.js or server1.js
```

Now make a curl request with curl as user and make previlage escalation from user to admin

```bash
curl -X POST -H "Content-Type: application/json" -d '{"username":"user","password":"user"}' http://localhost:8080/login

```

Now you get the authentication toke make a request to dashboard

```bash
curl -H "Authorization: Bearer {YOUR JWT TOKEN}" http://localhost:8080/dashboard
```

You can see that you have logined as normal user in dashboard

## Exploitation and solution:

Now its time to think like a hacker and made previlage escalation with using tools `hashat` and `jwt_tool` to exploit this previlage escation attack
and the solution are not mentioned here because try for this attack and do something to exploit this. If anyone found the exploitation or to discuss
about the exploitation you can go to discussion side and discuss with others

## Information
The both server.js and server1.js has different exploitation so do both and analyse it





