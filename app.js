const XMLHttpRequest = require('xhr2');
const http = require(`http`)
const fs = require(`fs`)
let xhr = new XMLHttpRequest()
// console.dir(xhr)
const https = require('https')
// console.log(https)

let apiKey = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDA1Mjg1NjQifQ.OVaDZZp4wwS1EpDMDlNUvAUgGSfXNbTXYUbMiqd-NGbaj5MeVzJaSVBwdr68MAU-Fg1_muH13MmMer6qgE8JL4NLciG_4hXg0gXOprZ-dc9nxMQ9zdkzgetRVKz1Pw2AUFgDP342Wolms5GdH9i97C-gcYm9EdnJQKj5FNcm0iycT1qxuJH8yPhD5Uew4wgeUEkFo1PSjbsX4f29Sy2xO2cj9lnPQI4ArPDyCL4cP41yxXR3rJ2Kx0B-egydyQfiCaCTuliqunx2JDAh9kJMZ_GmehkzBJ6eMAcEt9hSN6QhYrbql6c8Nne1tCpmFgph09oguOGzUAQu-pQKA5-DIQ`

console.log(xhr.status)

xhr.open('GET', 'https://developer-lostark.game.onstove.com/news/notices?type=%EC%83%81%EC%A0%90',true)
xhr.setRequestHeader('accept','application/json')
xhr.setRequestHeader('authorization', `bearer ${apiKey}`);
xhr.send()
xhr.addEventListener(`load`, ()=>{
  if(xhr.status === 200){
    console.log(xhr.responseText)
    console.dir(xhr.responseText)
    console.log(typeof(xhr.responseText))
    console.log(typeof(xhr.response)) // ? 직렬화 된 값이 들어옴 === json 데이터 란 뜻.
    console.log(xhr.response)
    console.dir(xhr.response)

    //todo 파일 이름을 더 동적으로 해야 함.
    //todo 크롤링 할거면 규칙이 필요함
    //todo 파일 이름을 작성하기 위한 어떠한 규칙을 만들어야 함. 해당 규칙은 API 서버에서 보내주는 것을 활용할 수 있나?


    //todo 전달받은 데이터를 데이터베이스 서버로 보내야 함.
        

    let container = JSON.parse(xhr.responseText)
    fs.writeFile(`testdata.json`,JSON.stringify(container,null,2),(err)=>{ // ! conflict!!!!!! 이 행동은 API 서버에 요청을 보내는 애가 하면 안됨
      if(err){
        throw new Error('invalid data')
      }
    })


  }

  console.log(xhr.status)
})


let server = http.createServer((req,res)=>{

})