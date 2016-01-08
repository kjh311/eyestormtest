$( document ).ready(function() {

  $(function() {
    var clicks = 0;
    $('.icon').on('click', function() {
    clicks++;
    var percent = Math.min(Math.round(clicks / 10 * 100), 100);
    $('.progress-bar').width(percent + '%').text(percent + ' pts');
    });
  });

  $( "#baggins-icon" ).click(function() {
    width = $(".progress-bar").css("width");
    $("#baggins-pic").addClass( "picVisible" );
    $("#baggins-icon").addClass( "iconLowerOpacity" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#baggins-icon").addClass( "iconHidden" );
  });

  $( "#corleone-icon" ).click(function() {
    width = $(".progress-bar").css("width");
    $("#corleone-pic").addClass( "picVisible" );
    $( "#corleone-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#corleone-icon").addClass( "iconHidden" );
  });

  $( "#mcdonalds-icon" ).click(function() {
    $("#mcdonalds-pic").addClass( "picVisible" );
    $( "#mcdonalds-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#mcdonalds-icon").addClass( "iconHidden" );
  });

  $( "#microsoft-icon" ).click(function() {
    $("#microsoft-pic").addClass( "picVisible" );
    $( "#microsoft-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#microsoft-icon").addClass( "iconHidden" );
  });

  $( "#parker-icon" ).click(function() {
    $("#parker-pic").addClass( "picVisible" );
    $( "#parker-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#parker-icon").addClass( "iconHidden" );
  });

  $( "#potter-icon" ).click(function() {
    $("#potter-pic").addClass( "picVisible" );
    $( "#potter-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#potter-icon").addClass( "iconHidden" );
  });

  $( "#skywalker-icon" ).click(function() {
    $("#skywalker-pic").addClass( "picVisible" );
    $( "#skywalker-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#skywalker-icon").addClass( "iconHidden" );
  });

  $( "#sparrow-icon" ).click(function() {
    $("#sparrow-pic").addClass( "picVisible" );
    $("#sparrow-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#sparrow-icon").addClass( "iconHidden" );
  });

  $( "#spock-icon" ).click(function() {
    $("#spock-pic").addClass( "picVisible" );
    $("#spock-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#wayne-pic").removeClass( "picVisible" );
    $("#spock-icon").addClass( "iconHidden" );
  });

  $( "#wayne-icon" ).click(function() {
    $("#wayne-pic").addClass( "picVisible" );
    $("#wayne-icon" ).addClass( "iconLowerOpacity" );
    $("#baggins-pic").removeClass( "picVisible" );
    $("#corleone-pic").removeClass( "picVisible" );
    $("#mcdonalds-pic").removeClass( "picVisible" );
    $("#microsoft-pic").removeClass( "picVisible" );
    $("#parker-pic").removeClass( "picVisible" );
    $("#potter-pic").removeClass( "picVisible" );
    $("#skywalker-pic").removeClass( "picVisible" );
    $("#sparrow-pic").removeClass( "picVisible" );
    $("#spock-pic").removeClass( "picVisible" );
    $("#wayne-icon").addClass( "iconHidden" );
  });

  $( "#reset" ).click(function() {
    $(".pic").removeClass( "picVisible" );
    $(".icon").removeClass( "iconHidden" );
    $(".icon").removeClass( "iconLowerOpacity" );
    $('.progress-bar').width(0);
    $(function() {
    var clicks = 0;
    $('.icon').on('click', function() {
    clicks++;
    var percent = Math.min(Math.round(clicks / 10 * 100), 100);
    $('.progress-bar').width(percent + '%').text(percent + ' pts');
    });
  });
  });
});
