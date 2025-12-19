# Perlin Noise
 Examples of notes and code that I took while learning about Perlin Noise with p5.js

## 1. Starting With Random Static
We begin by using `loadPixels()` so we can manually write values into the p5.js pixel buffer.  
Every pixel is addressed using:


```
function draw() {
    loadPixels();

    for (var x = 0; x < width; x ++) {
        for (var y = 0; y < height; y++) {
            var index = (x + y * width) * 4;
            var r = random(255);
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
        }
       
    }

    updatePixels();
}
```

<img width="178" height="178" alt="Image" src="https://github.com/user-attachments/assets/1ac27375-01dc-4faf-b4c5-2ed382435927" />


The `* 4` accounts for RGBA channels.  
Using `random(255)` gives each pixel a completely unrelated grayscale value. Since every value is independent, the image looks like old black-and-white TV static.

**Key idea:** Random numbers = no continuity → visual chaos.

---

## 2. Switching to Perlin Noise
Instead of `random()`, we use p5’s built-in `noise()` function. Unlike random:

- `noise()` outputs values between `0` and `1`
- Adjacent inputs produce similar values
- It creates *smooth transitions* instead of abrupt jumps

This transforms the look from static to smooth gradients.

```
function draw() {
  
  var yoff = 0;
  loadPixels();
  for (var y = 0; y < height; y++) {
    var xoff = 0;
    for (var x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;

      xoff += inc;
    }
    yoff += inc;
  }

  updatePixels();
}
```


<img width="877" height="537" alt="Image" src="https://github.com/user-attachments/assets/5586db25-8776-46ac-b14f-c98b682dd592" />

---

