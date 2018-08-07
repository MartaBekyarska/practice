<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>
<div class="clock">
<div class="clock-face">
<div class="hand hour-hand"></div>
<div class="hand minute-hand"></div>
<div class="hand second-hand"></div>
</div>
</div>
<style>
html {
  background: #018DED url(http://unplash.it/1500/1000?image=881&blur=50);
  background-size: cover;
  font-family:"Helvetica neue";
  text-align: centre;
  font-size: 10px;
}
body {
  font-size: 2rem;
  display: flex;
  min-height: 100vh;
  align-items: centre;
}
.clock {
  width: 30rem;
  height: 30rem;
  border: 20px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
  box-shadow:
  0 0 0px 4px rgba(0,0,0,0.1),
  inset 0 0 0 3px #EFEFEF,
  inset 0 0 10px black,
  0 0 10px rgba(0,0,0,0.2);

}
.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
}

.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);

}

</style>

<script>



</script>
</body>
</html>
