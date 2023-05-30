$(document).ready(function() {
  //If csv file changes, do stuff
  $('#csvFile').on('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    //When reader object loads, load contents of csv and create array
    reader.onload = function(e) {
      var contents = e.target.result;
      var lines = contents.split('\n');
      var listCount = 3; // Number of separate lists
      var lists = []; // Array to store separate lists

      // Initialize separate lists
      for (var k = 0; k < listCount; k++) {
        lists[k] = $('<ul></ul>');
      }

      //Start reading items separated by commas
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].split(',');

        //Make the 3rd item (location) upper case, add '#' to second item (store number)
        if (line.length >= 3) {
          
          line[1] = "#" + line[1];
          var thirdItem = line[2].toLowerCase();
          var words = thirdItem.split(' ');

          //Capitalize first letter of each word
          for (var j = 0; j < words.length; j++) {
            words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
          }
          
          //Capitalize the last two letters (state initials) and add comma
          line[2] = words.join(' ');
          line[2] = line[2].slice(0, -4) + ", " +  line[2].slice(-3).toUpperCase();
        }

        //Build list item string from line array
        var listItem = '<li>' + line.join(' - ') + '</li>';
        lists[i % listCount].append(listItem); // Distribute items among separate lists
      }

      $('#list').empty(); // Clear the main list

      // Append separate lists to the main list
      for (var l = 0; l < listCount; l++) {
        var sublist = $('<div class="sublist" style="float:left; width:33%; padding: 0 10px; box-sizing: border-box;"></div>').append(lists[l]);
        $('#list').append(sublist);
      }

      // Get the HTML content of the previewBox and append as a string to the codeBox
      var previewContent = $('#previewBox').html(); 
      $('#codeBox').text(previewContent);
    };

    reader.readAsText(file);
  });

  
});
