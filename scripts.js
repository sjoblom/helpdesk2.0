$(document).ready(function() {
	
	// SCROLL TO BOTTOM IN CONVERSATION
	var objDiv = document.getElementById("conversation");
	objDiv.scrollTop = objDiv.scrollHeight;

	// ACTION MENU
	$("#action-menu button").click(function() {
		$('#action-menu').hide();
		$('#' + $(this).val()).show();
	});

	// CANCEL BUTTONS
	$("input[type='reset']").click(function() {
		$('.action-form-container').hide();
		$('#action-menu').show();
	});

	// DATE PICKER FOR FORMS
	$(".datepicker").datepicker({
		inline: true,
		autoSize: true,
		maxDate: 0
	});

	// DATE PCIKER FOR THE CALENDAR ON THE BOTTOM LEFT
	$('#calendar').datepicker({
		beforeShowDay: function(date) {
			var search = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();

			if (search in highlighted_dates) {
				return [true, (highlighted_dates[search] || ''), (highlighted_dates[search] || '')];
			}
			return [false, '', ''];
		}
	});

	// TAB MENU BUTTON FOR ACTIONS
	$('#menu-tab-button-actions').click( function() {
		$('#responses-container').hide();
		$('.action-form-container').hide();
		$('#action-menu').show();
	});
	
	// TAB MENU BUTTON FOR REPONSES
	$('#menu-tab-button-responses').click( function() {
		$('#responses-container').show();
		$('.action-form-container').hide();
		$('#action-menu').hide();
	});
	
	// ENABLE SEARCH AMONG RESPONSES
  $("#response-search-field").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#responses-container button").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

	// CREATING RESPONSES BUTTONS FOR ALL ENTRIES IN RESPONSES.JS
	$.each( responses, function(key, value ) {
		$("#responses-container").append('<button value="' + value + '">' + key+ '</button>');
	});
	
	// POPULATE THE RESONSE TEXT AREA WHEN A RESPONSE BUTTON HAS BEEN PRESSES
	$('#responses-container button').click( function() {
		$('#response-message').text($(this).val());
	});
	
	// DISABLES ALL SUBMIT BUTTONS ONCE A FORM HAS BEEN SUBMITTED
  $("form").submit(function (e) {
      $("input[type='submit']").attr("disabled", true);
      return true;
  });

});
