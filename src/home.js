import PageWrapper from "./pagewrapper";


export default function HomePage() {


    return (
        <PageWrapper>
            


<div className="slider movie-items">
	<div className="container">
		<div className="row">
			<div className="social-link">
				<p>Follow us: </p>
				<a href="#"><i className="ion-social-facebook"></i></a>
				<a href="#"><i className="ion-social-twitter"></i></a>
				<a href="#"><i className="ion-social-googleplus"></i></a>
				<a href="#"><i className="ion-social-youtube"></i></a>
			</div>
	    	<div  className="slick-multiItemSlider">
	    		<div className="movie-item">
	    			<div className="mv-img">
	    				<a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437"/></a>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="blue"><a href="#">Sci-fi</a></span>
	    				</div>
	    				<h6><a href="#">Interstellar</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
				<div className="movie-item">
	    			<div className="mv-img">
	    				<a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437"/></a>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="yell"><a href="#">action</a></span>
	    				</div>
	    				<h6><a href="#">The revenant</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
	    		<div className="movie-item">
	    			<div className="mv-img">
	    				<a href="#"><img src="images/uploads/slider3.jpg" alt="" width="285" height="437"/></a>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="green"><a href="#">comedy</a></span>
	    				</div>
	    				<h6><a href="#">Die hard</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
	    		<div className="movie-item">
	    			<div className="mv-img">
	    				<a href="#"><img src="images/uploads/slider4.jpg" alt="" width="285" height="437"/></a>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
	    				</div>
	    				<h6><a href="#">The walk</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
	    		<div className="movie-item">
	    			<div className="mv-img">
	    				<a href="#"><img src="images/uploads/slider1.jpg" alt="" width="285" height="437"/></a>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="blue"><a href="#">Sci-fi</a></span>
	    				</div>
	    				<h6><a href="#">Interstellar</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
				<div className="movie-item">
	    			<div className="mv-img">
	    				<a href="#"><img src="images/uploads/slider2.jpg" alt="" width="285" height="437"/></a>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="yell"><a href="#">action</a></span>
	    				</div>
	    				<h6><a href="#">The revenant</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
	    		<div className="movie-item">
	    			<div className="mv-img">
	    				<img src="images/uploads/slider3.jpg" alt="" width="285" height="437"/>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="green"><a href="#">comedy</a></span>
	    				</div>
	    				<h6><a href="#">Die hard</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
	    		<div className="movie-item">
	    			<div className="mv-img">
	    				<img src="images/uploads/slider4.jpg" alt="" width="285" height="437"/>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="blue"><a href="#">Sci-fi</a></span> <span className="orange"><a href="#">advanture</a></span>
	    				</div>
	    				<h6><a href="#">The walk</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
	    		<div className="movie-item">
	    			<div className="mv-img">
	    				<img src="images/uploads/slider3.jpg" alt="" width="285" height="437"/>
	    			</div>
	    			<div className="title-in">
	    				<div className="cate">
	    					<span className="green"><a href="#">comedy</a></span>
	    				</div>
	    				<h6><a href="#">Die hard</a></h6>
	    				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
	    			</div>
	    		</div>
	    	</div>
	    </div>
	</div>
</div>
<div className="movie-items">
	<div className="container">
		<div className="row ipad-width">
			<div className="col-md-8">
				<div className="title-hd">
					<h2>in theater</h2>
					<a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
				</div>
				<div className="tabs">
					<ul className="tab-links">
						<li className="active"><a href="#tab1">#Popular</a></li>
						<li><a href="#tab2"> #Coming soon</a></li>
						<li><a href="#tab3">  #Top rated  </a></li>
						<li><a href="#tab4"> #Most reviewed</a></li>                        
					</ul>
				    <div className="tab-content">
				        <div id="tab1" className="tab active">
				            <div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284"/>
					            			</div> 
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab2" className="tab">
				           <div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab3" className="tab">
				        	<div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
			       	 	</div>
			       	 	<div id="tab4" className="tab">
				        	<div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
			       	 	</div>
				    </div>
				</div>
				<div className="title-hd">
					<h2>on tv</h2>
					<a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
				</div>
				<div className="tabs">
					<ul className="tab-links-2">
						<li><a href="#tab21">#Popular</a></li>
						<li className="active"><a href="#tab22"> #Coming soon</a></li>
						<li><a href="#tab23">  #Top rated  </a></li>
						<li><a href="#tab24"> #Most reviewed</a></li>                        
					</ul>
				    <div className="tab-content">
				        <div id="tab21" className="tab">
				            <div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab22" className="tab active">
				           <div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab23" className="tab">
				        	<div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item1.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item2.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item4.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
			       	 	</div>
			       	 	 <div id="tab24" className="tab">
				        	<div className="row">
				            	<div className="slick-multiItem">
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item5.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Interstellar</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
									<div className="slide-it">
										<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item6.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The revenant</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
									</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item7.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item8.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">The walk</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            		<div className="slide-it">
				            			<div className="movie-item">
					            			<div className="mv-img">
					            				<img src="images/uploads/mv-item3.jpg" alt="" width="185" height="284"/>
					            			</div>
					            			<div className="hvr-inner">
					            				<a  href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
					            			</div>
					            			<div className="title-in">
					            				<h6><a href="#">Die hard</a></h6>
					            				<p><i className="ion-android-star"></i><span>7.4</span> /10</p>
					            			</div>
					            		</div>
				            		</div>
				            	</div>
				            </div>
			       	 	</div>
				    </div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="sidebar">
					<div className="ads">
						<img src="images/uploads/ads1.png" alt="" width="336" height="296"/>
					</div>
					<div className="celebrities">
						<h4 className="sb-title">Spotlight Celebrities</h4>
						<div className="celeb-item">
							<a href="#"><img src="images/uploads/ava1.jpg" alt="" width="70" height="70"/></a>
							<div className="celeb-author">
								<h6><a href="#">Samuel N. Jack</a></h6>
								<span>Actor</span>
							</div>
						</div>
						<div className="celeb-item">
							<a href="#"><img src="images/uploads/ava2.jpg" alt="" width="70" height="70"/></a>
							<div className="celeb-author">
								<h6><a href="#">Benjamin Carroll</a></h6>
								<span>Actor</span>
							</div>
						</div>
						<div className="celeb-item">
							<a href="#"><img src="images/uploads/ava3.jpg" alt="" width="70" height="70"/></a>
							<div className="celeb-author">
								<h6><a href="#">Beverly Griffin</a></h6>
								<span>Actor</span>
							</div>
						</div>
						<div className="celeb-item">
							<a href="#"><img src="images/uploads/ava4.jpg" alt="" width="70" height="70" /></a>
							<div className="celeb-author">
								<h6><a href="#">Justin Weaver</a></h6>
								<span>Actor</span>
							</div>
						</div>
						<a href="#" className="btn">See all celebrities<i className="ion-ios-arrow-right"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div className="trailers">
	<div className="container">
		<div className="row ipad-width">
			<div className="col-md-12">
				<div className="title-hd">
					<h2>in theater</h2>
					<a href="#" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
				</div>
				<div className="videos">
				 	<div className="slider-for-2 video-ft">
				 		<div>
					    	<iframe className="item-video" src="#" data-src="https://www.youtube.com/embed/1Q8fG0TtVAY"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="#" data-src="https://www.youtube.com/embed/w0qQkSuWOS8"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="#" data-src="https://www.youtube.com/embed/44LdLqgOpjo"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="#" data-src="https://www.youtube.com/embed/gbug3zTm3Ws"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="#" data-src="https://www.youtube.com/embed/e3Nl_TCQXuw"></iframe>
					    </div>
					    <div>
					    	<iframe className="item-video" src="#" data-src="https://www.youtube.com/embed/NxhEZG0k9_w"></iframe>
					    </div>
						
						
					</div>
					<div className="slider-nav-2 thumb-ft">
						<div className="item">
							<div className="trailer-img">
								<img src="images/uploads/trailer7.jpg"  alt="photo by Barn Images" width="4096" height="2737"/>
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Wonder Woman</h4>
	                        	<p>2:30</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src="images/uploads/trailer2.jpg"  alt="photo by Barn Images" width="350" height="200"/>
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Oblivion: Official Teaser Trailer</h4>
	                        	<p>2:37</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src="images/uploads/trailer6.jpg" alt="photo by Joshua Earle"/>
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Exclusive Interview:  Skull Island</h4>
	                        	<p>2:44</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src="images/uploads/trailer3.png" alt="photo by Alexander Dimitrov" width="100" height="56"/>
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Logan: Director James Mangold Interview</h4>	
	                        	<p>2:43</p>
	                        </div>
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src="images/uploads/trailer4.png"  alt="photo by Wojciech Szaturski" width="100" height="56"/>
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Beauty and the Beast: Official Teaser Trailer 2</h4>	
	                        	<p>2: 32</p>
	                        </div>	
						</div>
						<div className="item">
							<div className="trailer-img">
								<img src="images/uploads/trailer5.jpg"  alt="photo by Wojciech Szaturski" width="360" height="189"/>
							</div>
							<div className="trailer-infor">
	                        	<h4 className="desc">Fast&Furious 8</h4>	
	                        	<p>3:11</p>
	                        </div>	
						</div>
					
					</div>
				</div>   
			</div>
		</div>
	</div>
</div>

<div className="latestnew">
	<div className="container">
		<div className="row ipad-width">
			<div className="col-md-8">
				<div className="ads">
					<img src="images/uploads/ads2.png" alt="" width="728" height="106"/>
				</div>
				<div className="title-hd">
					<h2>Latest news</h2>
				</div>
				<div className="tabs">
					<ul className="tab-links-3">
						<li className="active"><a href="#tab31">#Movies </a></li>
						<li><a href="#tab32"> #TV Shows </a></li>              
						<li><a href="#tab33">  # Celebs</a></li>                       
					</ul>
				    <div className="tab-content">
				        <div id="tab31" className="tab active">
				            <div className="row">
				            	<div className="blog-item-style-1">
				            		<img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250"/>
				            		<div className="blog-it-infor">
				            			<h3><a href="#">Brie Larson to play first female white house candidate Victoria Woodull in Amazon film</a></h3>
				            			<span className="time">13 hours ago</span>
				            			<p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
				            		</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab32" className="tab">
				           <div className="row">
				            	<div className="blog-item-style-1">
				            		<img src="images/uploads/blog-it2.jpg" alt="" width="170" height="250"/>
				            		<div className="blog-it-infor">
				            			<h3><a href="#">Tab 2</a></h3>
				            			<span className="time">13 hours ago</span>
				            			<p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
				            		</div>
				            	</div>
				            </div>
				        </div>
				        <div id="tab33" className="tab">
				        	<div className="row">
				            	<div className="blog-item-style-1">
				            		<img src="images/uploads/blog-it1.jpg" alt="" width="170" height="250" />
				            		<div className="blog-it-infor">
				            			<h3><a href="#">Tab 3</a></h3>
				            			<span className="time">13 hours ago</span>
				            			<p>Exclusive: <span>Amazon Studios </span>has acquired Victoria Woodhull, with Oscar winning Room star <span>Brie Larson</span> polsed to produce, and play the first female candidate for the presidency of the United States. Amazon bought it in a pitch package deal. <span> Ben Kopit</span>, who wrote the Warner Bros film <span>Libertine</span> that has...</p>
				            		</div>
				            	</div>
				            </div>
			       	 	</div>
				    </div>
				</div>
				<div className="morenew">
					<div className="title-hd">
						<h3>More news on Blockbuster</h3>
						<a href="#" className="viewall">See all Movies news<i className="ion-ios-arrow-right"></i></a>
					</div>
					<div className="more-items">
						<div className="left">
							<div className="more-it">
								<h6><a href="#">Michael Shannon Frontrunner to play Cable in “Deadpool 2”</a></h6>
								<span className="time">13 hours ago</span>
							</div>
							<div className="more-it">
								<h6><a href="#">French cannibal horror “Raw” inspires L.A. theater to hand out “Barf Bags”</a></h6>
								
								<span className="time">13 hours ago</span>
							</div>
						</div>
						<div className="right">
							<div className="more-it">
								<h6><a href="#">Laura Dern in talks to join Justin Kelly’s biopic “JT Leroy”</a></h6>
								<span className="time">13 hours ago</span>
							</div>
							<div className="more-it">
								<h6><a href="#">China punishes more than 300 cinemas for box office cheating</a></h6>
								<span className="time">13 hours ago</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="sidebar">
					<div className="sb-facebook sb-it">
						<h4 className="sb-title">Find us on Facebook</h4>
						<iframe src="#" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftemplatespoint.net%2F%3Ffref%3Dts&tabs=timeline&width=300&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId" width="300" height="315"  ></iframe>
					</div>
					<div className="sb-twitter sb-it">
						<h4 className="sb-title">Tweet to us</h4>
						<div className="slick-tw">
							<div className="tweet item" id="">
							</div>
							<div className="tweet item" id="">
							</div>
						</div>					
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<footer className="ht-footer">
	<div className="container">
		<div className="flex-parent-ft">
			<div className="flex-child-ft item1">
				 <a href="index-2.html"><img className="logo" src="images/logo1.png" alt=""/></a>
				 <p>5th Avenue st, manhattan<br/>
				New York, NY 10001</p>
				<p>Call us: <a href="#">(+01) 202 342 6789</a></p>
			</div>
			<div className="flex-child-ft item2">
				<h4>Resources</h4>
				<ul>
					<li><a href="#">About</a></li> 
					<li><a href="#">Blockbuster</a></li>
					<li><a href="#">Contact Us</a></li>
					<li><a href="#">Forums</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Help Center</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item3">
				<h4>Legal</h4>
				<ul>
					<li><a href="#">Terms of Use</a></li> 
					<li><a href="#">Privacy Policy</a></li>	
					<li><a href="#">Security</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item4">
				<h4>Account</h4>
				<ul>
					<li><a href="#">My Account</a></li> 
					<li><a href="#">Watchlist</a></li>	
					<li><a href="#">Collections</a></li>
					<li><a href="#">User Guide</a></li>
				</ul>
			</div>
			<div className="flex-child-ft item5">
				<h4>Newsletter</h4>
				<p>Subscribe to our newsletter system now <br/> to get latest news from us.</p>
				<form action="#">
					<input type="text" placeholder="Enter your email..."/>
				</form>
				<a href="#" className="btn">Subscribe now <i className="ion-ios-arrow-forward"></i></a>
			</div>
		</div>
	</div>
	<div className="ft-copyright">
		<div className="ft-left">
			<p><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></p>
		</div>
		<div className="backtotop">
			<p><a href="#" id="back-to-top">Back to top  <i className="ion-ios-arrow-thin-up"></i></a></p>
		</div>
	</div>
</footer>
        </PageWrapper>
        
          );
         
        
        
        
}