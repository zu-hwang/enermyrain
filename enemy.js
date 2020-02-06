

// 고스트 메이커!
class Enemy {

}



function checkPosition(params) {
  // 고스트의 (X,Y) , 히어로 (X,Y) 좌표 위치가 같을때,
  // 고스트 배경화면 좌표 변경, 현재위치 고정, 2초후에 시체 사라지기 , 킬 카운트 추가
  // 만약 고스트가 배경화면 좌표까지 떨어지면, 게임 오버
}



const ghost = document.querySelector('.ghost');
let nowY;

function rainGhost() {
  let curY = parseInt(getComputedStyle(ghost).top);
  // console.log(curY);s
  nowY = ++curY;
  if (nowY <= 600) {
    ghost.style.top = nowY + 'px';
    // checkPosition();
  } else if (nowY > 600) {
    ghost.parentNode.removeChild(ghost);
  }
  console.log();
}
setInterval(rainGhost, 1000 / 60);