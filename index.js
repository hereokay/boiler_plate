const express = require('express'); // express 모듈을 가져옵니다.
const app = express(); // app을 만들어줍니다.
const port = 5000; // 포트 번호를 설정해줍니다.

app.get('/', (req, res) => res.send("Hello World!")); // 루트에서 Hello World를 출력해줍니다.

app.listen(port, () => console.log(`Example app listening on port ${port}!`))