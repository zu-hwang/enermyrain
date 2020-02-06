// 영웅 생성자 만들기.
//   생성자 > left 위치, front sight CSS, left sight CSS, right sight css


// 셋 인터벌 > 초수마다 소환...

const hero = document.querySelector('.hero');
let nowLeft;
let movePx

class Hero {
  constructor(nowLeft, arrowKey, ) {
  }

  // 죽으면실행() {
  // }

  이동할때실행() {
    if (왼쪽일때) {
      css list 수정
      css left 수정

    } else if (오른쪽일때) {
      css list 수정
      css left 수정
    };
  }
}

function paintHero() {
}


// 1초에 한번씩 새로운 캐릭터를 그리도록.
setInterval(paintHero, 1000);

function saveKey(event) {
  if (event.keyCode === 37) {
    return movePx = -1;

  } else if (event.keyCode === 39) {
    return movePx = 1;
  }
}

window.addEventListener('keydown', saveKey);