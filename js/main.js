$(document).ready(function() {
var btn1034 = $("#btn1034");
var btn1035 = $("#btn1035");
var btn1036 = $("#btn1036");
var btn1037 = $("#btn1037");
var btn1038 = $("#btn1038");
var btn1039 = $("#btn1039");
var btn1040 = $("#btn1040");
var btn1041 = $("#btn1041");
var btn1042 = $("#btn1042");
var btn1043 = $("#btn1043");
var btn1044 = $("#btn1044");
var btn1045 = $("#btn1045");
var btn1046 = $("#btn1046");
var btn1047 = $("#btn1047");
var btn1052 = $("#btn1052");
var btn1053 = $("#btn1053");
var btn1054 = $("#btn1054");
var btn1055 = $("#btn1055");
var btn1056 = $("#btn1056");
var btn1058 = $("#btn1058");
var btn1059 = $("#btn1059");
var btn1060 = $("#btn1060");
var btn1061 = $("#btn1061");
var btn1062 = $("#btn1062");
var btn1065 = $("#btn1065");
var btn1066 = $("#btn1066");
var btn1067 = $("#btn1067");
var btn1068 = $("#btn1068");
var btn1069 = $("#btn1069");
var btn1070 = $("#btn1070");
var btn1071 = $("#btn1071");
var btn1072 = $("#btn1072");
var cam = $("#camView");
var up = $("#up");
var down = $("#down");
var left = $("#left");
var right = $("#right");
var upLeft = $("#upLeft");
var upRight = $("#upRight");
var downLeft = $("#downLeft");
var downRight = $("#downRight");
var zoomIn = $("#zoomIn");
var zoomOut = $("#zoomOut");
var reset = $("#reset");
var camControl = $("#camControl-js")

btn1034.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.163/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");

//sends camera commands to IP camera inside classroom
//Ran out of time trying to figure out POST/GET requests for the camera API, so don't judge. If it's stupid and it works, it's not stupid, right? :) 
//Yes, it is insecure as all hell, blame 12 year old technology. -Justin
   up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.163/command/presetposition.cgi?HomePos=ptz-recall");
    });
    
});


btn1035.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.162/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");

    
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.162/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1036.on("click", function() {
    
//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.164/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");

   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.164/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1037.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.161/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");

   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.161/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1038.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.165/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.165/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1039.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.160/mjpeg");
 
//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.160/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1040.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.166/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.166/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1041.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.159/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");    
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.159/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1042.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.167/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.167/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1043.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.158/mjpeg");
 
//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.158/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1044.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.168/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.168/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1045.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.157/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.157/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1046.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.169/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.169/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1047.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.156/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.156/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1052.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.178/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.178/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1053.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.155/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.155/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1054.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.177/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.177/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1055.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.154/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.154/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1056.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.176/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.176/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1058.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.170/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.170/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1059.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.152/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.152/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1060.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.171/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.171/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1061.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.153/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.153/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1062.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.172/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.172/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1065.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.151/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.151/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1066.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.175/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.175/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1067.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.150/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.150/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1068.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.174/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.174/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1069.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.149/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.149/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1070.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.173/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.173/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1071.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.147/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");    
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.147/command/presetposition.cgi?HomePos=ptz-recall");
    });

});

btn1072.on("click", function() {

//attributes streaming source to camera iFrame
    cam.attr("src", "http://admin:admin@10.7.162.148/mjpeg");

//unhides the camera stream's iFrame and button controls
    $("#camBox-js").css("display", "flex");
    $(".cambtns-js").css("display", "flex");
   
//sends camera commands to IP camera inside classroom
    up.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0801");
    });


    down.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0201");
    });


    left.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0401");
    });


    right.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0601");
    });


    upLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0701");
    });


    upRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0901");
    });


    downLeft.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0101");
    });


    downRight.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?Relative=0301");
    });


    zoomIn.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?RelativeZoom=500");
    });


    zoomOut.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/ptzf.cgi?RelativeZoom=C000");
    });


    reset.on("click", function() {
        camControl.attr("src", "http://admin:admin@10.7.162.148/command/presetposition.cgi?HomePos=ptz-recall");
    });

});




});

