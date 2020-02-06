// 요소가져오기
const hero = document.querySelector('.hero');
// console.dir(hero);

class Hero {

}


// function handleMoveHero(event) {
//   console.dir(event);
// }


// 히어로 방향 > 왼쪽보는 함수
function leftHeroSight() {
  hero.classList.remove('front');
  hero.classList.remove('right');
  hero.classList.add('left');
}

// 히어로 방향 > 오른쪽보는 함수
function rightHeroSight() {
  hero.classList.remove('front');
  hero.classList.remove('left');
  hero.classList.add('right');
}

// 히어로 방향 > 정면보는 함수
function frontHeroSight() {
  hero.classList.remove('right');
  hero.classList.remove('left');
  hero.classList.add('front');
}

function moveLeft() {
  let curX = parseInt(getComputedStyle(hero).left);
  let newX;
  // console.log(curX);
  if (curX < 10) {
    newX = 0 + 'px';
  } else {
    // curX--;
    curX -= 10;
    newX = curX + 'px';
  }
  // console.log(newX);
  hero.style.left = newX;
  // console.log(parseInt(getComputedStyle(hero).left));
}

function moveRight() {
  let curX = parseInt(getComputedStyle(hero).left);
  // console.log('오른쪽', curX);
  let newX;
  if (curX > 768) {
    newX = 778 + 'px';
  } else {
    curX += 10;
    newX = curX + 'px';
  }
  // console.log(newX);
  hero.style.left = newX;
  // console.log(parseInt(getComputedStyle(hero).left));
}


// 키 이벤트가 좌우 방향키 인지 확인
function handleKeyEvent(event) {
  // console.dir(event);
  // 이벤트 키코드 가져오기
  const curKey = event.keyCode;
  // 키코드에 따른 함수 실행
  if (curKey === 37) {
    // console.log('왼쪽으로 갈꺼얍');
    leftHeroSight(); // 왼쪽 보는 모습 CSS 적용
    moveLeft();



  } else if (curKey === 39) {
    // console.log('오른쪼오오오오옥!');
    rightHeroSight(); // 오른쪽 보는 모습 CSS 적용
    moveRight();



  } else if (curKey === 38 || curKey === 40) {
    // console.log('정면보기!');
    frontHeroSight(); // 오른쪽 보는 모습 CSS 적용
  }
}


window.addEventListener('keydown', handleKeyEvent);



