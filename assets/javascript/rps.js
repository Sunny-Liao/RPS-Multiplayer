    var computerChoice = null;
    var userChoice = null;

    $(document).ready(function() {

   

    $("#rock").click(function() {
        userChoice = "rock";
        newComputerChoice();
        computResult();
    });

    $("#paper").click(function() {
        userChoice = "paper";
        newComputerChoice();
        computResult();
    });

    $("#scissors").click(function() {
        userChoice = "scissors";
        newComputerChoice();
        computResult();
    });

    }

    );

    function newComputerChoice() {
        computerChoice = Math.floor(Math.random() * 3) + 1;  //returns a random integer from 1 to 3
                                                       //take the random number from computerChoice above and assign it rock paper scissors

                                                       
        if(computerChoice == 1) {
            computerChoice = "rock";
        }
        else if(computerChoice == 2) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
    
    }
    
    


    function computResult() {

        $("#computerPic").empty();
        var yourWins = 0;
        var yourLose = 0;
        var compWins = 0;
        var compLosses = 0;
        var result;
        if(userChoice == computerChoice) {
        $("#result").text("Tie!");
        }
        else if(userChoice == "rock" && computerChoice == "scissors") {
        $("#result").text("You win!");
            yourWins++; 
            compLosses++;
            if (document.getElementById("youWin").innerText==="")
            {
                
                document.getElementById("youWin").innerText=yourWins;
            }
            else
            {
                document.getElementById("youWin").innerText=yourWins + parseInt(document.getElementById("youWin").innerText);
            }
            if (document.getElementById("compLose").innerText==="")
            {
                
                document.getElementById("compLose").innerText=compLosses;
            }
            else
            {
                document.getElementById("compLose").innerText=compLosses + parseInt(document.getElementById("compLose").innerText);
            }
            //yourWins += yourWins;
            //compLosses += compLosses;
            //alert($("#youWin").text);
            //alert($("#compLose").text);          
        }
        else if (userChoice == "paper" && computerChoice == "rock") {
        $("#result").text("You win!");
            yourWins++ 
            compLosses++;
            //yourWins += yourWins;
            //compLosses += compLosses;
            if (document.getElementById("youWin").innerText==="")
            {
                
                document.getElementById("youWin").innerText=yourWins;
            }
            else
            {
                document.getElementById("youWin").innerText=yourWins + parseInt(document.getElementById("youWin").innerText);
            }
            if (document.getElementById("compLose").innerText==="")
            {
                
                document.getElementById("compLose").innerText=compLosses;
            }
            else
            {
                document.getElementById("compLose").innerText=compLosses + parseInt(document.getElementById("compLose").innerText);
            }
        }
        else if(userChoice == "scissors" && computerChoice == "paper") {
        $("#result").text("You win!");
            yourWins++ 
            compLosses++;
            //yourWins = yourWins + 1;
            //compLosses = compLosses +1;
            if (document.getElementById("youWin").innerText==="")
            {
                
                document.getElementById("youWin").innerText=yourWins;
            }
            else
            {
                document.getElementById("youWin").innerText=yourWins + parseInt(document.getElementById("youWin").innerText);
            }
            if (document.getElementById("compLose").innerText==="")
            {
                
                document.getElementById("compLose").innerText=compLosses;
            }
            else
            {
                document.getElementById("compLose").innerText=compLosses + parseInt(document.getElementById("compLose").innerText);
            }
        }
        else if(computerChoice == "rock" && userChoice == "scissors") {
        $("#result").text("Sorry, you lose.")
            yourLose++ 
            compWins++;
            //yourLose = yourLose + 1;
            //compWins = compWins + 1;
            if (document.getElementById("youLose").innerText==="")
            {
                
                document.getElementById("youLose").innerText=yourLose;
            }
            else
            {
                document.getElementById("youLose").innerText=yourLose + parseInt(document.getElementById("youLose").innerText);
            }
            if (document.getElementById("compWin").innerText==="")
            {
                
                document.getElementById("compWin").innerText=compWins;
            }
            else
            {
                document.getElementById("compWin").innerText=compWins + parseInt(document.getElementById("compWin").innerText);
            }
        }
        else if(computerChoice == "paper" && userChoice == "rock") {
        $("#result").text("Sorry, you lose")
            yourLose++ 
            compWins++;
            //yourLose = yourLose + 1;
            //compWins = compWins + 1;
            if (document.getElementById("youLose").innerText==="")
            {
                
                document.getElementById("youLose").innerText=yourLose;
            }
            else
            {
                document.getElementById("youLose").innerText=yourLose + parseInt(document.getElementById("youLose").innerText);
            }
            if (document.getElementById("compWin").innerText==="")
            {
                
                document.getElementById("compWin").innerText=compWins;
            }
            else
            {
                document.getElementById("compWin").innerText=compWins + parseInt(document.getElementById("compWin").innerText);
            }
        }
        else if(computerChoice == "scissors" && userChoice == "paper") {
        $("#result").text("Sorry, you lose.")
            yourLose++ 
            compWins++;
            //yourLose = yourLose + 1;
            //compWins = compWins + 1;
            if (document.getElementById("youLose").innerText==="")
            {
                
                document.getElementById("youLose").innerText=yourLose;
            }
            else
            {
                document.getElementById("youLose").innerText=yourLose + parseInt(document.getElementById("youLose").innerText);
            }
            if (document.getElementById("compWin").innerText==="")
            {
                
                document.getElementById("compWin").innerText=compWins;
            }
            else
            {
                document.getElementById("compWin").innerText=compWins + parseInt(document.getElementById("compWin").innerText);
            }
        }

        var computerPic=document.getElementById("result");
        var img=document.createElement("img");

        img.src=document.getElementById(computerChoice).src;
        $("#computerPic").append(img);

    }

    

   

    


