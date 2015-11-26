$(document).ready(function(){
    var word,all,layout;
    var inputbox=document.createElement("input");
    var inputlabel=document.createElement("label");
    inputlabel.innerHTML="All values";
    inputbox.type="checkbox";
    $("#controls").append(inputbox);
    $("#controls").append(inputlabel);
    $("#term").val('');
    $("#term").focusout(function(){
        word=$("#term").val();
    });
    $(inputbox).click(function(){
        all=$("input[type='checkbox']").is(":checked");
        if (all) {
            layout="xml";
        };
    });
    $("#lookup").click(
        function(){
            $.get("world.php?lookup="+word+"&"+"all="+all+"&"+"layout="+layout,function(data,status){
                alert(data);
        })
})
})