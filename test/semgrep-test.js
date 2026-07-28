const jwt = require("jsonwebtoken");
const session = require("express-session");

/*
=========================================
Rule 1
=========================================
*/

eval(userInput);        // ❌ Should trigger

new Function(code);     // ❌ Should trigger

// nosemgrep
eval("2 + 2");          // ✅ Ignored intentionally

/*
=========================================
Rule 2
=========================================
*/

jwt.sign(payload, "mysecret");     // ❌ Should trigger

jwt.verify(token, "mysecret");     // ❌ Should trigger

/*
=========================================
Rule 3
=========================================
*/

session({

    secret: "SuperSecret123",

    resave: false,

    saveUninitialized: true

});