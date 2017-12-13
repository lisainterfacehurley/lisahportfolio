 var i= 0;  
            var images= [];
            var time= 3000;
            
                                 
            images[0] = "FlowersbyWhiteFence.jpg";
            images[1] = "RoundofFlowers.jpg";
            images[2] = "ColeusandElephantEars.jpg";
            images[3] = "TallRedZinnias.jpg";
            
             //change image
            function changeImg (){
            document.slide.src = images[i];
            
            if(i<images.length-1){
                i++;
            }else{
                i= 0;
            }
          
            setTimeout(changeImg, time);
            }
            window.onload = changeImg;
      