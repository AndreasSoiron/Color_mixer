/*!
 * Color_mixer for substractive color mixing
 * requires jQuery and jQuery color
 * Author: Andy Soiron
 * http://www.andysoiron.de
 */

Color_mixer = function(){};

Color_mixer.toCymk = function(color){
  cyan    = 255 - color._rgba[0];
  magenta = 255 - color._rgba[1];
  yellow  = 255 - color._rgba[2];
  black   = Math.min(cyan, magenta, yellow);
  cyan    = ((cyan - black) / (255 - black));
  magenta = ((magenta - black) / (255 - black));
  yellow  = ((yellow  - black) / (255 - black));

  return {c:cyan,m:magenta,y:yellow,k:black/255,a:color._rgba[3]};
}

Color_mixer.toRgba = function(color){
  color.c = color.c;
  color.m = color.m;
  color.y = color.y;
  color.k = color.k;
  R = color.c * (1.0 - color.k) + color.k;
  G = color.m * (1.0 - color.k) + color.k;
  B = color.y * (1.0 - color.k) + color.k;
  R = Math.round((1.0 - R) * 255.0 + 0.5);
  G = Math.round((1.0 - G) * 255.0 + 0.5);
  B = Math.round((1.0 - B) * 255.0 + 0.5);
  color = $.Color(R,G,B,color.a);
  return color;
}

Color_mixer.mix = function(color1,color2){
  if(typeof(color1)=='object'&&(color1 instanceof Array)==false)
    color1 = new Array(color1,color2);

  C = 0;
  M = 0;
  Y = 0;
  K = 0;
  A = 0;
  for(var i=0;i<color1.length;i++){
    color1[i] = Color_mixer.toCymk(color1[i]);
    C += color1[i].c;
    M += color1[i].m;
    Y += color1[i].y;
    K += color1[i].k;
    A += color1[i].a;
  }
  C = C/color1.length;
  M = M/color1.length;
  Y = Y/color1.length;
  K = K/color1.length;
  A = A/color1.length;
  color = {c:C,m:M,y:Y,k:K,a:A};
  color = Color_mixer.toRgba(color);
  return color;
}
