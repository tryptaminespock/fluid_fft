this.CanvasRenderingContext2D&&!CanvasRenderingContext2D.createImageData&&(CanvasRenderingContext2D.prototype.createImageData=function(g,e){return this.getImageData(0,0,g,e)});
function Fluid(g){function e(b,a,c){for(var f=0;f<n;f++)b[f]=b[f]+c*a[f]}function o(b,a){if(b===1){for(var c=1;c<=l;c++){a[c]=a[c+h];a[c+(q+1)*h]=a[c+q*h]}for(var f=1;c<=q;c++){a[f*h]=-a[1+f*h];a[l+1+f*h]=-a[l+f*h]}}else{if(b===2)for(c=1;c<=l;c++){a[c]=-a[c+h];a[c+(q+1)*h]=-a[c+q*h]}else for(c=1;c<=l;c++){a[c]=a[c+h];a[c+(q+1)*h]=a[c+q*h]}for(f=1;f<=q;f++){a[f*h]=a[1+f*h];a[l+1+f*h]=a[l+f*h]}}c=(q+1)*h;a[0]=0.5*(a[1]+a[h]);a[c]=0.5*(a[1+c]+a[q*h]);a[l+1]=0.5*(a[l]+a[l+1+h]);a[l+1+c]=0.5*(a[l+c]+a[l+
1+q*h])}function j(b,a,c,f,s){if(f===0&&s===1){for(s=1;s<=q;s++){var i=s*h;++i;for(var p=0;p<l;p++){a[i]=c[i];++i}}o(b,a)}else for(var g=1/s,e=0;e<A;e++){for(s=1;s<=q;s++){var d=(s-1)*h,i=s*h,j=(s+1)*h,n=a[i];++i;for(p=1;p<=l;p++)n=a[i]=(c[i]+f*(n+a[++i]+a[++d]+a[++j]))*g}o(b,a)}}function k(b){for(var a=0;a<n;a++)b[a]=b[a]*Q}function d(b,a,c,f,s,i){for(var p=i*l,i=i*q,e=l+0.5,g=q+0.5,d=1;d<=q;d++)for(var j=d*h,n=1;n<=l;n++){var k=n-p*f[++j],u=d-i*s[j];k<0.5?k=0.5:k>e&&(k=e);var m=k|0,r=m+1;u<0.5?
u=0.5:u>g&&(u=g);var t=u|0,k=k-m,u=u-t,v=1-u,w=t*h,t=(t+1)*h;a[j]=(1-k)*(v*c[m+w]+u*c[m+t])+k*(v*c[r+w]+u*c[r+t])}o(b,a)}function t(b,a,c,f){for(var e=-0.5/Math.sqrt(l*q),i=1;i<=q;i++)for(var p=i*h,g=(i-1)*h,d=p-1,k=p,n=p+1,p=(i+1)*h,m=1;m<=l;m++){f[++k]=e*(b[++n]-b[++d]+a[++p]-a[++g]);c[k]=0}o(0,f);o(0,c);j(0,c,f,1,4);f=0.5*l;e=0.5*q;for(i=1;i<=q;i++){g=i*h-1;d=i*h;k=i*h+1;n=(i-1)*h;p=(i+1)*h;for(m=1;m<=l;m++){b[++d]-=f*(c[++k]-c[++g]);a[d]=a[d]-e*(c[++p]-c[++n])}}o(1,b);o(2,a)}function L(b,a,c,
f,e){this.setDensityRGB=function(i,p,f){b[i+1+(p+1)*h]=f[0];a[i+1+(p+1)*h]=f[1];c[i+1+(p+1)*h]=f[2]};this.getDensityRGB=function(i,f){return[b[i+1+(f+1)*h],a[i+1+(f+1)*h],c[i+1+(f+1)*h]]};this.setVelocity=function(a,b,c,g){f[a+1+(b+1)*h]=c;e[a+1+(b+1)*h]=g};this.setVelocityInterp=function(a,b,c,f){var e=h;rI=a+2;rJ=b+2;i1=a+2;i2=rI-i1<0?a+3:a+1;j1=b+2;j2=rJ-j1<0?b+3:b+1;diffx=1-(rI-i1);diffy=1-(rJ-j1);vx1=c*diffx*diffy;vy1=f*diffy*diffx;vx2=c*(1-diffx)*diffy;vy2=f*diffy*(1-diffx);vx3=c*diffx*(1-diffy);
vy3=f*(1-diffy)*diffx;vx4=c*(1-diffx)*(1-diffy);vy4=f*(1-diffy)*(1-diffx);if(!(i1<2||i1>h-1||j1<2||j1>e-1)){this.setVelocity(i1,j1,vx1,vy1);this.setVelocity(i2,j1,vx2,vy2);this.setVelocity(i1,j2,vx3,vy3);this.setVelocity(i2,j2,vx4,vy4)}};this.getXVelocity=function(a,b){return f[a+1+(b+1)*h]};this.getYVelocity=function(a,b){return e[a+1+(b+1)*h]};this.width=function(){return l};this.height=function(){return q}}function C(){h=l+2;n=(l+2)*(q+2);E=Array(n);F=Array(n);G=Array(n);H=Array(n);I=Array(n);
J=Array(n);v=Array(n);w=Array(n);D=Array(n);K=Array(n);for(var b=0;b<n;b++){w[b]=K[b]=v[b]=D[b]=0;E[b]=G[b]=I[b]=F[b]=H[b]=J[b]=0}}function R(b){var a=g.getContext("2d"),c=b.width(),f=b.height();a:if(!r||!(r.width==b.width()&&r.height==b.height())){r=document.createElement("canvas");r.width=b.width();r.height=b.height();var e=r.getContext("2d");try{m=e.createImageData(b.width(),b.height())}catch(i){break a}if(m){for(var e=b.width()*b.height()*4,d=3;d<e;d=d+4)m.data[d]=255;m.data[0]=256;m.data[0]>
255&&(M=true);m.data[0]=0}}if(m){e=m.data;if(M)for(d=0;d<c;d++)for(var h=0;h<f;h++){var j=b.getDensity(d,h)*255/5,j=j|0;j>255&&(j=255);e[4*(h*f+d)+1]=j}else for(d=0;d<c;d++)for(h=0;h<f;h++){var j=4*(h*f+d),k=b.getDensityRGB(d,h);e[j+0]=Math.round(k[0]*255/5);e[j+1]=Math.round(k[1]*255/5);e[j+2]=Math.round(k[2]*255/5)}a.putImageData(m,0,0)}else for(d=0;d<c;d++)for(h=0;h<f;h++){j=b.getDensity(d,h)/5;a.setFillColor(0,j,0,1);a.fillRect(d,h,1,1)}}function S(b){var a=g.getContext("2d");a.save();a.lineWidth=
1;var c=g.width/b.width(),f=g.height/b.height();a.fillStyle="black";a.fillRect(0,0,g.width,g.height);a.strokeStyle="rgb(0,255,0)";a.beginPath();for(var d=0;d<b.width();d++)for(var e=0;e<b.height();e++){a.moveTo(d*c+0.5*c,e*f+0.5*f);a.lineTo((d+0.5+10*b.getXVelocity(d,e))*c,(e+0.5+10*b.getYVelocity(d,e))*f)}a.stroke();a.restore()}var Q=0.95,N=function(){};this.update=function(){for(var b=F,a=H,c=J,f=w,g=K,i=0;i<n;i++)b[i]=a[i]=c[i]=0;N(new L(b,a,c,f,g));b=v;a=D;c=w;f=K;g=O;e(b,c,g);e(a,f,g);for(var i=
c,c=b,b=i,i=f,f=a,a=i,i=b,p=c,m=a,r=f,A=1;A<=q;A++){var B=A*h;++B;for(var C=0;C<l;C++){i[B]=p[B];m[B]=r[B];++B}}o(1,i);o(2,m);t(b,a,c,f);i=c;c=b;b=i;i=f;f=a;a=i;d(1,b,c,c,f,g);d(2,a,f,c,f,g);t(b,a,c,f);if(w){b=F;a=H;c=J;f=E;g=G;i=I;p=v;m=D;r=O;k(f);k(g);k(i);k(p);k(m);e(f,b,r);e(g,a,r);e(i,c,r);j(0,b,f,0,1);j(0,a,g,0,1);j(0,c,i,0,1);d(0,f,b,p,m,r);d(0,g,a,p,m,r);d(0,i,c,p,m,r)}P(new L(E,G,I,v,D))};this.setDisplayFunction=function(b){P=b};this.iterations=function(){return A};this.setIterations=function(b){b>
0&&b<=100&&(A=b)};this.setUICallback=function(b){N=b};var A=10,O=0.1,E,F,G,H,I,J,v,w,D,K,l,q,h,n,P;this.reset=C;this.fieldRes=96;this.setResolution=function(b,a){var c=a*b;this.fieldRes=b;if(c>0&&c<1E6&&(a!=l||b!=q)){l=a;q=b;C();return true}return false};var r,m,M=false,g=document.getElementById("canvas");this.displaySize=96;this.toggleDisplayFunction=function(b,a){if(a){b.width=this.displaySize;b.height=this.displaySize;return S}b.width=this.fieldRes;b.height=this.fieldRes;return R}};function Colors(){function g(e){return e>6/29?Math.pow(e,3):3*Math.pow(6/29,2)*(e-4/29)}this.distanceRotators=[0,151,351,451];this.colors=[[0,0,0],[0,0,0],[0,0,0],[0,0,0]];this.white=[0.9642,1,0.8249];this.L=75;this.rotate=function(){for(var e=0;e<this.distanceRotators.length;e++){var o=this.colors,j=e,k=this.L,d;d=this.distanceRotators[e];d=0<=d&&200>=d?[200-(100+d),100]:200<d&&400>=d?[-100+(d-200),100-(d-200)]:400<d&&600>=d?[100,-100+(d-400)]:void 0;var t=this.white;x=255*t[0]*g(1/116*(k+16)+0.002*
d[0]);y=255*t[1]*g(1/116*(k+16));z=255*t[2]*g(1/116*(k+16)+0.005*d[1]);o[j]=[x,y,z];this.distanceRotators[e]++;600<this.distanceRotators[e]&&(this.distanceRotators[e]=0)}}};var colors,canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),running=!1,fluid,source,analyser,audioContext,audioBuffer,freqByteData,timeByteData,VOL_SENS=2,buffer;function drawRectangle(g,e,o,j,k){ctx.fillStyle=k;ctx.fillRect(g,e,o,j)}function onDocumentDragOver(g){g.stopPropagation();g.preventDefault();return!1}
function initAudio(g){source=audioContext.createBufferSource();audioContext.decodeAudioData?audioContext.decodeAudioData(g,function(e){source.buffer=e;createAudio()},function(e){console.log(e)}):(source.buffer=audioContext.createBuffer(g,!1),createAudio())}function createAudio(){fluid.reset();analyser=audioContext.createAnalyser();initArrays();source.connect(audioContext.destination);source.connect(analyser);source.looping=!0;source.noteOn(0);running=!0}
function onDocumentDrop(g){g.stopPropagation();g.preventDefault();source&&source.disconnect();var g=g.dataTransfer.files,e=new FileReader;e.onload=function(e){initAudio(e.target.result)};e.readAsArrayBuffer(g[0])}
function prepareFrame(g){colors.rotate();if(analyser){analyser.smoothingTimeConstant=0.1;analyser.getByteFrequencyData(freqByteData);analyser.getByteTimeDomainData(timeByteData);for(var e=freqByteData.length,o=0,j=0;j<e;++j)o+=freqByteData[j];for(var e=o/e/256*VOL_SENS,k=o=j=0,d=0;d<freqByteData.length;d++)64==j&&(buffer[k]=o,k++,o=j=0),o+=freqByteData[d],j++;for(d=0;d<buffer.length;d++)if(o=buffer[d],240<o){g.setVelocity(8+16*d,1,0,500);g.setVelocity(88-16*d,canvas.height-1,0,-500);for(j=0;20>j;j++)g.setDensityRGB(8+
16*d,j,colors.colors[3]),g.setDensityRGB(88-16*d,canvas.height-1-j,colors.colors[2])}0.2>e&&(e*=2)}else{for(d=0;8>d;d++)if(o=256*Math.random(),250<o){g.setVelocity(8+16*d,1,0,500);g.setVelocity(88-16*d,canvas.height-1,0,-500);for(j=0;20>j;j++)g.setDensityRGB(8+16*d,j,colors.colors[3]),g.setDensityRGB(88-16*d,canvas.height-1-j,colors.colors[2])}e=0.5}g.setVelocity(0,Math.floor(canvas.height/2),50*e,0);g.setVelocity(canvas.width-1,Math.floor(canvas.height/2),-50*e,0);g.setDensityRGB(0,Math.floor(canvas.height/
2),colors.colors[0]);g.setDensityRGB(canvas.width-1,Math.floor(canvas.height/2),colors.colors[1])}function loadSampleAudio(){source=audioContext.createBufferSource();analyser=audioContext.createAnalyser();analyser.fftSize=1024;source.connect(analyser);analyser.connect(audioContext.destination);loadAudioBuffer("everyday.mp3")}
function loadAudioBuffer(g){var e=new XMLHttpRequest;e.open("GET",g,!0);e.responseType="arraybuffer";e.onload=function(){audioBuffer=audioContext.createBuffer(e.response,!1);finishLoad()};e.send()}function initArrays(){freqByteData=new Uint8Array(analyser.frequencyBinCount);timeByteData=new Uint8Array(analyser.frequencyBinCount);buffer=new Uint8Array(8)}function finishLoad(){source.buffer=audioBuffer;source.looping=!0;source.noteOn(0);initArrays();running=!0}
function begin(){fluid=new Fluid(canvas);fluid.setUICallback(prepareFrame);fluid.setDisplayFunction(fluid.toggleDisplayFunction(canvas,0));colors=new Colors;canvas.width=96;canvas.height=96;fluid.setResolution(96,96);audioContext=new window.webkitAudioContext;document.addEventListener("drop",onDocumentDrop,!1);document.addEventListener("dragover",onDocumentDragOver,!1);running=!0}
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(g){window.setTimeout(g,1E3/60)}}();(function animloop(){requestAnimFrame(animloop);updateFrame()})();function updateFrame(){running&&fluid.update()}begin();