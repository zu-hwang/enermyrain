
const ghost = document.querySelector('.ghost');
// const hero = document.querySelector('.hero');
let nowY;
let nowX;




function removeGhost() {
  ghost.parentNode.removeChild(ghost);
}


function deadGhost() {
  ghost.classList.remove('alive');
  ghost.classList.add('dead');
}


function rainGhost() {
  const curY = parseInt(window.getComputedStyle(ghost).top);
  // console.log(curY);
  // nowY = ++curY;
  nowY = curY + 5;
  nowX = parseInt(getComputedStyle(ghost).left);
  const ghostWidth = parseInt(getComputedStyle(ghost).width);
  const heroWidth = parseInt(getComputedStyle(hero).width);
  let heroleft = parseInt(getComputedStyle(hero).left);
  let heroTop = parseInt(getComputedStyle(hero).top);

  // console.log(heroTop, '영웅님');
  //바닥에 550전까지는 내려가고, 550 이후에는 죽기
  // if (nowY < 550 && nowY > 493) {
  if (nowY <= 550) { // 내려오기
    ghost.style.top = nowY + 'px';
    console.log('내려왔!');
  } else if (nowY > heroTop && nowX < heroleft + heroWidth && nowX > heroleft - ghostWidth) { // 만나면 지워지기.
    console.log('3번');
    deadGhost();
    clearInterval(id);
    removeGhost();
  } else {
    //  if (nowY > 600) { // 지나칠때
    console.log('2번');
    deadGhost();
    clearInterval(id);
    setTimeout(removeGhost, 1000);
  }
}

let id = setInterval(rainGhost, 1000 / 60);
// console.log(id);
