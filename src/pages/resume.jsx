import React from 'react'
import StaggeredList from '../components/staggeredList'

const SecondPage = () => (
  <StaggeredList>
    <div className="container header-margin-2">
      <div className="row">
        <div className="col-md-8">
          <h3>Resume</h3>
        </div>
        <div className="col-md-4">
          <a
            class="btn btn-primary"
            href="https://docs.google.com/document/d/1K-0LBPKVfv8pHoIOYVSjfexqBzmTb629k0GWpwDOnVc/edit?usp=sharing"
            role="button"
            target="_blank"
          >
            Download PDF
          </a>
        </div>
      </div>
      <div className="row header-margin-1">
        <div className="col-md-8">
          <h2 className="margin-bottom-1">Experience</h2>
          <h4>Associate Platform Engineer / DevOps @ Manulife</h4>
          <div className="date margin-bottom-1">September '18 - Present</div>
          <ul>
            <li>
              Built Chef cookbook for automated deployment of Jira across
              different servers and regions which saved 70% of manual work
            </li>
            <li>
              Architected enterprise rollout of Jira and Confluence among
              engineering squads
            </li>
            <li>
              Test automation code in virtual environment with testing tools
              such as Test Kitchen and Chef Spec
            </li>
            <li>
              Setup NewRelic to monitor applications with alerting policies
              defined.
            </li>
            <li>
              Built monitoring dashboard with NRQL for infrastructure health and
              application KPIs reporting purposes.
            </li>
            <li>
              Functioned as Linux Systems Administrator for managed services.
            </li>
            <li>
              Developed utilities in GoLang, Python and Bash to automate various
              tasks for more efficient operations.
            </li>
          </ul>

          <h4>Visiting Software Engineer @ Manulife</h4>
          <div className="date margin-bottom-1">JANUARY '18 - AUGUST '18</div>
          <ul>
            <li>
              Developed and maintained fully automated Concourse pipeline to
              upgrade PCF (Pivotal Cloud Foundry) stemcells across four
              availability zones which eliminated 90% of manual work
            </li>
            <li>
              Enabled Malware and Virus scanning of hardened Windows PCF VMs by
              forking and adding additional functionality to the BOSH windows
              utilities addon
            </li>
            <li>
              Developed Docker images to support certain jobs in Concourse
              pipelines
            </li>
            <li>
              Developed Python application that collects data of over 2000
              application instances running on PCF among different environments
              which saved 3 hours of daily work
            </li>
            <li>
              Built Node.js application which create a list of all Apigee
              proxies deployed across different organizations
            </li>
            <li>
              Assisted application teams with promoting Apigee proxies from
              development to production environment, using Artifactory and
              setting up services in PCF
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h2 className="margin-bottom-1">Education</h2>
          <h4>Sheridan College</h4>
          <p>Brampton, ON</p>
          <h5>Computer Programmer, Applied Science & Technology</h5>
          <p>
            Graduated: August '18
            <br />
            GPA: 3.9 / 4.0
          </p>
          <h2 className="margin-bottom-1 header-margin-1">Skills</h2>
          <h5>Automation/Build Tools:</h5>
          <p> Ansible, Chef, Concourse CI and Docker</p>
          <h5>Applications:</h5>
          <p>
            Confluence, Cloud Foundry, GitLab/GitHub, Jira, NetBeans, Visual
            Studio and Visual Paradigm
          </p>
          <h5>Programming Languages:</h5>
          <p>
            C# (ASP.NET), Java (Servlet / JSP), Python (Flask), JavaScript
            (Node.js), Bash, GoLang
          </p>
          <h5>Databases:</h5>
          <p>MySQL, MongoDB, Microsoft SQL Server, Oracle PL/SQL</p>

          <h5>Servers:</h5>
          <p>Ubuntu/Linux (Nginx, Apache) and Windows 2012 R2</p>

          <h5>Cloud:</h5>
          <p>Azure</p>
          <h2 className="margin-bottom-1 header-margin-1">Projects</h2>
          <ul>
            <li>
              Chat app — <i>Node.js, Google maps API, Socket.io, jQuery</i>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/KaranbirSingh7/node-chat-app"
              />
              <p>
                A real time chat application developed with Node.js hosted on
                Heroku. Google maps API provides app with the functionality to
                share location and web sockets provides real-time seamless
                message sharing.
              </p>
            </li>
            <li>
              Jeopardy — <i>Java, Bootstrap, MySQL</i>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/KaranbirSingh7/jeopardy-jsp-servlet"
              />
              <p>
                Implemented MVC in Java using Java Server Pages, Servlets,
                JavaBeans and MySQL for storage with different level of access
                to user and administrator.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </StaggeredList>
)

export default SecondPage
