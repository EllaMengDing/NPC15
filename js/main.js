var cost = 0;
var tuition =0; 
var fallArray = new Array();
var springArray = new Array();
var fallindex = -1; 
var springindex = -1; 
// All subtotal variables

var housingtotal = 0;
var mealtotal = 0;
var booksubtotal = 0;
var personalsubtotal = 0;
var transportationsubtotal = 0;
var miscellaneoussubtotal = 0;
var scholarshipsubtotal = 0;

//------------------------for help button------------------------

//------------------------for tuition help-----------------------
var f1 = false;
var f2 = false;
var f3 = false;
var f4 = false;
var f5 = false;
var f6 = false;
var f7 = false;
var f8 = false;

function resetAllfloat(){
    $("#questiontuition").parent().parent().parent().parent().removeClass("highlightcolor");
    $("#tuitionandfeefloat").addClass("floatlayerhidden");
    $("#tuitionandfeefloat").find("video").get(0).pause();
    $("#tuitionandfeefloat").find("video").get(0).currentTime = 0;

     //housing float and highlight reset
    $("#questionhousing").parent().parent().parent().removeClass("highlightcolor");
    $("#housingfloat").addClass("floatlayerhidden");
    $("#housingfloat").find("video").get(0).pause();
    $("#housingfloat").find("video").get(0).currentTime = 0;

    //meals float and highlight reset
    $("#questionmeals").parent().parent().parent().removeClass("highlightcolor");
    $("#mealsfloat").addClass("floatlayerhidden");
    $("#mealsfloat").find("video").get(0).pause();
    $("#mealsfloat").find("video").get(0).currentTime = 0;

    // books float and highlight reset
    $("#questionbooks").parent().parent().parent().removeClass("highlightcolor");
    $("#booksfloat").addClass("floatlayerhidden");
    $("#booksfloat").find("video").get(0).pause();
    $("#booksfloat").find("video").get(0).currentTime = 0;

    //personal float and highlight reset
    $("#questionpersonal").parent().parent().parent().removeClass("highlightcolor");
    $("#personalfloat").addClass("floatlayerhidden");
    $("#personalfloat").find("video").get(0).pause();
    $("#personalfloat").find("video").get(0).currentTime = 0;


    // transportation float and highlight reset
    $("#questiontransportation").parent().parent().parent().removeClass("highlightcolor");
    $("#transportationfloat").addClass("floatlayerhidden");
    $("#transportationfloat").find("video").get(0).pause();
    $("#transportationfloat").find("video").get(0).currentTime = 0;

    // miscellaneous float and highlight reset
    $("#questionmiscellaneous").parent().parent().parent().removeClass("highlightcolor");
    $("#miscellaneousfloat").addClass("floatlayerhidden");
    $("#miscellaneousfloat").find("video").get(0).pause();
    $("#miscellaneousfloat").find("video").get(0).currentTime = 0;

    // scholarship float and highlight reset
    $("#questionScholarship").parent().parent().parent().removeClass("highlightcolor");
    $("#scholarshipfloat").addClass("floatlayerhidden");
    $("#scholarshipfloat").find("video").get(0).pause();
    $("#scholarshipfloat").find("video").get(0).currentTime = 0;
}

function resetTuitionandfeefloat(){
    $("#questiontuition").parent().parent().parent().parent().removeClass("highlightcolor");
    $("#tuitionandfeefloat").addClass("floatlayerhidden");
    $("#tuitionandfeefloat").find("video").get(0).pause();
    $("#tuitionandfeefloat").find("video").get(0).currentTime = 0;
}

function resetHousingfloat(){
    $("#questionhousing").parent().parent().parent().removeClass("highlightcolor");
    $("#housingfloat").addClass("floatlayerhidden");
    $("#housingfloat").find("video").get(0).pause();
    $("#housingfloat").find("video").get(0).currentTime = 0;
}

function resetMealfloat(){
    $("#questionmeals").parent().parent().parent().removeClass("highlightcolor");
    $("#mealsfloat").addClass("floatlayerhidden");
    $("#mealsfloat").find("video").get(0).pause();
    $("#mealsfloat").find("video").get(0).currentTime = 0;
}

function resetBooksfloat(){
    $("#questionbooks").parent().parent().parent().removeClass("highlightcolor");
    $("#booksfloat").addClass("floatlayerhidden");
    $("#booksfloat").find("video").get(0).pause();
    $("#booksfloat").find("video").get(0).currentTime = 0;
}

function resetPersonalfloat(){
    $("#questionpersonal").parent().parent().parent().removeClass("highlightcolor");
    $("#personalfloat").addClass("floatlayerhidden");
    $("#personalfloat").find("video").get(0).pause();
    $("#personalfloat").find("video").get(0).currentTime = 0;
}

function resetTransportationfloat(){
    $("#questiontransportation").parent().parent().parent().removeClass("highlightcolor");
    $("#transportationfloat").addClass("floatlayerhidden");
    $("#transportationfloat").find("video").get(0).pause();
    $("#transportationfloat").find("video").get(0).currentTime = 0;
}

function resetMiscellaneousfloat(){
    $("#questionmiscellaneous").parent().parent().parent().removeClass("highlightcolor");
    $("#miscellaneousfloat").addClass("floatlayerhidden");
    $("#miscellaneousfloat").find("video").get(0).pause();
    $("#miscellaneousfloat").find("video").get(0).currentTime = 0;
}

function resetScholarshipfloat(){
    $("#questionScholarshi").parent().parent().parent().removeClass("highlightcolor");
    $("#scholarshipfloat").addClass("floatlayerhidden");
    $("#scholarshipfloat").find("video").get(0).pause();
    $("#scholarshipfloat").find("video").get(0).currentTime = 0;
}
//----------------------------------------for tuition help------------------------------------------
$(document).on('click', '#questiontuition', function(){
    if(f1=!f1){   
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;

        $("#tuitionandfeefloat").find("video").get(0).play();
        $("#questiontuition").parent().parent().parent().parent().addClass("highlightcolor");
        $("#tuitionandfeefloat").removeClass("floatlayerhidden");

        resetHousingfloat();
        resetMealfloat();
        resetBooksfloat();
        resetPersonalfloat();
        resetTransportationfloat();
        resetMiscellaneousfloat();
        resetScholarshipfloat();
    } 
    else{
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        resetAllfloat();
    }       
});

$(document).on('click', '#tuitionclose', function(){
    if(f1=false){
        f1=!f1;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
    }
    resetAllfloat();   
});

//-----------------------------------for housing help--------------------------------------------
$(document).on('click', '#questionhousing', function(){
    if(f2=!f2){
        f1 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        $("#housingfloat").find("video").get(0).play();
        $("#questionhousing").parent().parent().parent().addClass("highlightcolor");
        $("#housingfloat").removeClass("floatlayerhidden");
    
        resetTuitionandfeefloat();
        resetMealfloat();
        resetBooksfloat();
        resetPersonalfloat();
        resetTransportationfloat();
        resetMiscellaneousfloat(); 
        resetScholarshipfloat();      
    }
    else{
        f1 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        resetAllfloat();
    }   
});

$(document).on('click', '#housingclose', function(){
    if(f2=false){
        f2=!f2;
        f1 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
    }   
    resetAllfloat();
});

//-----------------------------------------for meals help---------------------------------------
$(document).on('click', '#questionmeals', function(){
    if(f3=!f3){
        f1 = false;
        f2 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        $("#mealsfloat").find("video").get(0).play();
        $("#questionmeals").parent().parent().parent().addClass("highlightcolor");
        $("#mealsfloat").removeClass("floatlayerhidden");

        resetTuitionandfeefloat();
        resetHousingfloat();
        resetBooksfloat();
        resetPersonalfloat();
        resetTransportationfloat();
        resetMiscellaneousfloat();
        resetScholarshipfloat();
    }
    else{   
        f1 = false;
        f2 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        resetAllfloat();
    }   
});

$(document).on('click', '#mealsclose', function(){
    if(f3=false){
        f3=!f3;
        f1 = false;
        f2 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
    }
    resetAllfloat();  
});

//--------------------------------------for books help-------------------------------------
$(document).on('click', '#questionbooks', function(){
     if(f4=!f4){
        f1 = false;
        f2 = false;
        f3 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        $("#booksfloat").find("video").get(0).play();
        $("#questionbooks").parent().parent().parent().addClass("highlightcolor");
        $("#booksfloat").removeClass("floatlayerhidden");

        resetTuitionandfeefloat();
        resetHousingfloat();
        resetMealfloat();
        resetPersonalfloat();
        resetTransportationfloat();
        resetMiscellaneousfloat();
        resetScholarshipfloat();
     }
     else{     
        f1 = false;
        f2 = false;
        f3 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        resetAllfloat();
     }   
});

$(document).on('click', '#booksclose', function(){
    if(f4=false){
        f4=!f4;
        f1 = false;
        f2 = false;
        f3 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        f8 = false;
    }    
        resetAllfloat();
});

//---------------------------------------for personal help------------------------------------------
$(document).on('click', '#questionpersonal', function(){
    if(f5=!f5){
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f6 = false;
        f7 = false;
        f8 = false;
        $("#personalfloat").find("video").get(0).play();
        $("#questionpersonal").parent().parent().parent().addClass("highlightcolor");
        $("#personalfloat").removeClass("floatlayerhidden");

        resetTuitionandfeefloat();
        resetHousingfloat();
        resetMealfloat();
        resetBooksfloat();
        resetTransportationfloat();
        resetMiscellaneousfloat();
        resetScholarshipfloat();
     }   
    else{      
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f6 = false;
        f7 = false;  
        f8 = false;      
        resetAllfloat();
        }    
});

$(document).on('click', '#personalclose', function(){
    if(f5=false){
        f5=!f5;
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f6 = false;
        f7 = false;
        f8 = false;
    } 
     resetAllfloat();
});
//---------------------------------------for transportaton help-------------------------------------
$(document).on('click', '#questiontransportation', function(){
     if(f6=!f6){
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f7 = false;
        f8 = false;
        $("#transportationfloat").find("video").get(0).play();
        $("#questiontransportation").parent().parent().parent().addClass("highlightcolor");
        $("#transportationfloat").removeClass("floatlayerhidden");
        
        resetTuitionandfeefloat();
        resetHousingfloat();
        resetMealfloat();
        resetBooksfloat();
        resetPersonalfloat();
        resetMiscellaneousfloat();
        resetScholarshipfloat();
     }
     else{
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f7 = false;
        f8 = false;       
        resetAllfloat();
     }   
});

$(document).on('click', '#transportationclose', function(){
    if(f6=false){
        f6=!f6;
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f7 = false;
        f8 = false;
    }
    resetAllfloat();        
});

//------------------------------------------for miscellaneous help----------------------------------
$(document).on('click', '#questionmiscellaneous', function(){
     if(f7=!f7){
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f8 = false;
        $("#miscellaneousfloat").find("video").get(0).play();

        $("#questionmiscellaneous").parent().parent().parent().addClass("highlightcolor");
        $("#miscellaneousfloat").removeClass("floatlayerhidden");

        resetTuitionandfeefloat();
        resetHousingfloat();
        resetMealfloat();
        resetBooksfloat();
        resetPersonalfloat();
        resetTransportationfloat();
        resetScholarshipfloat();
     }
     else{
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f8 = false;
        resetAllfloat();
     }    
});

$(document).on('click', '#miscellaneousclose', function(){
    if(f7=false){
        f7=!f7;
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f8 = false;
    }
        resetAllfloat();       
});

//------------------------------------------for scholarship help----------------------------------
$(document).on('click', '#questionScholarship', function(){
     if(f8=!f8){
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        $("#scholarshipfloat").find("video").get(0).play();

        $("#questionScholarship").parent().parent().parent().addClass("highlightcolor");
        $("#scholarshipfloat").removeClass("floatlayerhidden");

        resetTuitionandfeefloat();
        resetHousingfloat();
        resetMealfloat();
        resetBooksfloat();
        resetPersonalfloat();
        resetTransportationfloat();
        resetMiscellaneousfloat();
     }
     else{
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
        resetAllfloat();
     }    
});

$(document).on('click', '#scholarshipclose', function(){
    if(f8=false){
        f8=!f8;
        f1 = false;
        f2 = false;
        f3 = false;
        f4 = false;
        f5 = false;
        f6 = false;
        f7 = false;
    }
        resetAllfloat();       
});
//--------------------------------------for total------------------------------------------
$("#cost").html("4,754");

function gettotal(){
     $("#cost").html("0");
        
       var costtotal = Number($("#miscellaneoussubtotal").html().replace(/,/, ""))+
                       Number($("#transportationsubtotal").html().replace(/,/, ""))+
                       Number($("#personalsubtotal").html().replace(/,/, ""))+
                       Number($("#booksubtotal").html().replace(/,/, ""))+
                       Number($("#mealsubtotal").html().replace(/,/, ""))+
                       Number($("#housingsubtotal").html().replace(/,/, ""))+
                       Number($("#tuitionsubtotal").html().replace(/,/, ""));
      
      $("#cost").empty();
      $("#cost").html(costtotal.toLocaleString()); 
};

//------------------------------------------for fall term tuition--------------------------------
function numberNot(e){
//Numeric values only allowed (Without Decimal Point)
$(e).on("keypress keyup blur",function (event) {    
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });
  
};

numberNot("#fallcredit");
numberNot("#springcredit");

var fallArrayin = new Array();
var springArrayin = new Array();
var fallArrayout = new Array();
var springArrayout = new Array(); 
    
var inStatefall=0;
var outStatefall=0;
var inStatespring=0;
var outStatespring=0;
var infallindex = -1; 
var inspringindex = -1; 
var outfallindex = -1; 
var outspringindex = -1; 

var inStateSubtotal=0;
var outStateSubtotal=0;

function getinStatefall(){       
        var credit  = $("#fallcredit").val();
        var courses = $("#fallcourse").val();
        var state = $("#fallcourse").find("option:selected").attr("state");
        inStatefall=0;
        if(state == "inState"){
        var fallstate = credit * courses;
        fallArrayin.push(fallstate);
        for (var i = 0; i < fallArrayin.length; i++) {
           inStatefall += fallArrayin[i];
          }     
         infallindex++;
         }       
     }

function getoutStatefall(){
          var credit  = $("#fallcredit").val();
          var courses = $("#fallcourse").val();  
          var state = $("#fallcourse").find("option:selected").attr("state");
          outStatefall=0;
          if(state == "outOfState"){
          var fallstate = credit * courses;
          fallArrayout.push(fallstate);
          for (var i = 0; i < fallArrayout.length; i++) {
           outStatefall += fallArrayout[i];
          }

          outfallindex++;
         }       
}

function getinStatespring(){        
        var credit  = $("#springcredit").val();
        var courses = $("#springcourse").val();
        var state = $("#springcourse").find("option:selected").attr("state");
        inStatespring=0;
        if(state == "inState"){
        var springstate = credit * courses;
        springArrayin.push(springstate);
        for (var i = 0; i < springArrayin.length; i++) {
           inStatespring += springArrayin[i];
          }
         inspringindex++;
         }      
     }

function getoutStatespring(){
          var credit  = $("#springcredit").val();
          var courses = $("#springcourse").val();  
          var state = $("#springcourse").find("option:selected").attr("state");
          outStatespring=0;
          if(state == "outOfState"){
          var springstate = credit * courses;
          springArrayout.push(springstate);
          for (var i = 0; i < springArrayout.length; i++) {
           outStatespring += springArrayout[i];
          }
          outspringindex++;
         }       
}

$(document).on('click', '#falladd', function(){        
         var fallterm = 0;
         var tuition = 0;
         var credit  = $("#fallcredit").val();
         var courses = $("#fallcourse").val();
         var coursename = $("#fallcourse").find("option:selected").attr("coursename");
         var state = $("#fallcourse").find("option:selected").attr("state");
         var falltuition = credit * courses;               

    if(credit == '' || credit <= 0 || courses == 0){
        alert("Please input available credit hours and course!");
       
    }else{      
        getinStatefall();
        getoutStatefall();

         $("#fallsubtotal").empty();
         $("#tuitionsubtotal").empty();
         fallArray.push(falltuition);
         for (var i = 0; i < fallArray.length; i++) {      
            fallterm += fallArray[i];
          }  
         fallindex++;

         $("#fallsubtotal").append(fallterm.toLocaleString());
         $("#falllist").append("<p class='textfix'><button class='fas fa-trash-alt text-success' name="+fallindex+" id='falldelete' state="+state+" instateindex="+infallindex+" outstateindex="+outfallindex+" sum="+falltuition+"></button> "+credit+" credit hours of " +coursename+ " ($"+falltuition.toLocaleString()+ ")"+"</p>")
         $("#tuitionsubtotal").append(tuition);  
         $("#fallcredit").val("");
         $("#fallcourse").find('option').get(0).selected=true; 
         tuition = Number($("#fallsubtotal").html().replace(/,/,"")) + Number($("#springsubtotal").html().replace(/,/,""));
         tuitionformat = tuition.toLocaleString();
         $("#tuitionsubtotal").html(tuitionformat);

         gettotal();
        
         $(document).on('click', '#falldelete', function(){             
                if($(this).attr("state")=="inState"){
                    
                    inStatefall=0;
                    var index = $(this).attr("instateindex");
                    fallArrayin[index]=0;
                    for (var i = 0; i < fallArrayin.length; i++) {
                       inStatefall += fallArrayin[i];
                      }
                }

                if($(this).attr("state")=="outOfState"){

                    outStatefall=0;
                    var index = $(this).attr("outstateindex");
                    fallArrayout[index]=0;
                    for (var i = 0; i < fallArrayout.length; i++) {
                       outStatefall += fallArrayout[i];
                      }                   
                }
               
                var fallterm = 0;
                $(this).parent().remove();
                arrayindex = $(this).attr("name");
                fallArray[arrayindex] = 0;            
                for (var i = 0; i < fallArray.length; i++) {
                     fallterm += fallArray[i];             
                }
               
                $("#fallsubtotal").empty();         
                $("#fallsubtotal").append(fallterm.toLocaleString());
                tuition = Number($("#fallsubtotal").html().replace(/,/,"")) + Number($("#springsubtotal").html().replace(/,/,""));
                tuitionformat = tuition.toLocaleString();
                $("#tuitionsubtotal").html(tuitionformat);
   
                 if($("#fallsubtotal").html() != 0){
                    $("#forfall").css("color","#3f8928");
                  } 
                  else{
                    $("#forfall").css("color","red");
                  }

                  if($("#tuitionsubtotal").html() != 0){     
                     $("#fortuition").css("color","#3f8928");   
                  } 
                  else{
                     $("#fortuition").css("color","red");
                  }

                 gettotal();
                           
          });       
    }

            if($("#tuitionsubtotal").html() != 0){
                    $("#forfall").css("color","#3f8928");
                    $("#fortuition").css("color","#3f8928");   
            } 
            else{
                   $("#forfall").css("color","red");
                   $("#fortuition").css("color","red");
            }

           	gettotal(); 
                

}); 


//------------------------------------------ for spring term tuition -----------------------------------        
$(document).on('click', '#springadd', function(){
         var springterm = 0;
         var tuition = 0;
         var credit  = $("#springcredit").val();
         var courses = $("#springcourse").val();
         var coursename = $("#springcourse").find("option:selected").attr("coursename");
         var springtuition = credit * courses;
         //var inStateTuition = 0; 
         var state = $("#springcourse").find("option:selected").attr("state");
         
       if(credit == '' || credit <= 0 || courses == 0){
            alert("Please input available credit hours and course!");
        }
       else{ 

             getinStatespring();
             getoutStatespring();

             $("#springsubtotal").empty();
             $("#tuitionsubtotal").empty();
             springArray.push(springtuition);
             
             for (var i = 0; i < springArray.length; i++) {
                springterm += springArray[i];
             }            
             springindex++;
             $("#springsubtotal").append(springterm.toLocaleString());
             $("#springlist").append("<p class='textfix'><button class='fas fa-trash-alt text-success' name="+springindex+" id='springdelete' state="+state+" instateindex="+inspringindex+" outstateindex="+outspringindex+" sum="+springtuition+"></button> "+credit+" credit hours of " +coursename+ " ($"+springtuition.toLocaleString()+ ")"+"</p>")
             $("#tuitionsubtotal").append(tuition);  
             $("#springcredit").val("");
             $("#springcourse").find('option').get(0).selected=true; 
             tuition = Number($("#fallsubtotal").html().replace(/,/,"")) + Number($("#springsubtotal").html().replace(/,/,""));
             tuitionformat = tuition.toLocaleString();
             $("#tuitionsubtotal").html(tuitionformat);
             gettotal();


             $(document).on('click', '#springdelete', function(){


                if($(this).attr("state")=="inState"){
                    
                    inStatespring=0;
                    var index = $(this).attr("instateindex");
                    springArrayin[index]=0;
                    for (var i = 0; i < springArrayin.length; i++) {
                       inStatespring += springArrayin[i];
                      }

                }

                if($(this).attr("state")=="outOfState"){

                    outStatespring=0;
                    var index = $(this).attr("outstateindex");
                    springArrayout[index]=0;
                    for (var i = 0; i < springArrayout.length; i++) {
                       outStatespring += springArrayout[i];
                      }
                }

                var springterm = 0;
                $(this).parent().remove();
                arrayindex = $(this).attr("name");
                springArray[arrayindex] = 0;
                
                for (var i = 0; i < springArray.length; i++) {
                    springterm += springArray[i];
                }
               
                $("#springsubtotal").empty();
                $("#springsubtotal").append(springterm.toLocaleString());
                tuition = Number($("#fallsubtotal").html().replace(/,/,"")) + Number($("#springsubtotal").html().replace(/,/,""));
                tuitionformat = tuition.toLocaleString();
                $("#tuitionsubtotal").html(tuitionformat);

                
                 if($("#springsubtotal").html() != 0){
                    $("#forspring").css("color","#3f8928");  
                  } 
                  else{
                    $("#forspring").css("color","red");
                  }  

                  if($("#tuitionsubtotal").html() != 0){       
                     $("#fortuition").css("color","#3f8928");   
                  } 
                  else{              
                     $("#fortuition").css("color","red");
                  }

               	 gettotal();
                                  
            });
        }


            if($("#tuitionsubtotal").html() != 0){
                    $("#forspring").css("color","#3f8928");
                    $("#fortuition").css("color","#3f8928");   
            } 
            else{
                   $("#forspring").css("color","red");
                   $("#fortuition").css("color","red");
            }
           gettotal(); 
           
}); 

// ------------------------------get in state and out of state ----------------------------
function getinState(){
     var inState=0;
     inStatefall=0;
     inStatespring=0;
     for (var i = 0; i < fallArrayin.length; i++) {
        inStatefall += fallArrayin[i];
        }
     for (var i = 0; i < springArrayin.length; i++) {
        inStatespring += springArrayin[i];
        }

    inState = Number(inStatefall) + Number(inStatespring);
    return inState;

};


function getoutState(){
     var outState=0;
     outStatefall=0;
     outStatespring=0;
     for (var i = 0; i < fallArrayout.length; i++) {
        outStatefall += fallArrayout[i];
        }
     for (var i = 0; i < springArrayout.length; i++) {
        outStatespring += springArrayout[i];
        }

    outState = Number(outStatefall) + Number(outStatespring);
    return outState;

};


//--------------------------------------- for housing---------------------------------
var rent;
var utilities;
var housemaintenance;

$(document).on('change', '#housingoptions', function(){   
    //append three input fields
     if( $("#housingoptions option:selected").attr("name") == "Off-Campus"){
        
        $("#offcampus").html('<div class="col-lg-2" style="margin-left: -5px;">'+
                                    '<label>Rent Room</label>'+
                                    '<input type="text" class="form-control" id="rent">'+
                               '</div>'+
                               '<div class="col-lg-2" id="forutility">'+
                                     '<label>Utilities</label>'+
                                     '<input type="text" class="form-control" id="utilities">'+
                               '</div>'+
                               '<div class="col-lg-4" id="forMaintenance">'+
                                     '<label>Maintenance, furnishings, taxes</label>'+
                                     '<input type="text" class="form-control" id="housemaintenance">'+
                               '</div>'+
                               '<div class="col-lg-4 text-right initialzero" id="forhousing">'+
                                 
                                  '<h5 class="calculate" style="padding-top: 48px" >Subtotal : $<span id="housingsubtotal">0</span></h5>'+ 
                             
                               '</div>'

                               );

        $("#forhousingup").empty();
        $("#housingsubtotal").html(0);
        $("#housingsubtotal").css("padding-top","48px"); 

      }


//----------------------------------for oncampus-----------------------------------------      
      else{
         $("#forhousingup").empty();   
         $("#forhousingup").append('<div id="forhousing">'+
                                    '<h5 class="calculate" style="padding-top: 18px" >Subtotal : $<span id="housingsubtotal">0</span></h5>'+ 
                                   '</div>');

         $("#offcampus").empty();
         var oncampus = Number($("#housingoptions option:selected").val());
         housingtotal = oncampus.toLocaleString();
         $("#housingsubtotal").empty();
         $("#housingsubtotal").html(housingtotal);    

         if( $("#housingsubtotal").html() != 0){
            $("#forhousing").css("color","#3f8928");    
         } 
         else{
           $("#forhousing").css("color","red");
         }

         gettotal(); 

      }     

});

 //------------------------------------for offcampus------------------------------------------
        $(document).on('input propertychange', '#rent', function(){
            numberNot("#rent");
           // Use RegExp.test(inStr) to check if inStr contains the pattern
                if(!(/^[0-9]+$/.test($(this).val()))){
                    $(this).val("");
                 }
                rent = Number($(this).val());
                utilities = Number($("#utilities").val());
                housemaintenance = Number($("#housemaintenance").val());
                
                hoursingtotal = (rent + utilities + housemaintenance).toLocaleString();
                $("#housingsubtotal").html(hoursingtotal);

                if( $("#housingsubtotal").html() != 0){
                  $("#forhousing").css("color","#3f8928");    
                }
                if($("#housingsubtotal").html() == 0){
                  $("#forhousing").css("color","red"); 
                }
                
           		gettotal();         
        });

        $(document).on('input propertychange', '#utilities', function(){
                numberNot("#utilities");
                if(!(/^[0-9]+$/.test($(this).val()))){
                    $(this).val("");
                 }
            
                rent = Number($("#rent").val());
                utilities = Number($(this).val());
                housemaintenance = Number($("#housemaintenance").val());
                 
                hoursingtotal = (rent + utilities + housemaintenance).toLocaleString();
                $("#housingsubtotal").html(hoursingtotal);

                if($("#housingsubtotal").html() != 0){
                    $("#forhousing").css("color","#3f8928");    
                 }
                 else{
                  $("#forhousing").css("color","red"); 
                }
                
           		gettotal(); 
        });

        $(document).on('input propertychange', '#housemaintenance', function(){
               numberNot("#housemaintenance");
               if(!(/^[0-9]+$/.test($(this).val()))){
                    $(this).val("");
                 }
                 
                rent = Number($("#rent").val());
                utilities = Number($("#utilities").val());
                housemaintenance = Number($(this).val());
                
                hoursingtotal = (rent + utilities + housemaintenance).toLocaleString();
                $("#housingsubtotal").html(hoursingtotal);

                if($("#housingsubtotal").html() != 0){
                  $("#forhousing").css("color","#3f8928");    
                 }
                 else{
                  $("#forhousing").css("color","red"); 
                }
                 
           		gettotal(); 
        });

//--------------------------------------------for meal--------------------------------------------
var mealplan;
var groceries;
var eatingout;

numberNot("#groceries");
numberNot("#eatingout");

$(document).on('change', '#mealoptions', function(){ 
     mealplan = Number($("#mealoptions option:selected").val());
     groceries = Number($("#groceries").val());
     eatingout = Number($("#eatingout").val());
     mealtotal = (mealplan + groceries + eatingout).toLocaleString();
     $("#mealsubtotal").html(mealtotal);
     
     if(mealtotal != 0){
      $("#formeal").css("color","#3f8928");    
     }
     else{
      $("#formeal").css("color","red"); 
     }
     gettotal(); 
});


$(document).on('input propertychange', '#groceries', function(){    
        mealplan = Number($("#mealoptions option:selected").val());
        groceries = Number($(this).val());
        eatingout = Number($("#eatingout").val());
       
        mealtotal = (mealplan + groceries + eatingout).toLocaleString();
        $("#mealsubtotal").html(mealtotal);
            
        if(mealtotal != 0){
          $("#formeal").css("color","#3f8928");    
        }
        else{
          $("#formeal").css("color","red"); 
        }
        
        gettotal(); 
});


$(document).on('input propertychange', '#eatingout', function(){     
        mealplan = Number($("#mealoptions option:selected").val());
        groceries = Number($("#groceries").val());
        eatingout = Number($(this).val());
        
        mealtotal = (mealplan + groceries + eatingout).toLocaleString();
        $("#mealsubtotal").html(mealtotal);

        if(mealtotal != 0){
          $("#formeal").css("color","#3f8928");    
        }
        else{
          $("#formeal").css("color","red"); 
        }
        
   		gettotal(); 
});


//----------------------------------------- for books-------------------------------------
var estimatedbook = $("#estimatedbook:radio:checked").val();  
$("#booksubtotal").html(estimatedbook); 

$(document).on('click', '#estimatedbook', function(){
   var estimatedbook = $("#estimatedbook:radio:checked").val().toLocaleString();     
   $("#booksubtotal").html(estimatedbook);  
   gettotal(); 
});


var book;
var supplies;
numberNot("#book");
numberNot("#supplies");

$("#book").focus(function(){
    $("#selfbook").prop("checked",true);
    $("#estimatedbook").prop("checked",false);
    book = Number($("#book").val());
    supplies = Number($("#supplies").val());     
    booksubtotal = book + supplies;  
    $("#booksubtotal").html(booksubtotal.toLocaleString());

    if(booksubtotal != 0){
      $("#forbook").css("color","#3f8928");          
    }
    else{
      $("#forbook").css("color","red");         
    } 

    gettotal(); 
});


$("#supplies").focus(function(){
    $("#selfbook").prop("checked",true);
    $("#estimatedbook").prop("checked",false);
    if(booksubtotal != 0){
      $("#forbook").css("color","#3f8928");           
    }
    else{
      $("#forbook").css("color","red"); 
    } 
    book = Number($("#book").val());
    supplies = Number($("#supplies").val());
      
    booksubtotal = book + supplies;
    $("#booksubtotal").html(booksubtotal.toLocaleString());
     
    if(booksubtotal != 0){
      $("#forbook").css("color","#3f8928");   
          
    }
    else{
      $("#forbook").css("color","red"); 
	} 

    gettotal(); 
});


    
$(document).on('input propertychange', '#book', function(){
        $("#estimatedbook").prop("checked",false);
        book = Number($(this).val());
        supplies = Number($("#supplies").val());  
        booksubtotal = book + supplies;

        if(booksubtotal != 0){
          $("#forbook").css("color","#3f8928");          
        }
        else{
          $("#forbook").css("color","red");         
        } 

        $("#booksubtotal").html(booksubtotal.toLocaleString());
        
   		gettotal();         
});


$(document).on('input propertychange', '#supplies', function(){     
        $("#estimatedbook").prop("checked",false);
        book = Number($("#book").val());
        supplies = Number($(this).val());      
        booksubtotal = book + supplies;
        
        if(booksubtotal != 0){
          $("#forbook").css("color","#3f8928");          
        }
        else{
          $("#forbook").css("color","red"); 
          
        } 
        
        $("#booksubtotal").html(booksubtotal.toLocaleString());
   
   		gettotal();         
});


$(document).on('click', '#estimatedbook', function(){      
        $("#selfbook").prop("checked",false);
        $("#book").val("");
        $("#supplies").val("");

        if(booksubtotal != 0){
          $("#forbook").css("color","#3f8928");    
        }
        else{
          $("#forbook").css("color","red"); 
        }
  		gettotal();

}); 

$(document).on('click', '#selfbook', function(){        
        $("#estimatedbook").prop("checked",false);       
        book = Number($("#book").val());
        supplies = Number($("#supplies").val());
        var  booksubtotal = book + supplies;
        $("#booksubtotal").html(booksubtotal.toLocaleString());

        if(booksubtotal != 0){
          $("#forbook").css("color","#3f8928");         
        }
        else{
          $("#forbook").css("color","red");       
        } 
        
   		gettotal();
}); 

//----------------------------------------for personal-------------------------------------

var estimatedpersonal = $("#estimatedpersonal:radio:checked").val();
$("#personalsubtotal").html(estimatedpersonal);  

$(document).on('click', '#estimatedpersonal', function(){
     var estimatedpersonal = $("#estimatedpersonal:radio:checked").val();
     $("#personalsubtotal").html(estimatedpersonal);     
     gettotal(); 
});


var laundry;
var medicalcare;
var entertainment;
var clothing;
var phoneservice;
var creditcard;
var insurance;
var personalsubtotal;

numberNot("#laundry");
numberNot("#medicalcare");
numberNot("#entertainment");
numberNot("#clothing");
numberNot("#phoneservice");
numberNot("#creditcard");
numberNot("#insurance");


function inputPersonal(e){
        laundry = Number($("#laundry").val());
        medicalcare = Number($("#medicalcare").val());
        entertainment = Number($("#entertainment").val());
        clothing = Number($("#clothing").val());
        phoneservice = Number($("#phoneservice").val());
        creditcard = Number($("#creditcard").val());
        insurance = Number($("#insurance").val());
        
        personalsubtotal  = (laundry
                              + medicalcare
                              + entertainment
                              + clothing
                              + phoneservice
                              + creditcard
                              + insurance).toLocaleString();

            $("#personalsubtotal").html(personalsubtotal);

            if($("#personalsubtotal").html() != 0){
              $("#forpersonal").css("color","#3f8928");    
            }
            else{
              $("#forpersonal").css("color","red"); 
            }
        
};

$("#laundry").focus(function(){
    $("#personalitems").prop("checked",true);
    $("#estimatedpersonal").prop("checked",false);
    inputPersonal('#laundry');
});
$(document).on('input propertychange', '#laundry', function(){
  $("#estimatedpersonal").prop("checked",false);
   inputPersonal('#laundry');
   gettotal();         
});


$("#medicalcare").focus(function(){
    $("#personalitems").prop("checked",true);
    $("#estimatedpersonal").prop("checked",false);
    inputPersonal('#medicalcare');
});
$(document).on('input propertychange', '#medicalcare', function(){
   inputPersonal('#medicalcare');
   gettotal();        
});


$("#entertainment").focus(function(){
    $("#personalitems").prop("checked",true);
    $("#estimatedpersonal").prop("checked",false);
    inputPersonal('#entertainment');
});
$(document).on('input propertychange', '#entertainment', function(){
   inputPersonal('#entertainment');
   gettotal();         
});


$("#clothing").focus(function(){
    $("#personalitems").prop("checked",true);
    $("#estimatedpersonal").prop("checked",false);
    inputPersonal('#clothing');
});
$(document).on('input propertychange', '#clothing', function(){
   inputPersonal('#clothing');
   gettotal();         
});


$("#phoneservice").focus(function(){
    $("#personalitems").prop("checked",true);
    $("#estimatedpersonal").prop("checked",false);
    inputPersonal('#phoneservice');
});
$(document).on('input propertychange', '#phoneservice', function(){
   inputPersonal('#phoneservice');
   gettotal();        
});


$("#creditcard").focus(function(){
    $("#personalitems").prop("checked",true);
    $("#estimatedpersonal").prop("checked",false);
    inputPersonal('#creditcard');
});
$(document).on('input propertychange', '#creditcard', function(){
   inputPersonal('#creditcard');
   gettotal();         
});


$("#insurance").focus(function(){
    $("#personalitems").prop("checked",true);
    $("#estimatedpersonal").prop("checked",false);
     inputPersonal('#creditcard');
});
$(document).on('input propertychange', '#insurance', function(){
   inputPersonal('#creditcard');
   gettotal();         
});


$(document).on('click', '#estimatedpersonal', function(){
        $("#personalitems").prop("checked",false);
        $("#laundry").val("");
        $("#medicalcare").val("");
        $("#entertainment").val("");
        $("#clothing").val("");
        $("#phoneservice").val("");
        $("#creditcard").val("");
        $("#insurance").val("");

        if($("#personalsubtotal").html() != 0){
           $("#forpersonal").css("color","#3f8928");    
        }
        else{
           $("#forpersonal").css("color","red"); 
        }
   		gettotal();
});

$(document).on('click', '#personalitems', function(){
        laundry = Number($("#laundry").val());
        medicalcare = Number($("#medicalcare").val());
        entertainment = Number($("#entertainment").val());
        clothing = Number($("#clothing").val());
        phoneservice = Number($("#phoneservice").val());
        creditcard = Number($("#creditcard").val());
        insurance = Number($("#insurance").val());

       personalsubtotal  = laundry
                              + medicalcare
                              + entertainment
                              + clothing
                              + phoneservice
                              + creditcard
                              + insurance;

            $("#personalsubtotal").html(personalsubtotal);
            $("#forpersonal").css("color","red"); 

            if($("#personalsubtotal").html() != 0){
	              $("#forpersonal").css("color","#3f8928");    
	        }
	        else{
	              $("#forpersonal").css("color","red"); 
	        }

    		gettotal();
});


//--------------------------------------new transportation--------------------------------------
var gas;
var maintenance;
var gasmaintenance;

numberNot("#gas");
numberNot("#carmaintenance");
numberNot("#carpayment");
numberNot("#carinsurance");

carpayment = Number($("#carpayment").val());
carinsurance = Number($("#carinsurance").val());

var leasttransportation = $("#leasttransportation:radio:checked").val();
$("#transportationsubtotal").html(Number(leasttransportation).toLocaleString());

$(document).on('click', '#gasmaintenance', function(){                           
                $("#gasmaintenancediv").removeClass("hidden");
                gas=Number($("#gas").val());
                carmaintenance=Number($("#carmaintenance").val());                
                gasmaintenance =  gas + carmaintenance;

                $(document).on('input propertychange', '#gas', function(){
                        var leasttransportation = Number($("#leasttransportation:radio:checked").val());
                        gas=Number($(this).val());
                        carmaintenance=Number($("#carmaintenance").val());                      
                        gasmaintenance = gas + carmaintenance;
                        transportationsubtotal = gasmaintenance + carpayment + carinsurance;
                        $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());


		                if(transportationsubtotal != 0){
		                   $("#fortransportation").css("color","#3f8928");    
		                } 
		                else{
		                   $("#fortransportation").css("color","red"); 
		                }           
		                gettotal();  

                });   

                $(document).on('input propertychange', '#carmaintenance', function(){
                        var leasttransportation = Number($("#leasttransportation:radio:checked").val());
                        gas=Number($("#gas").val());
                        carmaintenance=Number($(this).val());
                        
                        gasmaintenance = gas + carmaintenance;
                        transportationsubtotal = gasmaintenance + carpayment + carinsurance;
                        $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());

		                if(transportationsubtotal != 0){
		                   $("#fortransportation").css("color","#3f8928");    
		                } 
		                else{
		                   $("#fortransportation").css("color","red"); 
		                } 
                            
                        gettotal();  

                });  

                $(document).on('input propertychange', '#carpayment', function(){
                        gas=Number($("#gas").val());
                        carmaintenance=Number($("#carmaintenance").val());
                        carpayment = Number($(this).val());
                        carinsurance = Number($("#carinsurance").val());
                         
                        if(isNaN(carpayment)){
                            alert("Please input available Number!");
                            $(this).val("");
                        }
                        else{
                            gasmaintenance = gas + carmaintenance;
                            transportationsubtotal = gasmaintenance + carpayment + carinsurance;
                            $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());
                        }
		                if(transportationsubtotal != 0){
		                    $("#fortransportation").css("color","#3f8928");    
		                } 
		                else{
		                    $("#fortransportation").css("color","red"); 
		                } 

		                gettotal();  

                });   

                $(document).on('input propertychange', '#carinsurance', function(){
                        gas=Number($("#gas").val());
                        carmaintenance=Number($("#carmaintenance").val());
                        carpayment = Number($("#carpayment").val());
                        carinsurance = Number($(this).val());
 
                        gasmaintenance = gas + carmaintenance;
 						transportationsubtotal = gasmaintenance + carpayment + carinsurance;
                        $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());

		                if(transportationsubtotal != 0){
		                    $("#fortransportation").css("color","#3f8928");    
		                } 
		                else{
		                    $("#fortransportation").css("color","red"); 
		                } 

		                gettotal();  

                });  

                transportationsubtotal = gasmaintenance + carpayment + carinsurance;
                $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());


				if(transportationsubtotal != 0){
				   $("#fortransportation").css("color","#3f8928");    
				} 
				else{
				   $("#fortransportation").css("color","red"); 
				} 
				gettotal(); 
});  



$(document).on('click', '#leasttransportation', function(){               
                $("#gasmaintenancediv").addClass("hidden");
                $("#gas").val("");
                $("#carmaintenance").val("");

                 var leasttransportation = Number($("#leasttransportation:radio:checked").val());
                 gas=Number($("#gas").val());
                 carmaintenance = Number($("#carmaintenance").val());
                 
                 transportationsubtotal = leasttransportation  + carpayment + carinsurance;
                 $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());

                if(transportationsubtotal != 0){
				   $("#fortransportation").css("color","#3f8928");    
				} 
				else{
				   $("#fortransportation").css("color","red"); 
				} 

                gettotal(); 


                $(document).on('input propertychange', '#carpayment', function(){
	                var leasttransportation = Number($("#leasttransportation:radio:checked").val());
	                gas=Number($("#gas").val());
	                carmaintenance=Number($("#carmaintenance").val());
	                carpayment = Number($(this).val());
	                carinsurance = Number($("#carinsurance").val());
	                        
	                transportationsubtotal = Number(leasttransportation) + carpayment + carinsurance;
	                $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());

	                if(transportationsubtotal != 0){
	                   $("#fortransportation").css("color","#3f8928");    
	                 } 
	                else{
	                   $("#fortransportation").css("color","red"); 
	                } 

	                gettotal();  

                });   

                $(document).on('input propertychange', '#carinsurance', function(){
                        var leasttransportation = Number($("#leasttransportation:radio:checked").val());
                        gas=Number($("#gas").val());
                        carmaintenance=Number($("#carmaintenance").val());
                        carpayment = Number($("#carpayment").val());
                        carinsurance = Number($(this).val());
                         
                        transportationsubtotal = Number(leasttransportation) + carpayment + carinsurance;
                        $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());

		                if(transportationsubtotal != 0){
		                   $("#fortransportation").css("color","#3f8928");    
		                } 
		                else{
		                   $("#fortransportation").css("color","red"); 
		                }         
		                gettotal();  

                });   


});  


$(document).on('input propertychange', '#carpayment', function(){
        var leasttransportation = Number($("#leasttransportation:radio:checked").val());
        gas=Number($("#gas").val());
        carmaintenance=Number($("#carmaintenance").val());
        carpayment = Number($(this).val());
        carinsurance = Number($("#carinsurance").val());
        
        transportationsubtotal = Number(leasttransportation) + carpayment + carinsurance;
        $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());

		if(transportationsubtotal != 0){
		   $("#fortransportation").css("color","#3f8928");    
		} 
		else{
		   $("#fortransportation").css("color","red"); 
		} 
		        
		gettotal();  

});   

$(document).on('input propertychange', '#carinsurance', function(){
        var leasttransportation = Number($("#leasttransportation:radio:checked").val());
        gas=Number($("#gas").val());
        carmaintenance=Number($("#carmaintenance").val());
        carpayment = Number($("#carpayment").val());
        carinsurance = Number($(this).val());
         
        transportationsubtotal = Number(leasttransportation) + carpayment + carinsurance;
        $("#transportationsubtotal").html(transportationsubtotal.toLocaleString());


		if(transportationsubtotal != 0){
		    $("#fortransportation").css("color","#3f8928");    
		} 
		else{
		    $("#fortransportation").css("color","red"); 
		} 

		gettotal();  

});   


//----------------------------------------- for Miscellaneous------------------------------------
var childcare;
var savingsplans;
var emergencyfund;
var other;

numberNot("#childcare");
numberNot("#savingsplans");
numberNot("#emergencyfund");
numberNot("#other");

function inputmiscellaneous(e){
     childcare = Number($("#childcare").val());
     savingsplans = Number($("#savingsplans").val());
     emergencyfund = Number($("#emergencyfund").val());
     other = Number($("#other").val());
        
     miscellaneoussubtotal =  (childcare + savingsplans + emergencyfund + other).toLocaleString();
     $("#miscellaneoussubtotal").html(miscellaneoussubtotal);    

     if(miscellaneoussubtotal != 0){
        $("#formiscellaneous").css("color","#3f8928");    
     } 
     else{
        $("#formiscellaneous").css("color","red"); 
     }  

};

$(document).on('input propertychange', '#childcare', function(){         
            inputmiscellaneous('#childcare');
            gettotal(); 
 });
$(document).on('input propertychange', '#savingsplans', function(){
            inputmiscellaneous('#savingsplans');         
            gettotal(); 
 });
$(document).on('input propertychange', '#emergencyfund', function(){
            inputmiscellaneous('#emergencyfund');            
            gettotal(); 
 });
$(document).on('input propertychange', '#other', function(){
            inputmiscellaneous('#other');          
            gettotal(); 
 });

//----------------------------------------- for Scholarship------------------------------------
var actScore;
var aoaScore;
var transfer;
var amount;
numberNot("#amount");

$(document).on('change', '#actScoreOptions', function(){ 
     actScore = -Math.abs(Number($("#actScoreOptions option:selected").val()));
     aoaScore = -Math.abs(Number($('#aoaScore').val()));
     transfer = -Math.abs(Number($('#transfer').val()));
     amount = -Math.abs(Number($('#amount').val()));
     
     scholarshiptotal = (actScore + aoaScore + transfer + amount).toLocaleString();
     $("#scholarshipsubtotal").html(scholarshiptotal);

     if(scholarshiptotal == 0){
        $("#forScholarship").css("color","red"); 
        //Math.abs(Number($('#scholarshipsubtotal').val()));    
     } 
     else{
        $("#forScholarship").css("color","#F6AF32"); 
     } 
    
     gettotal(); 
});

$(document).on('change', '#aoaScoreOptions', function(){ 
    aoaScore = -Math.abs(Number($("#aoaScoreOptions option:selected").val()));
    actScore = -Math.abs(Number($("#actScore").val()));
    transfer = -Math.abs(Number($('#transfer').val()));
    amount = -Math.abs(Number($('#amount').val()));
    
    scholarshiptotal = (actScore + aoaScore + transfer + amount).toLocaleString();
    $("#scholarshipsubtotal").html(scholarshiptotal);

    if(scholarshiptotal == 0){
        $("#forScholarship").css("color","red"); 
         
     } 
     else{
        $("#forScholarship").css("color","#F6AF32"); 
     } 
    gettotal(); 
});

$(document).on('change', '#transferOptions', function(){ 
    transfer = -Math.abs(Number($("#transferOptions option:selected").val()));
    actScore = -Math.abs(Number($("#actScore").val()));
    aoaScore = -Math.abs(Number($('#aoaScore').val()));
    amount = -Math.abs(Number($('#amount').val()));
    
    scholarshiptotal = (actScore + aoaScore + transfer + amount).toLocaleString();
    $("#scholarshipsubtotal").html(scholarshiptotal);

    if(scholarshiptotal == 0){
        $("#forScholarship").css("color","red"); 
        
     } 
     else{
        $("#forScholarship").css("color","#F6AF32"); 
     } 
    gettotal(); 
});

$(document).on('input propertychange', '#amount', function(){           
    amount = -Math.abs(Number($('#amount').val()));
    actScore = -Math.abs(Number($("#actScore").val()));
    aoaScore = -Math.abs(Number($('#aoaScore').val()));
    transfer = -Math.abs(Number($('#transfer').val()));
    
    scholarshiptotal = (actScore + aoaScore + transfer + amount).toLocaleString();
    $("#scholarshipsubtotal").html(scholarshiptotal);
    
    if(scholarshiptotal == 0){
        $("#forScholarship").css("color","red"); 
        
     } 
     else{
        $("#forScholarship").css("color","#F6AF32"); 
     } 
    gettotal(); 
});




