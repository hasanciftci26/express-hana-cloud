const express = require("express"),
    path = require("path"),
    app = express(),
    port = 3000,
    hana = require("@sap/hana-client"),
    dotenv = require("dotenv"),
    hanaClient = hana.createConnection();

dotenv.config();

const hanaConnConfig = {
    serverNode: process.env.HANA_SERVER_NODE,
    uid: process.env.HANA_UID,
    pwd: process.env.HANA_PASSWORD,
    encrypt: true,
    sslValidateCertificate: false
};

app.use(express.static(path.join(__dirname, "public")));
app.use("/additional", express.static(path.join(__dirname, "pages")));

app.get("/customerEngagements", (req, res, next) => {
    const dbQuery = "SELECT * FROM 2BAC7ED25F8E411CA06DC3D079939CF6.CUSTOMERENGAGEMENTS";
    hanaClient.connect(hanaConnConfig);
    let result = hanaClient.exec(dbQuery);
    hanaClient.disconnect();
    res.send(result[0]);
});

app.all("/all", (req, res, next) => {
    res.send("all");
})

app.get("/user", (req, res, next) => {
    next();
});

app.get("/ab?cd", (req, res) => {
    res.send("ab?cd");
});

app.get(/.*fly$/, (req, res) => {
    res.send("fly matched");
});

app.get("/user", (req, res) => {
    res.send("Hello World2!");
});

app.post("/user", (req, res) => {
    res.send("Got a POST request");
});

app.put("/user", (req, res) => {
    res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
    res.send("Got a DELETE request at /user");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Directory = ${__dirname}`);
});