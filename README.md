# Enermy-rain web game

[![enermy-rain-snapshot](https://i.ibb.co/0sy8j1g/enemyrain-snap.jpg)](https://www.youtube.com/embed/u4XmOFMfo5M)

## "비처럼 떨어지는 유령을 잡아라!"

- HTML/CSS
- Vanilla Javascript
- `<`, `>` 방향키 조작 웹게임
- 유령 3마리 잡으면 '**LEVEL UP & SPEED UP**'
- 유령을 1마리 놓칠때 마다 **LIFE-1**

## 구현 방식

### 영웅
- class CSS selector : 영웅의 좌, 우, 정면 모습을 각각 지정
- `<`,`>` 키 이벤트 실행 : 키를 눌렀을 때 일어날 행동 구현
  - 영웅이 `<`,`>` 를 향함 : 영웅 DOM에 접근하여 `classList.add()`,`classList.remove()`
  - 영웅이 해당 방향으로 x포인트 이동
  - 영웅이 정면을 바라본다
  
### 유령
- `setInterval()`을 통해 3초 마다 `유령생성자(class Enermy)`를 통해 유령 생산
- `유령생성자`는 화면폭 랜덤한 곳에 유령 생성
- `getComputedStyle()`을 통해 유령 각각의 정보를 받아 위치를 파악 조정한다
- 유령의 영역과 영웅의 영역이 겹치는 위치가 될 때, 유령은 죽은 모습으로 변경
- 유령을 놓치거나, 유령이 죽게되면 `clearInterval()`을 통해 유령의 `setInterval()` 제거
- 유령이 죽었을 때, `new Audio()`를 통해 만든 오디오를 `play()`로 실행

### 레벨업 & 스피드업
- 놓친 유령 수, 잡은 유령 수를 변수에 담아 관리
- 유령이 생성될때 스피드변수에 따라 가속
- 영웅의 생명카운터가 0이 되면, GAME OVER & 화면정지

