var express=require("express"),app=express();app.set("views","./views"),app.set("view engine","pug"),app.use(express.static("dist")),app.listen(process.env.PORT||3e3,function(){console.log("server listening on port 3000")});
//# sourceMappingURL=index.js.map