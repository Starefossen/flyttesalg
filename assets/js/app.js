!function ($) {
  $(function(){
    for(var i = 0; i < furniture.length; i++) {
      var f, tmp;
      
      f = furniture[i];
      if (f.title === 'foo') {
        continue;
      }
      
      tmp = $('ul.thumbnails-tmp li').clone();
      tmp.find('div > a').attr('href', f.url).attr('title', f.title);
      tmp.find('div > a > img').attr('src', f.image).attr('alt', f.title);
      
      tmp.find('div > .title').html(
        f.title + (f.stock > 1 ? ' (' + f.stock + ' stk)': '')
      );
      tmp.appendTo('ul.thumbnails');
      
      if (f.sold === f.stock) {
        tmp.find('div').addClass('sold');
        tmp.find('div > .price').html('<strong>SOLGT!</strong>');
      } else {
        var p = Math.round(f.priceOld-f.priceNew);    
        tmp.find('div > .price').html(
          '<strong>' + f.priceNew + ',-</strong> stk. (spar ' + p + ',-)'
        );
        tmp.popover({
          title: f.name
          ,content: f.desc
          ,trigger: 'hover'
          ,placement: 'bottom'
          ,container: 'body'
        });
      }
    }    
  });
}(window.jQuery)
