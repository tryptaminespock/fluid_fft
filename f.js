this.CanvasRenderingContext2D&&!CanvasRenderingContext2D.createImageData&&(CanvasRenderingContext2D.prototype.createImageData=function(d,i){return this.getImageData(0,0,d,i)});
function Fluid(d){function i(b,a,c){for(var f=0;f<q;f++)b[f]=b[f]+c*a[f]}function k(b,a){if(b===1){for(var c=1;c<=m;c++){a[c]=a[c+h];a[c+(p+1)*h]=a[c+p*h]}for(var f=1;c<=p;c++){a[f*h]=-a[1+f*h];a[m+1+f*h]=-a[m+f*h]}}else{if(b===2)for(c=1;c<=m;c++){a[c]=-a[c+h];a[c+(p+1)*h]=-a[c+p*h]}else for(c=1;c<=m;c++){a[c]=a[c+h];a[c+(p+1)*h]=a[c+p*h]}for(f=1;f<=p;f++){a[f*h]=a[1+f*h];a[m+1+f*h]=a[m+f*h]}}c=(p+1)*h;a[0]=0.5*(a[1]+a[h]);a[c]=0.5*(a[1+c]+a[p*h]);a[m+1]=0.5*(a[m]+a[m+1+h]);a[m+1+c]=0.5*(a[m+c]+a[m+
1+p*h])}function j(b,a,c,f,s){if(f===0&&s===1){for(s=1;s<=p;s++){var g=s*h;++g;for(var o=0;o<m;o++){a[g]=c[g];++g}}k(b,a)}else for(var d=1/s,i=0;i<A;i++){for(s=1;s<=p;s++){var e=(s-1)*h,g=s*h,j=(s+1)*h,n=a[g];++g;for(o=1;o<=m;o++)n=a[g]=(c[g]+f*(n+a[++g]+a[++e]+a[++j]))*d}k(b,a)}}function n(b){for(var a=0;a<q;a++)b[a]=b[a]*R}function e(b,a,c,f,d,g){for(var o=g*m,g=g*p,i=m+0.5,e=p+0.5,j=1;j<=p;j++)for(var n=j*h,q=1;q<=m;q++){var l=q-o*f[++n],t=j-g*d[n];l<0.5?l=0.5:l>i&&(l=i);var r=l|0,u=r+1;t<0.5?
t=0.5:t>e&&(t=e);var C=t|0,l=l-r,t=t-C,v=1-t,w=C*h,C=(C+1)*h;a[n]=(1-l)*(v*c[r+w]+t*c[r+C])+l*(v*c[u+w]+t*c[u+C])}k(b,a)}function u(b,a,c,f){for(var d=-0.5/Math.sqrt(m*p),g=1;g<=p;g++)for(var o=g*h,i=(g-1)*h,e=o-1,n=o,q=o+1,o=(g+1)*h,l=1;l<=m;l++){f[++n]=d*(b[++q]-b[++e]+a[++o]-a[++i]);c[n]=0}k(0,f);k(0,c);j(0,c,f,1,4);f=0.5*m;d=0.5*p;for(g=1;g<=p;g++){i=g*h-1;e=g*h;n=g*h+1;q=(g-1)*h;o=(g+1)*h;for(l=1;l<=m;l++){b[++e]-=f*(c[++n]-c[++i]);a[e]=a[e]-d*(c[++o]-c[++q])}}k(1,b);k(2,a)}function M(b,a,c,
f,d){this.setDensityRGB=function(g,o,f){b[g+1+(o+1)*h]=f[0];a[g+1+(o+1)*h]=f[1];c[g+1+(o+1)*h]=f[2]};this.getDensityRGB=function(g,f){return[b[g+1+(f+1)*h],a[g+1+(f+1)*h],c[g+1+(f+1)*h]]};this.setVelocity=function(a,b,c,i){f[a+1+(b+1)*h]=c;d[a+1+(b+1)*h]=i};this.setVelocityInterp=function(a,b,c,f){var d=h;rI=a+2;rJ=b+2;i1=a+2;i2=rI-i1<0?a+3:a+1;j1=b+2;j2=rJ-j1<0?b+3:b+1;diffx=1-(rI-i1);diffy=1-(rJ-j1);vx1=c*diffx*diffy;vy1=f*diffy*diffx;vx2=c*(1-diffx)*diffy;vy2=f*diffy*(1-diffx);vx3=c*diffx*(1-diffy);
vy3=f*(1-diffy)*diffx;vx4=c*(1-diffx)*(1-diffy);vy4=f*(1-diffy)*(1-diffx);if(!(i1<2||i1>h-1||j1<2||j1>d-1)){this.setVelocity(i1,j1,vx1,vy1);this.setVelocity(i2,j1,vx2,vy2);this.setVelocity(i1,j2,vx3,vy3);this.setVelocity(i2,j2,vx4,vy4)}};this.getXVelocity=function(a,b){return f[a+1+(b+1)*h]};this.getYVelocity=function(a,b){return d[a+1+(b+1)*h]};this.width=function(){return m};this.height=function(){return p}}function D(){h=m+2;q=(m+2)*(p+2);F=Array(q);G=Array(q);H=Array(q);I=Array(q);J=Array(q);
K=Array(q);v=Array(q);w=Array(q);E=Array(q);L=Array(q);for(var b=0;b<q;b++){w[b]=L[b]=v[b]=E[b]=0;F[b]=H[b]=J[b]=G[b]=I[b]=K[b]=0}}function S(b){var a=d.getContext("2d"),c=b.width(),f=b.height();a:if(!r||!(r.width==b.width()&&r.height==b.height())){r=document.createElement("canvas");r.width=b.width();r.height=b.height();var i=r.getContext("2d");try{l=i.createImageData(b.width(),b.height())}catch(g){break a}if(l){for(var i=b.width()*b.height()*4,e=3;e<i;e=e+4)l.data[e]=255;l.data[0]=256;l.data[0]>
255&&(N=true);l.data[0]=0}}if(l){i=l.data;if(N)for(e=0;e<c;e++)for(var h=0;h<f;h++){var j=b.getDensity(e,h)*255/5,j=j|0;j>255&&(j=255);i[4*(h*f+e)+1]=j}else for(e=0;e<c;e++)for(h=0;h<f;h++){var j=4*(h*f+e),k=b.getDensityRGB(e,h);i[j+0]=Math.round(k[0]*255/5);i[j+1]=Math.round(k[1]*255/5);i[j+2]=Math.round(k[2]*255/5)}a.putImageData(l,0,0)}else for(e=0;e<c;e++)for(h=0;h<f;h++){j=b.getDensity(e,h)/5;a.setFillColor(0,j,0,1);a.fillRect(e,h,1,1)}}function T(b){var a=d.getContext("2d");a.save();a.lineWidth=
1;var c=d.width/b.width(),f=d.height/b.height();a.fillStyle="black";a.fillRect(0,0,d.width,d.height);a.strokeStyle="rgb(0,255,0)";a.beginPath();for(var e=0;e<b.width();e++)for(var g=0;g<b.height();g++){a.moveTo(e*c+0.5*c,g*f+0.5*f);a.lineTo((e+0.5+10*b.getXVelocity(e,g))*c,(g+0.5+10*b.getYVelocity(e,g))*f)}a.stroke();a.restore()}var R=0.95,O=function(){};this.update=function(){for(var b=G,a=I,c=K,f=w,d=L,g=0;g<q;g++)b[g]=a[g]=c[g]=0;O(new M(b,a,c,f,d));b=v;a=E;c=w;f=L;d=P;i(b,c,d);i(a,f,d);for(var g=
c,c=b,b=g,g=f,f=a,a=g,g=b,o=c,l=a,r=f,A=1;A<=p;A++){var B=A*h;++B;for(var D=0;D<m;D++){g[B]=o[B];l[B]=r[B];++B}}k(1,g);k(2,l);u(b,a,c,f);g=c;c=b;b=g;g=f;f=a;a=g;e(1,b,c,c,f,d);e(2,a,f,c,f,d);u(b,a,c,f);if(w){b=G;a=I;c=K;f=F;d=H;g=J;o=v;l=E;r=P;n(f);n(d);n(g);n(o);n(l);i(f,b,r);i(d,a,r);i(g,c,r);j(0,b,f,0,1);j(0,a,d,0,1);j(0,c,g,0,1);e(0,f,b,o,l,r);e(0,d,a,o,l,r);e(0,g,c,o,l,r)}Q(new M(F,H,J,v,E))};this.setDisplayFunction=function(b){Q=b};this.iterations=function(){return A};this.setIterations=function(b){b>
0&&b<=100&&(A=b)};this.setUICallback=function(b){O=b};var A=10,P=0.1,F,G,H,I,J,K,v,w,E,L,m,p,h,q,Q;this.reset=D;this.fieldRes=96;this.setResolution=function(b,a){var c=a*b;this.fieldRes=b;if(c>0&&c<1E6&&(a!=m||b!=p)){m=a;p=b;D();return true}return false};var r,l,N=false,d=document.getElementById("canvas");this.displaySize=96;this.toggleDisplayFunction=function(b,a){if(a){b.width=this.displaySize;b.height=this.displaySize;return T}b.width=this.fieldRes;b.height=this.fieldRes;return S}};function Colors(){function d(d){return d>6/29?Math.pow(d,3):3*Math.pow(6/29,2)*(d-4/29)}this.distanceRotators=[0,151,351,451];this.colors=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]];this.white=[0.9642,1,0.8249];this.L=75;this.rotate=function(){for(var i=0;i<this.distanceRotators.length;i++){var k=this.colors,j=i,n=this.L,e;e=this.distanceRotators[i];e=0<=e&&200>=e?[200-(100+e),100]:200<e&&400>=e?[-100+(e-200),100-(e-200)]:400<e&&600>=e?[100,-100+(e-400)]:void 0;var u=this.white;x=255*u[0]*d(1/116*(n+16)+0.002*
e[0]);y=255*u[1]*d(1/116*(n+16));z=255*u[2]*d(1/116*(n+16)+0.005*e[1]);k[j]=[x,y,z];this.distanceRotators[i]++;600<this.distanceRotators[i]&&(this.distanceRotators[i]=0)}}};var colors,canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),running=!1,fluid,source,analyser,audioContext,audioBuffer,freqByteData,timeByteData,VOL_SENS=2,buffer,old_buffer;function arrayToRGBA(d){return"rgba("+Math.floor(d[0])+","+Math.floor(d[1])+","+Math.floor(d[2])+",0.4)"}function drawRectangle(d,i,k,j,n){ctx.fillStyle=arrayToRGBA(n);ctx.fillRect(d,i,k,j)}function onDocumentDragOver(d){d.stopPropagation();d.preventDefault();return!1}
function initAudio(d){source=audioContext.createBufferSource();audioContext.decodeAudioData?audioContext.decodeAudioData(d,function(d){source.buffer=d;createAudio()},function(d){console.log(d)}):(source.buffer=audioContext.createBuffer(d,!1),createAudio())}function createAudio(){fluid.reset();analyser=audioContext.createAnalyser();initArrays();source.connect(audioContext.destination);source.connect(analyser);source.looping=!0;source.noteOn(0);running=!0}
function onDocumentDrop(d){d.stopPropagation();d.preventDefault();source&&source.disconnect();var d=d.dataTransfer.files,i=new FileReader;i.onload=function(d){initAudio(d.target.result)};i.readAsArrayBuffer(d[0])}
function prepareFrame(d){colors.rotate();if(analyser){analyser.smoothingTimeConstant=0.1;analyser.getByteFrequencyData(freqByteData);analyser.getByteTimeDomainData(timeByteData);for(var i=freqByteData.length,k=0,j=0;j<i;++j)k+=freqByteData[j];for(var i=k/i/256*VOL_SENS,n=k=j=0,e=0;e<freqByteData.length;e++)64==j&&(old_buffer[n]=buffer[n],buffer[n]=k,n++,k=j=0),k+=freqByteData[e],j++;for(e=0;e<buffer.length;e++)if(k=buffer[e],j=old_buffer[e],8==e&&console.log(Math.abs(k-j)/k),10<Math.abs(k-j)/k){d.setVelocity(8+
16*e,1,0,500);d.setVelocity(88-16*e,canvas.height-1,0,-500);for(j=0;20>j;j++)d.setDensityRGB(8+16*e,j,colors.colors[3]),d.setDensityRGB(88-16*e,canvas.height-1-j,colors.colors[2])}0.2>i&&(i*=2)}else{for(e=0;8>e;e++)if(k=256*Math.random(),250<k){d.setVelocity(8+16*e,1,0,500);d.setVelocity(88-16*e,canvas.height-1,0,-500);for(j=0;20>j;j++)d.setDensityRGB(8+16*e,j,colors.colors[3]),d.setDensityRGB(88-16*e,canvas.height-1-j,colors.colors[2])}i=0.5}d.setVelocity(0,Math.floor(canvas.height/2),50*i,0);d.setVelocity(canvas.width-
1,Math.floor(canvas.height/2),-50*i,0);d.setDensityRGB(0,Math.floor(canvas.height/2),colors.colors[0]);d.setDensityRGB(canvas.width-1,Math.floor(canvas.height/2),colors.colors[1])}function loadSampleAudio(){source=audioContext.createBufferSource();analyser=audioContext.createAnalyser();analyser.fftSize=1024;source.connect(analyser);analyser.connect(audioContext.destination);loadAudioBuffer("everyday.mp3")}
function loadAudioBuffer(d){var i=new XMLHttpRequest;i.open("GET",d,!0);i.responseType="arraybuffer";i.onload=function(){audioBuffer=audioContext.createBuffer(i.response,!1);finishLoad()};i.send()}function initArrays(){freqByteData=new Uint8Array(analyser.frequencyBinCount);timeByteData=new Uint8Array(analyser.frequencyBinCount);buffer=new Uint8Array(8);old_buffer=new Uint8Array(8)}function finishLoad(){source.buffer=audioBuffer;source.looping=!0;source.noteOn(0);initArrays();running=!0}
function begin(){fluid=new Fluid(canvas);fluid.setUICallback(prepareFrame);fluid.setDisplayFunction(fluid.toggleDisplayFunction(canvas,0));colors=new Colors;canvas.width=96;canvas.height=96;fluid.setResolution(96,96);audioContext=new window.webkitAudioContext;buffer=new Uint8Array(8);old_buffer=new Uint8Array(8);document.addEventListener("drop",onDocumentDrop,!1);document.addEventListener("dragover",onDocumentDragOver,!1);running=!0}
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(d){window.setTimeout(d,1E3/60)}}();(function animloop(){requestAnimFrame(animloop);updateFrame()})();function updateFrame(){running&&fluid.update()}begin();
