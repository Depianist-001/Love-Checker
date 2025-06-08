let hasSubmitted = false; 
    //this starts with false meaning that  "no submission has happened yet"
    //used to prevent the submit button from working more than once until reset

    function submit() {

      if(!hasSubmitted){
        // this conditions means: only run the following block is the form hasn't been submitted yet
        // !hasSubmitted means "not submitted yet" 
      var n = Math.floor(Math.random() * 100) + 1;
      document.getElementById("result").innerHTML = "Result: " + n + "%";
        document.getElementById("result").style.fontfamily = "fantasy";
      document.getElementById("result").style.fontSize = "1.7rem";
      document.getElementById("result").style.color = "#333";
      document.getElementById("result").style.textShadow = "2px 2px 2px #999";
      var comment = (n < 20)
        ? "Comment: Your rating is so poor 😢"
        : "Comment: Your rating is perfect!!😍";

      document.getElementById("comments").innerHTML = comment;
      document.getElementById("comments").style.fontSize = "1.5rem";
      document.getElementById("comments").style.color = "purple";
      document.getElementById("comments").style.fontFamily = "cursive";
      document.getElementById("comments").style.textShadow = "2px 2px 5px #000";
      hasSubmitted = true; //locks further submits
      //after displaying results and comments, this set the code to true
      // now if you click the submit again, nothing happens, the'ifhasSubmitted' won't allow it
      }
    }

    document.getElementById("reset").addEventListener("click", function(){
      //clear input
      document.getElementById("yourname").value = "";
      document.getElementById("name").value = "";
        //clear the result and the comment
      document.getElementById("result").innerHTML = "";
      document.getElementById("comments").innerHTML = "";
      //location.reload(); this is used to reload the entire page
      hasSubmitted = false;// this means when the reset is clicked it return false that 
      //no submission has been done yet
      
    });

    const mediaQuery = window.matchMedia("(max-width:700px)");
    //define the function that runs the screen size
    function handleScreenSize(e) {
      if(e<=mediaQuery) {

        console.log("screen detected");
        document.getElementById("comments").style.color = "yellow";
        document.getElementById("comments").style.fontSize = "1.2rem";
        document.getElementById("comments").style.textShadow = "1px 1px 3px #000";
        document.getElementById("result").style.fontSize = "1.2rem";
        document.getElementById("result").style.textShadow = "1px 1px 3px #000";
        document.getElementById("result").style.marginTop = "20px";
        document.getElementById("result").style.marginLeft = "10px";
      }else{
        console.log("screen not detected");
       document.getElementById("comments").style = submit();
       document.getElementById("result").style = submit();
      }
    }
    handleScreenSize(mediaQuery);/* what this does is that initially, the page load it manually
      calls the function handleScreenSize() we pass mediaQuery as the argument this lets the function
      check if the screen is currently <or = 700px rn, it then immediately applies the behaviour
       it matters because if you dont do this your changes wont apply untill the screen is resized*/
   mediaQuery.addEventListener("change", handleScreenSize);/* it tells the browser "hey run the handleScreenSize()"function 
   everytime the screen crosses the 700px mark. it covers situation like resising browser window
   rotating your phone, changing screen resolution the "change" the media query result*/