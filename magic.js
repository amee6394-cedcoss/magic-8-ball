        //**********************************global variable******************************************************
        var i = 0;
        //******************************************display Name function****************************
        function printname() {
            var bgm1 = document.getElementById("bgm");
            var a = document.getElementById("res").value;
            document.getElementById("demo").innerHTML = "Hello" + "Welcome " + " " + a + " " + "!";
            var html = "<tr><td>You don't have to pay any amount for the questions. You want to continue?</td></tr>'<br>'<tr><td><button id='btn' onclick=yes();image1();>yes</button></td></tr><tr><td><button id='btn1' onclick=no()>no</button></td></tr>"
            document.getElementById("table").innerHTML = html;
            bgm1.play();
            //*************************************display instruction*********************************
        }
        function yes() {
            document.getElementById("res").style.display = "none";
            document.getElementById("btn5").style.display = "none";
            var a = document.getElementById("res").value;
            document.getElementById("demo").innerHTML = " ";
            var html = "<tr><td><button id='btn3' onclick='next();trans2()'>Next</button></td></tr>";
            document.getElementById("table").innerHTML = html;
            document.getElementById("demo1").innerHTML = a + " " + "Read Instructions <br>1. CLICK ON <b>NEXT</b> IF YOU WANT TO CHANGE THE QUESTION<br>2. CLICK ON <b>SHUFFLE THE BALL</b> IF YOU WANT ANSWER.<br> 3. IF YOU WANT TO QUIT CLICK ON <b>QUIT</b>.";
        }
        //*************************display none function********************************************8
        function no() {
            document.getElementById("res").style.display = "none";
            document.getElementById("btn5").style.display = "none";
            var a = document.getElementById("res").value;
            document.getElementById("demo").innerHTML = " ";
            document.getElementById("res").value = " ";
            document.getElementById("demo1").innerHTML = " ";
            document.getElementById("demo2").innerHTML = " ";
            document.getElementById("demo3").innerHTML = " ";
            document.getElementById("loading").src = "";
            document.getElementById("loading1").src = "";
            document.getElementById("img1").src = "fortune3.gif";
            document.getElementById("table").innerHTML = " Thank you" + " " + a + " " + " Bye Good luck";
            var html = "<tr><td><button id='btn6' onclick='reset()'>Reset</button></td></tr>";
            document.getElementById("demo2").innerHTML = html;
        }
        //************************** display questions array*******************************************
        function next() {
            setTimeout(() => { document.getElementById("loading1").src = "load3.gif" }, 0000);
            setTimeout(() => { document.getElementById("loading1").src = "" }, 2000);
            var html = "<tr><td><button id='btn4' onclick='shuffle()'>SHUFFLE THE BALLS</button></td></tr><tr><td><button id='btn4' onclick='quit()'>Quit</button></td></tr>";
            document.getElementById("demo2").innerHTML = html;
            if (i < 12) {
                var userQuestion = ["Do I need to change my diet?", "Will I get the promotion at work?", "Will my ex come back into my life?", "will I get married?", "will I find a lover?", " will I find a job?", "Will I marry my boyfriend/girlfriend?", "Am I in the right career path?", "Will I ever be able to win the lottery?", "Will my boyfriend/girlfriend and I have children together?", "Will I get money from somewhere", "Will I get a sickness or disease", "Will I live a long life?"];
                setTimeout(() => { document.getElementById("demo1").innerHTML = userQuestion[i] }, 2000);
                i++;
                document.getElementById("demo3").innerHTML = "";
                document.getElementById("loading").src = "";
            }
            else {
                no();
            }
        }
        //*******************************************shuffling answers and display function********************************
        function shuffle() {
            var num = ["It is certain.", " It is decidedly so.", " Without a doubt.", "Yes – definitely", "You may rely on it.", " Reply hazy, try again.", " Ask again later.", "Better not tell you now.", " Cannot predict now.", "Concentrate and ask again.", "As I see it, yes.", "Most likely.", " Yes.", " Signs point to yes.", " Don't count on it.", " My reply is no.", " My sources say no.", "Very doubtful."];
            x = Math.floor(Math.random() * 17);
            setTimeout(() => { document.getElementById("demo3").innerHTML = num[x] }, 5000);
            setTimeout(() => { document.getElementById("loading").src = "load.gif" }, 1000);
            setTimeout(() => { document.getElementById("loading1").src = "load3.gif" }, 1000);
            setTimeout(() => { document.getElementById("loading").src = "" }, 5000);
            setTimeout(() => { document.getElementById("loading1").src = "" }, 5000);
        }
        //*************************************changing css image function ***************************************************
        function image() {
            document.getElementById("img1").src = "fortune1.gif";
        }
        function image1() {
            document.getElementById("img1").src = "fortune2.gif";
        }
        function quit() {
            no();
        }
        //*********************************transition css effect function********************************
        function trans() {
            document.getElementById("demo").style.transform = "scale(1, 1)";
            document.getElementById("table").style.transform = "scale(1, 1)";
        }
        function trans2() {
            document.getElementById("demo1").style.transform = "scale(1, 1)";
        }
        //****************************** reset function******************************
        function reset() {
            document.getElementById("demo").innerHTML = " ";
            document.getElementById("res").value = " ";
            document.getElementById("demo1").innerHTML = " ";
            document.getElementById("demo2").innerHTML = " ";
            document.getElementById("demo3").innerHTML = " ";
            document.getElementById("loading").src = "";
            document.getElementById("loading1").src = "";
            go();
        }
        //*******************************display starting blocks again***********************************
        function go() {
            document.getElementById("res").style.display = "initial";
            document.getElementById("btn5").style.display = "initial";
            document.getElementById("table").innerHTML = "";
        }