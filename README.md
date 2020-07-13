# opentutorials.org

오픈튜토리얼스는 사이트 개발 능력이 없는 사람이라도 누구나 강좌를 개설할 수 있도록 하는 것을 목표로 합니다. [[미션](https://opentutorials.org/module/180/5520#mission1)][[위키](https://ko.wikipedia.org/wiki/%EC%98%A4%ED%94%88%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC%EC%8A%A4)]

## 목차
* [시작하기](#시작하기)
  - [사전 준비](#사전-준비)
  - [설치하기](#설치하기)
  - [설정하기](#설정하기)
  - [실행하기](#실행하기)
* [변경하기](#변경하기)
* [배포하기](#배포하기)
* [개발 기반](#개발-기반)

## 시작하기

이 항목에서는 오픈튜토리얼스 프로젝트의 개발과 테스트를 위해 프로젝트를 로컬 머신에서 실행하는 방법을 설명합니다. 상용 환경에 프로젝트를 배포하는 방법에 대해서는 [#배포하기](#배포하기) 항목을 확인해주세요. :grin:

### 사전 준비

* [업무 리소스][work-resources] 중 오픈튜토리얼스 코드 및 DB 저장소 Git 권한 얻기
* [Docker Hub](https://hub.docker.com/) 가입하기
* [Docker Desktop](https://docs.docker.com/docker-for-mac/install/) 설치하기
* Docker GUI 애플리케이션 설치 (옵션)
  - [DockStation](https://dockstation.io/) - docker-compose.yml까지 GUI 상에서 활용 가능
  - [Kinematic](https://kitematic.com/) - Docker Desktop 설치 시 연동 가능
  - [기타 참고](https://medium.com/@dockstation/a-brief-comparison-of-gui-docker-tools-46bd6a24ae31)

이후 이미지 다운로드 권한 설정 등이 필요하며, 이에 대해서는 [위키 문서](https://github.com/egoing/opentutorials/wiki/도커개발환경-셋팅-방법)를 참고해주세요 :smile:


### 설치하기

1. Database Template 복사 

```
 // TODO: 경로 및 코드 스크린샷을 넣을 예정
```

2. docker-compose up

```
 // TODO: 터미널에서 프로젝트 경로로 이동 후 결과 작성 예정
```

### 설정하기

1. docker ps

```
  // TODO: 결과 화면
```

2. docker exec -it `<DB Container ID>` /bin/bash
```
  // TODO: 결과 화면
```

3. o2.sql에서 FIXED를 DYNAMIC으로 변경하기
```
  // TODO: 방법 및 결과 화면
```

4. SQL 데이터 입력 중 오류가 나지 않도록 SQL 모드 변경
```
  // TODO: 로그인, 방법 및 결과 화면
```

```mysql
SHOW VARIABLES LIKE 'sql_mode';
SET GLOBAL sql_mode = "NO_ENGINE_SUBSTITUTION";
```

5. mysql -uroot -p -h 127.0.0.1 --database=ebdb < o2.sql 
```
  // TODO: 전후 추가 설명
```

### 실행하기

Explain what these tests test and why

```sh
npm install
gulp compile
```

## 변경하기

Explain what these tests test and why

```sh
gulp watch
```

## 배포하기

```sh
gulp deploy
ls | grep zip
```

이후 [업무 리소스][work-resources] 중 AWS의 opentutorialsorg-web-2 BeansTalk에 업로드

## 개발 기반

* [CodeIgniter](https://codeigniter.com/) - The web framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [Gulp](https://gulpjs.com/) - Task runner
* [LESS](http://lesscss.org/) - Backwards-compatible language extension for CSS

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[work-resources]: https://docs.google.com/document/d/1myNy9SEaCPJwCMazhJ_O1dU7EqUzTJbzncKbSqgxp3g/edit?usp=sharing

Happy coding~# nodejs
