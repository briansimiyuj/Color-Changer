[33mcommit 92eeea1a323b7c5e9ec430a37e060071c4ac101b[m
Author: briansimiyuj <briansimiyuj@gmail.com>
Date:   Tue Dec 29 14:25:36 2020 +0300

    Animation testing

[1mdiff --git a/animation.css b/animation.css[m
[1mindex 6ccf0f1..b4918a0 100644[m
[1m--- a/animation.css[m
[1m+++ b/animation.css[m
[36m@@ -22,3 +22,26 @@[m
 [m
 }[m
 [m
[32m+[m[32m@keyframes smallBox{[m
[32m+[m
[32m+[m[32m    0%{[m
[32m+[m[32m        background-color: blueviolet;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    25%{[m
[32m+[m[32m        background-color: pink;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    50%{[m
[32m+[m[32m        background-color: black;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    75%{[m
[32m+[m[32m        background-color: khaki;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    100%{[m
[32m+[m[32m        background-color: brown;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/index.html b/index.html[m
[1mindex 6bb8c8c..810c9a6 100644[m
[1m--- a/index.html[m
[1m+++ b/index.html[m
[36m@@ -46,4 +46,6 @@[m
 [m
 </body>[m
 [m
[32m+[m[32m<script src="script.js"></script>[m
[32m+[m
 </html>[m
\ No newline at end of file[m
[1mdiff --git a/script.js b/script.js[m
[1mnew file mode 100644[m
[1mindex 0000000..b6ccb22[m
[1m--- /dev/null[m
[1m+++ b/script.js[m
[36m@@ -0,0 +1,23 @@[m
[32m+[m[32mconst smalls = document.querySelectorAll(".small")[m
[32m+[m
[32m+[m[32mconsole.log(smalls)[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m[32mconst add = () =>{[m
[32m+[m
[32m+[m[32m       smalls.forEach(small => {[m
[32m+[m[41m           [m
[32m+[m[32m           setTimeout(() => {[m
[32m+[m[41m               [m
[32m+[m[32m            small.classList.replace("small", "test")[m
[32m+[m
[32m+[m[32m            console.log('working')[m
[32m+[m
[32m+[m[32m           }, 8000);[m[41m     [m
[32m+[m
[32m+[m[32m       })[m
[32m+[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32madd()[m
\ No newline at end of file[m
[1mdiff --git a/style.css b/style.css[m
[1mindex 3625d07..1d700f5 100644[m
[1m--- a/style.css[m
[1m+++ b/style.css[m
[36m@@ -24,8 +24,13 @@[m [mbody{[m
     height: 180px;[m
     background-color: blue;[m
     animation: smallBoxes 7s ease 2s infinite forwards ;[m
[32m+[m[41m    [m
 }  [m
 [m
[32m+[m[32m.test{[m
[32m+[m[32m    animation: smallBox 7s ease 2s infinite forwards ;[m
[32m+[m[32m}[m
[32m+[m
 .medium{[m
     height: 210px;[m
     background-color: green;[m
