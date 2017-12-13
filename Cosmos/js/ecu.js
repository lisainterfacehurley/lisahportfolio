 $("body").on("click", ".thumbnail", function(event){
                var newImage = $(this).attr("src");
                $("#bigImage").attr("src", newImage);
            });
            