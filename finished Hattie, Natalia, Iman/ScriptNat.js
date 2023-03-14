

    function myFunction() {
        const email = document.getElementById("JoinInput").value;
        var button = document.getElementById("JoinButton").onclick;
    
            console.log('Test');
        if (email.includes('@'))
        {
          alert("Thank you for joining our community!");
        } else {
          alert("Please enter a valid email.");
        }
      }
