<script>
(function($) {
  $(document).ready(function() {
    $('#block-2091ad01016e0c16fbf5').hover(function() {
    	// $( "#block-2091ad01016e0c16fbf5 .thumb-image" ).attr("src","https://static1.squarespace.com/static/5fbc13ab28cdca2d92d13045/t/5fbd6f1fc40cee429f55218e/1606250271337/Jason_Art.jpg");
    	 $("#block-2091ad01016e0c16fbf5 .thumb-image").fadeOut(500, function() {
    		$(this).attr("src", "https://static1.squarespace.com/static/5fbc13ab28cdca2d92d13045/t/5fbd6f1fc40cee429f55218e/1606250271337/Jason_Art.jpg");
    		$(this).load(function () {
     		// $(this).fadeIn(500);
		});
  });
    });
	$('#block-2091ad01016e0c16fbf5').mouseout(function() {
    	$( "#block-2091ad01016e0c16fbf5 .thumb-image" ).attr("src","https://static1.squarespace.com/static/5fbc13ab28cdca2d92d13045/t/5fbc13cb28cdca2d92d13411/1606250141544/Jason-5941.jpg");
    })
  })
})(jQuery);

 // $("#image").fadeOut(500, function() {
 //    $(this).attr("src", "http://1.static.s-trojmiasto.pl/zdj/c/2/132/100x70/1320882__kr.jpg");
 //    $(this).load(function () {
 //      $(this).fadeIn(500);
 //    });
 //  });
</script>


 