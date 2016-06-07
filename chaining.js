// Select all list items that do not have the ID 'one' and hide them. After
//  half a second delay, fade them in over the course of 1.4 seconds.
$('li[id!="one"]').hide().delay(500).fadeIn(1400); // semi-colon indicates end of chaining - can be writen on separate lines

// Select the first list item and give it the class 'next'.
$('li:first-child').addClass('next');

// Select the list item with the class 'priority' and give it the class 'highlight'.
$('li.priority').addClass('highlight');
