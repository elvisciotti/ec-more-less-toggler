/*
 * ecMoreLessBlocks
 * https://github.com/elvisciotti/ec-more-less
 * 
 * JQuery utility to wraps a long block of text with More/Less links to toggle full/short version 
 *  (short version loaded on document load, no text changes if JS is disabled or not attached)
 * 
 * Usage: 
 * add the following attributes to <p> blocks:
 * data-role="more-block"  just a selector to attach the events. see (1)
 * data-more-text="More..."   text used as "more" link
 * data-less-text="Less"  text used as "less" link
 * data-max-chars="250"   add more/less links only if the text exceeds this lenght in chars
 * data-separator=". "   split sentences using this char as a separator, normally a dor or a comma
 * 
 * example
 * <p data-role="more-block" data-more-text="More..." data-less-text="Less" data-max-chars="250" data-separator=". ">
 *   put here lots of text...
 * </p>
 * 
 * // to attach:
 * $(document).ready(function() {
 *   ecMoreLessBlock.init($('[data-role="more-block"]')); // (1)
 * });
 * 
 * */

var ecMoreLessBlock = {
    init: function (moreLessBlocks) {
        var that = this;
        moreLessBlocks.each(function(){
            that.attachEvents($(this));
        });
    },
    attachEvents: function(moreBlock){
        var that = this;
        // initially hide the exceeding text
        that.hideExceedingText(moreBlock);
        // click on "more" -> remove link, fadeIn the hidden text and add a "less" button
        moreBlock.on('click', '[data-role="more"]', function(e) {
            e.preventDefault();
            var el = $(this);
            var moreBlock = el.parents('[data-role="more-block"]');
            moreBlock.find('[data-role="hidden-text"]').fadeIn();
            el.remove();
            moreBlock.append(' <a href="#" data-role="less">' + moreBlock.data('less-text') + '</a>');
        })
        // click on "less" -> remove link, re-hide exceeding text
        .on('click', '[data-role="less"]', function(e) {
            e.preventDefault();
            var el = $(this);
            var moreBlock = el.parents('[data-role="more-block"]');
            el.remove(); //remove "less" link
            that.hideExceedingText(moreBlock);
        });
    },
    // add a hidden wrap on exceeding text
    hideExceedingText: function(moreBlock)
    {
        var separator = moreBlock.data('separator');
        var maxLength = moreBlock.data('max-chars');
        var preText = ' <a href="#" data-role="more">' + moreBlock.data('more-text') + '</a><span style="display:none" data-role="hidden-text">';
        var afterText = '</span>';
        var words = moreBlock.html().split(separator);
        var newText = words[0] + separator;
        var moreLinkAdded = false;
        for (var i = 1; i < words.length; i++) {
            newText += words[i];
            if (!moreLinkAdded && newText.length > maxLength) {
                newText += separator;
                newText += preText;
                moreLinkAdded = true;
            } else if (i != words.length - 1) {
                newText += separator;
            }
        }
        newText += afterText;
        moreBlock.html(newText);
    }        
}


    