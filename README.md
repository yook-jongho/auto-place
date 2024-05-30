## 실행
# 공통
클론 이후,
1. 터미널에서 해당 폴더 위치에서 yarn init 이후 게속 엔터
2. yarn install
3. package.json 파일에서 아래 구문 수정
- 멕북
  "react-start": "BROWSER=none yarn start",
  "electron-start": "ELECTRON_START_URL=http://localhost:3000 electron ."
  
- 윈도우
  "set BROWSER=none && yarn start"
  "set ELECTRON_START_URL=http://localhost:3000 && electron ."
