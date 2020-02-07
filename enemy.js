let speed = 1;
const soundEffect = new Audio('audio/dying.wav');

class Enermy {
  constructor() {
    this.ghost = document.createElement('div');
    this.initGhost();
    this.nowX;
    this.nowY;
    this.curY;
    this.ghostLeft;
    this.id = setInterval(this.rainGhost, 1000 / 60); // 내려오는 속도
    // 여기서 인터벌을 해야 떨어진다. 그리고 id를 변수에 담았다가 인터벌 제거 할때 써야 한다.
  }

  initGhost = () => {
    this.ghost.classList.add('ghost');
    this.ghost.classList.add('alive');
    this.ghost.style.left = Math.ceil(Math.random() * 760) + 20 + 'px';
    container.appendChild(this.ghost);
    // console.log('생산', this.ghost.style.left);
  }


  removeGhost = () => {
    // console.log('귀신 지우기 실행');
    // this.ghost.parentNode.removeChild(this.ghost);
    delete this.ghost;
  }
  deadGhost = () => {
    this.ghost.classList.add('dead');
    // console.log('귀신 죽이기 실행');
  }

  rainGhost = () => {
    this.curY = parseInt(window.getComputedStyle(this.ghost).top); //숫자형
    this.nowY = this.curY + 1; // 숫자형
    this.nowX = parseInt(getComputedStyle(this.ghost).left); // 숫자형 
    this.ghostLeft = parseInt(getComputedStyle(this.ghost).left); // 숫자
    heroLeft = parseInt(getComputedStyle(hero).left); // 숫자

    // 바닥에 550전까지는 내려가고, 550 이후에는 죽기

    if (this.nowY <= heroTop) { // 내려오기
      // console.log('2번 조건 > 내려와');
      this.ghost.style.top = this.nowY + 'px';
    } else if (this.nowY > heroTop && this.nowY < 600) {
      // console.log('고스트 바닥에 붙이기');
      this.nowY = 547;
      this.ghost.style.top = this.nowY + 'px';
      lifeCount--;
      document.querySelector('.life-count').innerHTML = lifeCount;
      if (lifeCount < 1) {
        console.log(lifeCount, '게임오버');
        document.querySelector('.bg').classList.add('gameOver');
        document.querySelector('.bg').innerHTML = 'GAME OVER';
        // clearInterval(this.id);
        // 모든 인터벌 제거 : 인터벌 아이디를 반복문으로 넣어줬다.
        for (var i = 1; i < 99999; i++) {
          window.clearInterval(i);
        }
      }
      clearInterval(this.id); // 계속 내려가는 인터벌 제거
      setTimeout(() => {
        this.removeGhost();
      }, 1000 / 20); // 놓친것들 지우기
    }

    if (this.nowY + 53 > heroTop && this.nowX < heroLeft + heroWidth && this.nowX > heroLeft - heroWidth) {
      console.log('고스트 죽이기');
      soundEffect.play();
      killCount++;
      document.querySelector('.kill-count').innerHTML = killCount;
      // if (KillCount % 10 === 0) {
      //   console.log('레벨업!')
      //   speed -= 0.1;
      //   console.log('스피드 업!', speed)
      // }
      this.deadGhost();
      clearInterval(this.id);
      setTimeout(this.removeGhost, 1000); // 히어로랑 닿았을때 죽이고 지우기
    }

  }
}

// 1초에 한번씩 생성!
setInterval(() => {
  return new Enermy();
}, 1000 * speed);
