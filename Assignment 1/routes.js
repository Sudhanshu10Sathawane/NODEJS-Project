const fs=require('fs');
const requesthandler=(req,res)=>{
    const url=req.url;
    const method= req.method;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body><h1>Hii Welcome to Node.js team</h1></body');
        res.write('<body><h1>Username</h1></body');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="User"><button type="submit">Submit</button></form></body');
        res.write('</html>');
        return res.end();
    }
    if(url==="/create-user" && method==="POST"){
        const body=[]
        req.on('data',(chunck)=>{
            body.push(chunck);
        })
        req.on('end',()=>{
            const username=Buffer.concat(body).toString();
            const message=username.split('=')[1];
            console.log(message);
        })
        return res.end();
    }
    if(url==='/users' ){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><ul><li>Mark</li><li>Rahul</li><li>Yugal</li></ul></body');
        res.write('</html>');
        return res.end();
    }
    // res.setHeader['Content-Type', 'text/html'];
    // res.write('<html>');
    // res.write('<head><title> My First Page</title></head>');
    // res.write('<body><h1> Hello from my node.js server!</h1></body');
    // res.write('</html>');
    res.end();
};
module.exports=requesthandler;