const gui= new dat.GUI()
const canvas=document.querySelector('canvas');
const c=canvas.getContext('2d');

canvas.width=innerWidth;
canvas.height=innerHeight;
const move={
   y:canvas.height/2,
    L:0.01,
    a:100 ,
    f:0.01
    
}


const Strokecolor={
    h:200,
    s:50,
    l:50
}

const back={
    r:0,
    g:0,
    b:0,
    a:0.01,
}
const waveFolder=gui.addFolder('move')
waveFolder.add(move,'y',0,canvas.height);
waveFolder.add(move,'L',-0.01,0.01);
waveFolder.add(move,'a',-300,300);
waveFolder.add(move,'f',-0.01,1);
waveFolder.open();


const strokeFolder=gui.addFolder('stroke')
strokeFolder.add(Strokecolor,'h',0,255);
strokeFolder.add(Strokecolor,'s',0,100);
strokeFolder.add(Strokecolor,'l',0,100);
strokeFolder.open();

const backFolder=gui.addFolder('back')
backFolder.add(back,'r',0,255);
backFolder.add(back,'g',0,255);
backFolder.add(back,'b',0,255);
backFolder.add(back,'a',0,1);
backFolder.open();

let increment =move.f;
function animate(){
    requestAnimationFrame(animate);
  c.fillStyle=`rgba(${back.r},${back.g},${back.b},${back.a})`;
   c.fillRect(0,0,canvas.width,canvas.height);
    c.beginPath();
c.moveTo(0,canvas.height/2);
for(let i=0;i<canvas.width;i++){
c.lineTo(i,move.y
         +((Math.sin(i*move.L+increment)*move.a)/i)*500);
}
     c.strokeStyle=`hsl(${Math.abs(Strokecolor.h*Math.sin(increment))},${Strokecolor.s}%,${Strokecolor.l}%)`
c.stroke();
    increment+=move.f;
}


animate();



