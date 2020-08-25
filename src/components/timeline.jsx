import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Mobile/App Development <span>2020.02-present</span></h2>
                        <p>
                        <li>Developed Restful API in Python and mobile UI development in Flutter framework for Android and iOS</li>
                        <li>Implemented Course Explorer feature in mobile app for course searching, grade visualization </li>
                        <li>Integrated AWS Lex, Kendra, Lamda function into mobile app for intelligent help desk bot feature </li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>National Center for Supercomputing Applications<span>2020.02-2020.08</span></h2>
                        <p>
                        <li>Worked as research Intern in BDEEP team</li>
                        <li>Collaborated in team to build a google crawler in Python to automatically collect google streamline KML data from users provided cookies, parsing and storing streamline data into PostgreSQL for research </li>
                        <li>Processed, analyzed and visualized geological data to identify Uber trip pattern in Cairo using R </li>
                        <li>Documented continuously for reference and graphed project workflow for the team up-to-date changes  </li>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Deloitte<span>2019.07-2019.08</span></h2>
                        <li>Interned as technology consultant in a data analyst team</li>
                        <li>Participated in Brand Life Cycle analysis project for five cigarette brands in 10+ business areas</li>
                        <li>Developed marketing trend model in R, visualized and presented data models to business teams</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
