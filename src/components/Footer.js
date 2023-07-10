import React from 'react'
import '../components/Footer.css'
import {TfiFacebook} from 'react-icons/tfi'
import {ImLinkedin2} from 'react-icons/im'
import {RxTwitterLogo} from 'react-icons/rx'
import {SiInstagram} from 'react-icons/si'

const Footer = () => {
  return (
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Netflix.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">ReactJs</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by    
           <a href="http://www.linkedin//ishaagr13">  Isha Agrawal</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="http://www.facebook.com"><i class="fa fa-facebook"><TfiFacebook/></i></a></li>
              <li><a class="twitter" href="http://www.twitter.com"><i class="fa fa-twitter"><RxTwitterLogo/></i></a></li>
              <li><a class="dribbble" href="http://www.linkedin.com"><i class="fa fa-dribbble"><ImLinkedin2/></i></a></li>
              <li><a class="linkedin" href="http://www.instagram.com"><i class="fa fa-linkedin"><SiInstagram/></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer
