$(document).ready(function () {

    $("#uploadForm").submit(function(event) {
        event.preventDefault();
        $(".ImageRecognitionResults").empty();
        $(".PossibleRecipeResults").empty();
        var uploadForm = $("#uploadForm")[0];
        var formData = new FormData(uploadForm);
        $.ajax({
            url: "/upload",
            type: 'post',
            contentType: false,
            processData: false,
            async: false,
            data: formData,
            success: function(msg) {
                console.log(msg);
                $.ajax({
                    url: "http://524879d8.ngrok.io/test",
                    dataType: 'json',
                    async: false,
                    success: function(resp) {
                        console.log("there is success here");
                        console.log(resp);
                        for (var i =0;i<resp[2].length; i++) {
                            $(".ImageRecognitionResults").append("<li>" + resp[2][i] + "</li>")
                        }

                        for (var i =0;i<resp[0].length;i++) {
                            $(".PossibleRecipeResults").append("<li> <a href='" + resp[1][i] + "'>" + resp[0][i] + "</a></li>")

                        }
                    }
                }); 
            }
        });
    });


    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $("#preview").attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }

    }

    $("#upload-file-btn").change(function() {
        readURL(this);

    });



});