 // funciton to wrap script in 
 $(document).ready(function () {
    // retrieves current hour in 24hour time
    var now = new Date($.now());
    var currentHour = now.getHours();

    // test var for current hour comment out to above and uncomment out below to set current hour to 12

   0 // var currentHour = 12

   
    $('#currentDay').text(now)
    // hours of the day
    var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

    // create divs for the hours

    $.each(hours, function (index, value) {
      var timeBlock = $('<div>')
      timeBlock.addClass('row time-block')
      timeBlock.appendTo('.container')

      var div = $('<div>')
      div.addClass('hour time-block col-md-1')
      div.attr('data-hour', 9 + index)
      div.text(value)
      div.appendTo(timeBlock)

      var textarea = $('<textarea>')
      textarea.addClass('col-md-10 description')
      textarea.attr('id',index+9)
      textarea.text(localStorage.getItem(value))
      textarea.appendTo(timeBlock)

      var saveButton = $('<button>')
      saveButton.addClass('btn saveBtn col-md-1')
      saveButton.text("save")
      saveButton.attr('id', value)
      saveButton.appendTo(timeBlock)
    })
    
    
    
    // on click save button 
      $('#9am').click(function () {
        var text = $.trim($('#9').val())
        localStorage.setItem($(this).attr('id'),text)
      })
      $('#10am').click(function () {
        var text = $.trim($('#10').val())
        localStorage.setItem($(this).attr('id'),text)        })
      $('#11am').click(function () {
        var text = $.trim($('#11').val())
        localStorage.setItem($(this).attr('id'),text)
      })
      $('#12pm').click(function () {
        var text = $.trim($('#12').val())
        localStorage.setItem($(this).attr('id'),text)
      })
      $('#1pm').click(function () {
        var text = $.trim($('#13').val())
        localStorage.setItem($(this).attr('id'),text)
      })
      $('#2pm').click(function () {
        var text = $.trim($('#14').val())
        localStorage.setItem($(this).attr('id'),text)
      })
      $('#3pm').click(function () {
        var text = $.trim($('#15').val())
        localStorage.setItem($(this).attr('id'),text)
      })
      $('#4pm').click(function () {
        var text = $.trim($('#16').val())
        localStorage.setItem($(this).attr('id'),text)        })
      $('#5pm').click(function () {
        var text = $.trim($('#17').val())
        localStorage.setItem($(this).attr('id'),text)
      })
      

    // interval to check current hour every minute. 
    var checkhourInterval = setInterval(function () {
      // consloe.log(testinteval)
      findCurrentHour();
    }, 60000)
    // function to find the current hour
    function findCurrentHour() {
      // loop through hours
      $(".hour").each(function (index) {
        if ($(this).attr('data-hour') < currentHour) {
          $(this).parent().addClass('past')
        }
        if ($(this).attr('data-hour') == currentHour) {
          $(this).parent().removeClass('past')
          $(this).parent().addClass('present')
        }
        if ($(this).attr('data-hour') > currentHour) {
          $(this).parent().removeClass('past present')
          $(this).parent().addClass('future')
        }
      })

    };




    findCurrentHour();

    // end of doc ready wrapper
  })