
const ghost = document.querySelector('.ghost');
// const hero = document.querySelector('.hero');
let nowY;
let nowX;




function removeGhost() {
  ghost.parentNode.removeChild(ghost);
}

function deadGhost(gX, gY, hX, hY) {
  console.log(gX, gY, hX, hY);

  hY = parseInt(getComputedStyle(hero).wigth);
  gY = parseInt(getComputedStyle(ghost).top) - 90;
  console.log('>>>', gX, gY, hX, hY);

  // if (hy < gy && gy < hY + 140) {
  if (true) {
    clearInterval(1);
    console.log('인터벌지우고');// 지워질꺼야 
    setTimeout(removeGhost, 1000);
    console.log('고스트 시체 치웠다');// 지워질꺼야 

  }
}
function rainGhost() {
  let curY = parseInt(getComputedStyle(ghost).top);
  // console.log(curY);s
  nowY = ++curY;
  nowX = parseInt(getComputedStyle(ghost).left);
  if (nowY <= 600) {
    ghost.style.top = nowY + 'px';
    // checkPosition();
  } else if (nowY > 600) {
    removeGhost();
  }
  deadGhost(nowX, nowY);

  console.log();
}

function checkPosition(params) {
  // 고스트의 (X,Y) , 히어로 (X,Y) 좌표 위치가 같을때,
  // 고스트 배경화면 좌표 변경, 현재위치 고정, 2초후에 시체 사라지기 , 킬 카운트 추가
  // 만약 고스트가 배경화면 좌표까지 떨어지면, 게임 오버
}

// const id = 
setInterval(rainGhost, 1000 / 60);

// console.log(id);
