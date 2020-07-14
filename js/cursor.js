/ *！
 *仙尘Cursor.js
 *-90的游标集合
 *-https://github.com/tholman/90s-cursor-effects
 *-http://codepen.io/tholman/full/jWmZxZ/
 * /

//鼠标点击雪花特效
（函数fairyDustCursor（）{
  
  var可能的颜色= [“＃D61C59”，“＃E7D84B”，“＃1B8798”]
  var width = window.innerWidth;
  var height = window.innerHeight;
  var cursor = {x：宽度/ 2，y：宽度/ 2};
  var particle = [];
  
  函数init（）{
    bindEvents（）;
    循环（）;
  }
  
  //绑定所需的事件
  函数bindEvents（）{
    document.addEventListener（'mousemove'，onMouseMove）;
    document.addEventListener（'touchmove'，onTouchMove）;
    document.addEventListener（'touchstart'，onTouchMove）;
    
    window.addEventListener（'resize'，onWindowResize）;
  }
  
  函数onWindowResize（e）{
    宽度= window.innerWidth;
    高度= window.innerHeight;
  }
  
  功能onTouchMove（e）{
    if（e.touches.length> 0）{
      for（var i = 0; i <e.touches.length; i ++）{
        addParticle（e.touches [i] .clientX，e.touches [i] .clientY，可能是Colors [Math.floor（Math.random（）* possibleColors.length）]））;
      }
    }
  }
  
  函数onMouseMove（e）{    
    cursor.x = e.clientX;
    cursor.y = e.clientY;
    
    addParticle（cursor.x，cursor.y，possibleColors [Math.floor（Math.random（）* possibleColors.length）]））;
  }
  
  函数addParticle（x，y，color）{
    var particle = new Particle（）;
    particle.init（x，y，color）;
    particle.push（particle）;
  }
  
  函数updateParticles（）{
    
    // 更新
    for（var i = 0; i <particle.length; i ++）{
      粒子[i] .update（）;
    }
    
    //清除死颗粒
    for（var i = particle.length -1; i> = 0; i--）{
      if（particle [i] .lifeSpan <0）{
        粒子[i] .die（）;
        particle.splice（i，1）;
      }
    }
    
  }
  
  函数loop（）{
    requestAnimationFrame（loop）;
    updateParticles（）;
  }
  
  / **
   * 粒子
   * /
  
  函数Particle（）{

    this.character =“ *”;
    this.lifeSpan = 120; //多发性硬化症
    this.initialStyles = {
      “ position”：“ fixed”，
      “ top”：“ 0”，//必须加
      “ display”：“ block”，
      “ pointerEvents”：“ none”，
      “ z-index”：“ 10000000”，
      “ fontSize”：“ 20px”，
      “ will-change”：“ transform”
    };

    //初始化并设置属性
    this.init = function（x，y，color）{

      this.velocity = {
        x：（Math.random（）<0.5？-1：1）*（Math.random（）/ 2），
        y：1
      };
      
      this.position = {x：x-10，y：y-20};
      this.initialStyles.color =颜色;
      console.log（color）;

      this.element = document.createElement（'span'）;
      this.element.innerHTML = this.character;
      applyProperties（this.element，this.initialStyles）;
      this.update（）;
      
      document.body.appendChild（this.element）;
    };
    
    this.update = function（）{
      this.position.x + = this.velocity.x;
      this.position.y + = this.velocity.y;
      this.lifeSpan--;
      
      this.element.style.transform =“ translate3d（” + this.position.x +“ px，” + this.position.y +“ px，0）scale（” +（this.lifeSpan / 120）+“）” ;
    }
    
    this.die = function（）{
      this.element.parentNode.removeChild（this.element）;
    }
    
  }
  
  / **
   *实用程序
   * /
  
  //将css`properties`应用于元素。
  函数applyProperties（target，properties）{
    for（var key in properties）{
      target.style [key] = properties [key];
    }
  }
  
  在里面（）;
}）（）;