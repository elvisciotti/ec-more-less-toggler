EC more/less toggler
====================


JS mini library to wrap a long block of text with `More/Less` links to toggle full/short version. 
Alpha version.

****
![more less example](https://raw.github.com/elvisciotti/ec-more-less-toggler/master/screenshot.png)   
****

* Text is shortened on page load, and a "More" Link will be appended, 
on which a click will show the full text as well as appending a "Less" link to toggle back to the initial shortened version.
* Customizable with HTML element `data-` attributes (link texts, char limit, separator). (no CSS classes, that's for styling, is that clear ?? :D)
* Needs JQuery (of course ! any reasonably recent version).
* If no JS  is loaded, or the events are not attached, nothing will change, the full text will display and you can still make 
money with google indexing your stuff.
* Comments and suggestions are more than welcome.

### Usage

 * add the following attributes to the text blocks:
  * `data-role="more-block"`  just a selector to attach the events. see (1)
  * `data-more-text="More..."`   text used as "more" link
  * `data-less-text="Less"`  text used as "less" link
  * `data-max-chars="250"`   add more/less links only if the text exceeds this lenght in chars
  * `data-separator=". "`   split sentences using this char as a separator, normally a dor or a comma

        example
       
            <p data-role="more-block" 
               data-more-text="More..." 
               data-less-text="Less" 
               data-max-chars="250" 
               data-separator=". ">
              put here lots of text...
            </p>
            ...
            <p ... > .. </p>

* Include JQuery
* Attach the library. I've used the `data-role="more-block"` attribute, but you can use another one if you wish
        
        <script>
        $(document).ready(function() {
          ecMoreLessBlock.init($('[data-role="more-block"]'));
        });
        </script>

See a working example in the `examples` directory.


 

