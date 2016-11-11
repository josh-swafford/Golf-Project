var numberOfHoles = 18;
var myPlace = {latitude: 40.4426135, longitude: -111.8621116, radius: 100};
var closeCourses;
var selectedCourse;
$( document ).ready(function() {
    $.post("https://golf-courses-api.herokuapp.com/courses", myPlace, function (data, status) {
        closeCourses = JSON.parse(data);
        for (var p in closeCourses.courses) {
            var selectInput = "<option value='" + closeCourses.courses[p].id + "'>" + closeCourses.courses[p].name + "</option>";
            $("#courseSelect").append(selectInput);
        }
    });
});




function loadCourses(courseId) {
    $("#teeTypes").html("");
    $.get("https://golf-courses-api.herokuapp.com/courses/" + courseId, function (data, status) {
        selectedCourse = JSON.parse(data);
        numberOfHoles = selectedCourse.course;
        $("#courseTitle").html(selectedCourse.course.name);
        for(var i = 0; i < (selectedCourse.course.holes[0].tee_boxes.length - 1); i++){
            var teeSelectInput = "<option value ='" + i + "'>" + selectedCourse.course.holes[0].tee_boxes[i].tee_type + "</option>";
            $("#teeTypes").append(teeSelectInput);
        }
    });
    console.log(courseId);
}


    function beginCard() {
        var players = $("#playerCount").val();
        $("#leftCard").html("");
        $("#container").css("display", "flex");
        for (var i = 0; i < players; i++) {
            var playerLabel =
                "<div id='playerLabel" + i + "'> Player" + (i + 1) + "<span id='glyphicon' class='fa fa-times-circle-o' aria-hidden='true' onclick='removePlayer(" + i + ")'</span></div>";
            $("#leftCard").append(playerLabel);
        }

        for (var c = 1; c <= numberOfHoles; c++) {
            $("#holeNumber").append("<div id='column" + c + "' class= 'holcol'><div class='colheader'>" + c + "</div></div>");
        }
        $(".modalbackground").fadeOut();
    }

    function removePlayer(theid) {
        $("#playerLabel" + theid).remove();
    }

