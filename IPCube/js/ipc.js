 var classes = ["seeFront", 
                           "seeBack", 
                           "seeTop", 
                           "seeBottom",
                           "seeLeft", 
                           "seeRight"];
            
            var side = 0;
            
            function nextSide(){
                $(".cube").removeClass(classes[side]);
                side = side + 1;
                if(side > 5){
                    side = 0;
                }
                $(".cube").addClass(classes[side]);
            }
            
            function prevSide(){
                $(".cube").removeClass(classes[side]);
                side = side - 1;
                if(side < 0){
                    side = 5;
                }
                $(".cube").addClass(classes[side]);
            }
            
            $("#next").click(nextSide);
            $("#prev").click(prevSide);