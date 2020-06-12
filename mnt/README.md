# Place for your fake media files

* video: y4m,mjepg
* audio: wav

## Create fake video

<https://testrtc.com/y4m-video-chrome/>

```bash
ffmpeg -i YOUR-FILE-HERE.mp4 -pix_fmt yuv420p fake_video.y4m
sed -i '0,/C420mpeg2/s//C420/' fake_video.y4m
```

```bash
ffmpeg -i 1.y4m  -s 1920x1080 -r 25 -q:v 0 1.mjpeg
```
