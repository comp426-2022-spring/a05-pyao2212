[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7692558&assignment_repo_type=AssignmentRepo)
# a05 Human Interface

In this assignment, you will build an HTML human interface for your API. You will also document your API endpoints and consider package structure.

## DO NOT CLONE THIS REPOSITORY DIRECTLY

Use the GitHub classroom link instead: https://classroom.github.com/a/PUVGxeMe

If you clone this repo directly, it will not be added to the organization as an individual repo associated with your account and you will not be able to push to it.

## Instructions

Full instructions for this assignment are available at: https://comp426.johndmart.in/a/05/

<!-- DELETE EVERYTHING ABOVE THIS LINE -->

# Coinserver Description

This package exposes endpoints and provides a web interface to emulate random chance coin flip events in the following ways:

1. Flip one coin - returns result of a coin flip
2. Flip many coins - returns the results of many coin flips with a summary
3. Guess a coin flip and - returns the result of a flip and guess match

# Coinserver Installation

Run `npm install` inside the package root directory.

This package was buid using Node.js LTS (16.x).
Other package dependency and version information can be found in `package.json`.

# Coinserver Runtime Documentation
```
node server.js [options]

--port, -p	Set the port number for the server to listen on. Must be an integer
            between 1 and 65535. Defaults to 5000.

--debug, -d If set to true, creates endlpoints /app/log/access/ which returns
            a JSON access log from the database and /app/error which throws 
            an error with the message "Error test successful." Defaults to 
            false.

--log, -l   If set to false, no log files are written. Defaults to true.
            Logs are always written to database.

--help, -h	Return this message and exit.
```

# Coinserver API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/
```

#### Response body

```
{"message":"Your API works! (200)"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 07 Apr 2022 15:07:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/
```

#### Response body

```
{"flip":"tails"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 16
ETag: W/"10-N9e0DDykqBPnqphc8f4bzHcjsuM"
Date: Wed, 27 Apr 2022 00:40:13 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flips/:number/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flips/3
```

#### Response body

```
{"raw":["tails","tails","heads"],"summary":{"tails":2,"heads":1}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 65
ETag: W/"41-xFD5mLTl1U2bxcpTr2yjO1m6UQg"
Date: Wed, 27 Apr 2022 00:41:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coin/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/coin
```

#### Response body

```
{"flip":"tails"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 16
ETag: W/"10-N9e0DDykqBPnqphc8f4bzHcjsuM"
Date: Wed, 27 Apr 2022 00:43:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/call/:guess/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/flip/call/heads
```

#### Response body

```
{"call":"heads","flip":"heads","result":"win"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Wed, 27 Apr 2022 00:44:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/call/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"guess":"heads"}' http://localhost:5000/app/flip/call/
```

#### Response body

```
{"call":"heads","flip":"heads","result":"win"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/flip/coins/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"number":"30"}' http://localhost:5000/app/flip/coins/
```

#### Response body

```
{"raw":["heads","heads","heads","tails","heads","heads","tails","tails","tails","heads","heads","heads","heads","heads","heads","tails","tails","heads","heads","heads","heads","heads","heads","heads","tails","heads","tails","heads","tails","heads"],"summary":{"heads":21,"tails":9}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/log/access/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/log/access
```

#### Response body

```
[{"id":1,"remoteaddr":"::1","remoteuser":null,"time":"1651007114811.0","method":"GET","url":"/app","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"id":2,"remoteaddr":"::1","remoteuser":null,"time":"1651007115069.0","method":"GET","url":"/favicon.ico","protocol":"http","httpversion":"1.1","status":"200.0","referer":"http://localhost:5555/app","useragent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"id":3,"remoteaddr":"::1","remoteuser":null,"time":"1651007125344.0","method":"GET","url":"/app/get","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"id":4,"remoteaddr":"::1","remoteuser":null,"time":"1651007143959.0","method":"GET","url":"/app/flip/call/heads","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"id":5,"remoteaddr":"::1","remoteuser":null,"time":"1651009067067.0","method":"GET","url":"/index","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 
(KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"id":6,"remoteaddr":"::1","remoteuser":null,"time":"1651009117813.0","method":"GET","url":"/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"},{"id":7,"remoteaddr":"::1","remoteuser":null,"time":"1651009320423.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.19041.1645"},{"id":8,"remoteaddr":"::1","remoteuser":null,"time":"1651009558518.0","method":"POST","url":"/app/flip/coins/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":9,"remoteaddr":"::1","remoteuser":null,"time":"1651009771606.0","method":"POST","url":"/app/flip/call/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":10,"remoteaddr":"::1","remoteuser":null,"time":"1651009803794.0","method":"POST","url":"/app/flip/coins/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":11,"remoteaddr":"::1","remoteuser":null,"time":"1651009970397.0","method":"POST","url":"/app/flip/call/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":12,"remoteaddr":"::1","remoteuser":null,"time":"1651009978437.0","method":"POST","url":"/app/flip/coins/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":13,"remoteaddr":"::1","remoteuser":null,"time":"1651010117345.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":14,"remoteaddr":"::1","remoteuser":null,"time":"1651010157579.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":15,"remoteaddr":"::1","remoteuser":null,"time":"1651010171586.0","method":"GET","url":"/app/flip","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":16,"remoteaddr":"::1","remoteuser":null,"time":"1651010256115.0","method":"GET","url":"/app/flip","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":17,"remoteaddr":"::1","remoteuser":null,"time":"1651010317892.0","method":"GET","url":"/app/flips/4","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":18,"remoteaddr":"::1","remoteuser":null,"time":"1651010428275.0","method":"GET","url":"/app/flip/coin","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":19,"remoteaddr":"::1","remoteuser":null,"time":"1651010528449.0","method":"GET","url":"/app/log/access","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":20,"remoteaddr":"::1","remoteuser":null,"time":"1651010638206.0","method":"GET","url":"/app/log/error","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":21,"remoteaddr":"::1","remoteuser":null,"time":"1651019871024.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":22,"remoteaddr":"::1","remoteuser":null,"time":"1651019964231.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":23,"remoteaddr":"::1","remoteuser":null,"time":"1651019973101.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":24,"remoteaddr":"::1","remoteuser":null,"time":"1651019987529.0","method":"GET","url":"/app/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":25,"remoteaddr":"::1","remoteuser":null,"time":"1651020013499.0","method":"GET","url":"/app/flip/","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":26,"remoteaddr":"::1","remoteuser":null,"time":"1651020113064.0","method":"GET","url":"/app/flips/3","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":27,"remoteaddr":"::1","remoteuser":null,"time":"1651020177810.0","method":"GET","url":"/app/flip/coin","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":28,"remoteaddr":"::1","remoteuser":null,"time":"1651020230869.0","method":"GET","url":"/app/flip/coin","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":29,"remoteaddr":"::1","remoteuser":null,"time":"1651020279640.0","method":"GET","url":"/app/flip/call/heads","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"},{"id":30,"remoteaddr":"::1","remoteuser":null,"time":"1651020393760.0","method":"GET","url":"/app/log/access","protocol":"http","httpversion":"1.1","status":"200.0","referer":null,"useragent":"curl/7.77.0"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 6802
ETag: W/"1a92-BahIlszTmTgU3/rCJJLBCYslfBs"
Date: Wed, 27 Apr 2022 00:46:33 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
### /app/log/error/ (GET)

_Not yet implemented_

#### Request cURL

```
curl http://localhost:5000/app/log/error
```

#### Response body

```
[{"id": 1, "error-type": "404", "time":"1651007114811.0"}, {"id": 2, "error-type": "500", "time":"1651007114932.0"}]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 6802
ETag: W/"1a92-BahIlszTmTgU3/rCJJLBCYslfBs"
Date: Wed, 27 Apr 2022 00:46:33 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/login/ (POST)

_Not yet implemented_

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username":"user123", "password": "abc123"}' http://localhost:5000/app/login/
```

#### Response body

```
{"status": 200, "user-id": 2}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/new/ (POST)

_Not yet implemented_

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username":"user123", "password": "abc123", "email": "abc@gmail.com"}' http://localhost:5000/app/create_user/
```

#### Response body

```
{"status": 200, "message": "Successfully created user!"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/update/ (PATCH)

_Not yet implemented_

#### Request cURL

```
curl -X PATCH -H 'Content-Type: application/json' -d '{"new_username":"user12345", "new_password": "abc12345", "new_email": "abcd123@gmail.com"}' http://localhost:5000/app/update_user/
```

#### Response body

```
{"status": 200, "message": "Successfully updated user info!", "new_username":"user12345", "new_password": "abc12345", "new_email": "abcd123@gmail.com"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/user/delete/ (DELETE)

_Not yet implemented_

#### Request cURL

```
curl -X DELETE -H 'Content-Type: application/json' -d '{"username":"user12345", "password": "abc12345"}' http://localhost:5000/app/delete_user/
```

#### Response body

```
{"status": 200, "message": "Successfully deleted user!", "deleted_username":"user12345"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
