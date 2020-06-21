/* Fell free to visit my youtube channel for more updates,
https://www.youtube.com/channel/UCtVM2RthR4aC6o7dzySmExA
*/

$(".input").focus(function() {
  $("#search").addClass("move");
});
$(".input").focusout(function() {
  $("#search").removeClass("move");
  $(".input").val("");
});

$(".fa-search").click(function() {
  $(".input").toggleClass("active");
  $("#search").toggleClass("active");
});


/*
It has been a while since I wrote a article. So I was thinking from many days to write down a new article, finally I came up with a Expanding Animated Search box using Jquery. In this article, we are going to see the totally two different Expanding Animated search box demos.

Before getting into the code, let me explain what's happening in the above gif, first, we can see the search icon and when we click it, an input field pops out below the search icon with a label message(Enter Your Email Address) in it. and when we try to enter the Email address in the input field, the label message moves away from the input field and gets placed below the input field.

For achieving the above demo I’m going to use the scale method of the transform property and Jquery Toggle method.

For Search Icon, I’m going to use the font-awesome icons. and for accessing the font-awesome icons, first, we need to include the CDN link in the head section of the HTML Document.

HTML Structure

Let's get started by creating the wrapper div element with btn and form div elements. and place the search icon within the btn div element. create the label and input field elements inside the form div element. here Label message acts as a placeholder message. 


CSS Structure

First, I'm going to reset the default margin and padding values of all HTML elements to zero and set the user-select:none to prevent the user from copying the content on the site.

Now Style the Wrapper div element in such a way that, it should always be in the center of the browser. by setting its position value to absolute(Relative to the browser), top and left values to 50% and by using translate method of transform property, place the wrapper div exactly in the center of the browser by removing the negative margins. 

Style the search icon, before that style its parent btn div element, by setting its width and margin-bottom values. and use the text-align property to place the icon horizontally in the center. Now increare size of the icon by using font-size and change its color.  

Give width and height values to the form div element. set the padding and use the box-sizing:border-box property, so that the padding value is included into the total width(40(padding-left + padding-right) + 400 = 440). 

Set the input fields width, border value to zero, as we required only border-bottom. set the background-color value to transparent and 3pixels of the solid border-bottom. and use the outline property to remove the blue line around the input field. increase the font-size and change the color of the text. use the transition property for smooth transition effect.

Now place the label message accordingly, by making its position value to relative. and using the top and left properties. 

Using the scale method of the transform property, and set the scale value of the input field to zero. and make the opacity of the label message to zero. 

Jquery code
whenever we click the search icon, active toggleclass is added to the label and input elements. 

add the move class to the label on focus and remove the move class on out of focus.
*/
