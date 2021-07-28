const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb+srv://pyuuunah:mooA2JUb1jDeuroi@cluster0.c5bhl.mongodb.net/grades?retryWrites=true&w=majority";
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("grades");
    app.get("/", function (req, res) {
      res.sendFile(__dirname + "/index.html");
    });
    app.get("/download", function (req, res) {
      const students = db.collection("students");
      const { schoolname } = req.query;
      const filename = __dirname + "/report.csv";

      // use regexp for case insensitivity
      students
        .find({ schoolName: { $regex: new RegExp(schoolname, "i") } })
        .toArray()
        .then((results) => {
          let studentObj = [
            ["School", "Student", "Grade"],
            ...results.map((item) => [
              item.schoolName,
              item.studentName,
              item.studentGrade,
            ]),
          ];
          // choose another string to temporally replace commas if necessary
          let stringToReplaceComas = "!@!@";

          studentObj = studentObj.map((singleRow) =>
            singleRow.map((value) =>
              value.toString().replace(/,/g, stringToReplaceComas)
            )
          );
          let csv = `"${studentObj.join('"\n"').replace(/,/g, '","')}"`;
          const fs = require("fs");
          fs.writeFile(filename, csv, (err) => {
            if (err) {
              console.error(err);
              return;
            }
            res.download(filename);
          });
        })
        .catch((error) => console.error(error));
    });

    app.listen(3002, function () {
      console.log("listening on 3002");
    });
  })
  .catch((error) => console.error(error));
