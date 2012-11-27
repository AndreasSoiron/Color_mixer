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

  return {c:cyan,m:magenta,y:yellow,k:black/255};
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
  color = $.Color(R,G,B,1);
  return color;
}

Color_mixer.mix = function(color1,color2){
  color1 = Color_mixer.toCymk(color1);
  color2 = Color_mixer.toCymk(color2);

  C = (color1.c + color2.c)/2;
  M = (color1.m + color2.m)/2;
  Y = (color1.y + color2.y)/2;
  K = (color1.k + color2.k)/2;
  color = {c:C,m:M,y:Y,k:K};
  color = Color_mixer.toRgba(color);
  return color;
}
