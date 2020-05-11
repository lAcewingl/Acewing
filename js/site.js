//jQuery(function($) {
  //  alert("let's gooo!");
// });



  <script src="js/data.js"></script>
  <script>
   var container = document.getElementById('anim_container');
    // Set up our animation 
    var animData = {
        container: container,
        renderer: 'svg',
        autoplay: true,
        loop: true,
        animationData : data
    };
    var anim = bodymovin.loadAnimation(animData);
  </script>