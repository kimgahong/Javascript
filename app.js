const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/main", (req, res) => {
    res.sendFile(__dirname + "/main.html")
})

app.get("/home/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/guestbook/", (req, res) => {
    res.sendFile(__dirname + "/guestbook.html")
})

app.use((req,res) => {
    res.sendFile(__dirname + "/404.html");
})

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
}); //port : 3000 


//__dirname : 현재 실행 중인 코드의 폴더 경로
//__filename : 현재 실행 중인 코드의 파일 경로
// 미들웨어 : 요청과 응답 정보를 받아 처리하는 하나의 함수(콜백함수), 서버의 요청이 들어오면 가장 먼저 생성된 미들웨어를 거치게됨