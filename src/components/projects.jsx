import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-8 animate-box" data-animate-effect="fadeInLeft">
								<div className="project">
                    <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
                <Carousel.Item style={{'height':"300px"}} >
                        <img style={{'height':"300px", 'width':'100%'}}
                                    className="d-block w-100"
                                    src={'images/img-1-1.jpg'}  />
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}} >
                        <img style={{'height':"300px", 'width':'100%'}}
                                    className="d-block w-100"
                                    src={'images/img-1-2.jpg'}  />
                </Carousel.Item>
                <Carousel.Item style={{'height':"300px"}} >
                        <img style={{'height':"300px", 'width':'100%'}}
                                    className="d-block w-100"
                                    src={'images/img-1-3.jpg'}  />
                </Carousel.Item>
                </Carousel>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Watch lecture with friends</a></h3>
											<span>Web APP</span>
											<p className="icon">
                      <ul>
												<li>Backend: Node.js, Express.js, Socket.io, Peer.js, WebRTC</li>
                        <li>Frontend: React.js, Antd, CSS</li>
                        <li>Database: Mongo DB</li>
                        <li>Other: Auth0, AWS</li>
                      </ul>
                      <span><a href="https://github.com/Ardwen/Team-up-learning_front"><i className="icon-github"/></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-8 animate-box" data-animate-effect="fadeInRight">
								<div className="project">
                <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
            <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-2-1.jpg'}  />
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-2-2.jpg'}  />
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-2-3.jpg'}  />
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-2-4.jpg'}  />
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-2-5.jpg'}  />
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-2-6.jpg'}  />
            </Carousel.Item>
            <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-2-7.jpg'}  />
            </Carousel.Item>

            </Carousel>
									<div className="desc">
										<div className="con">
                    <h3><a href="work.html">Museum Explorer </a></h3>
                    <span>Web APP</span>
                    <p className="icon">
                    <ul>
                      <li>Backend: Spring boot, Hibernate, JWT</li>
                      <li>Frontend: React.js, Antd, Redux, CSS</li>
                      <li>Database: MySQL</li>
                      <li>Other: AWS S3, CE2, RDS</li>
                    </ul>
                    <span><a href="https://github.com/Ardwen/DigitalMuseum"><i className="icon-github"/></a></span>
                    </p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-8 animate-box" data-animate-effect="fadeInTop">
								<div className="project">
                <Carousel interval={3000} keyboard={false} pauseOnHover={true}>
                    <Carousel.Item style={{'height':"300px"}} >
                      <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-3-1.jpg'}  />
                   </Carousel.Item>
                   <Carousel.Item style={{'height':"300px"}} >
                    <img style={{'height':"300px", 'width':'100%'}}
                                className="d-block w-100"
                                src={'images/img-3-2.jpg'}  />
                   </Carousel.Item>
            </Carousel>
									<div className="desc">
										<div className="con">
                    <h3><a href="work.html">Food Truck Tracker</a></h3>
                    <span>Mobile APP</span>
                    <p className="icon">
                    <ul>
                      <li>Backend: Python Flask</li>
                      <li>Frontend: Flutter</li>
                      <li>Database: Mongo DB</li>
                      <li>Other: Docker, Google Map</li>
                    </ul>
                    <span><a href="https://github.com/IllinoisTechServicesSRTILab/food-truck-tracker"><i className="icon-github"/></a></span>
                    </p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-8 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Shell</a></h3>
											<span>Application</span>
                      <p className="icon">
                      <ul>
                        <li>System: Linux</li>
                        <li>Language: C</li>
                      </ul>
                      <span><a href="#"><i className="icon-github"/></a></span>
                      </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
