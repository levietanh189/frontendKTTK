<template>
  <div class="footer" style="background: url('http://localhost:9081/assets/images/background-header.jpg');">
    <footer style="background-color: rgba(60,193,193,0.6); ">

      <!--=================== Footer Top Section ===================-->
      <section class="footer-top">
        <div class="container">
          <div class="row">
            <!--=================== Footer Top Column 4 ===================-->
            <div class="col-md-4 col-sm-6 col-xs-12 newsletter">
              <!--=================== Newsletter ===================-->
              <h4 class="paira-gap-3 margin-clear margin-bottom-20 text-uppercase">Cập nhật tin tức</h4>
              <form class="form-inline margin-top-20 margin-bottom-20" action="" method="post" target="_blank" novalidate="" name="mc-embedded-subscribe-form" id="mc-embedded-subscribe-form">
                <div class="form-group">
                  <input type="email" class="form-control email" name="newsletter-email" id="newsletter-email" placeholder="Email Address" required>
                </div>
                <button type="submit" class="btn btn-default"><i class="fa fa-angle-right"></i></button>
              </form>
              <!--=================== Social Icons Footer ===================-->
              <ul class="list-inline link">

                <li class="link-social" data-toggle="tooltip" title="Facebook">
                  <a href="https://www.facebook.com/" target="_blank">
                    <span><i class="fab fa-facebook-square"></i></span>
                  </a>
                </li>
                <li class="link-social" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <a href="https://twitter.com/" target="_blank">
                    <span><i class="fab fa-twitter-square"></i></span>
                  </a>
                </li>
                <li class="link-social" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                  <a href="https://www.linkedin.com/" target="_blank">
                    <span><i class="fab fa-linkedin"></i></span>
                  </a>
                </li>
              </ul>
            </div>
            <!--=================== Footer Top Column 1 ===================-->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <!--=================== Footer Middle Column 1 ===================-->
              <h4 class="paira-gap-3 margin-clear margin-bottom-20 text-uppercase">About</h4>
              <p class="text-justify">We just don't build your website we build your business.</p>
              <p class="text-justify"><br>(88)-0000 0000 <br>support@abc.com</p>
            </div>
            <!--=================== Footer Top Column 2 ===================-->
            <div class="col-md-3 col-sm-6 col-xs-12">
              <h4 class="paira-gap-3 margin-clear margin-bottom-20 text-uppercase">Link hỗ trợ</h4>
              <ul class="list-unstyled footer-list-style">
                <li><a href="about-us.html">Terms & Conditions</a></li>
                <li><a href="about-us.html">Privacy Policy</a></li>
                <li><a href="about-us.html">Return Policy</a></li>
              </ul>
            </div>
            <!--=================== Footer Top Column 3 ===================-->
            <div class="col-md-2 col-sm-6 col-xs-12 paira-gap-4">
              <h4 class="paira-gap-3 margin-clear margin-bottom-20 text-uppercase">Thông tin</h4>
              <ul class="list-unstyled footer-list-style">
                <li><a href="about-us.html">About us</a></li>
                <li><a href="single-blog.html">News</a></li>
                <li><a href="contact-us.html">Contact us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!--=================== Footer Bottom Section ===================-->
      <section class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-6">
              <p class="pull-left margin-top-30 margin-bottom-20">&copy; <a href="http://www.facebook.com/" target="_blank">Copyright:Teamcolun</a>. All Rights Reserved.</p>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-6 payment">
              <ul class="list-inline link">
                <li class="link-social"><img src="assets/images/payment1.png" alt=""></li>
                <li class="link-social"><img src="assets/images/payment2.png" alt=""></li>
                <li class="link-social"><img src="assets/images/payment3.png" alt=""></li>
                <li class="link-social"><img src="assets/images/payment4.png" alt=""></li>
                <li class="link-social"><img src="assets/images/payment5.png" alt=""></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>