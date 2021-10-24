import React from 'react';
import '../App.css';
import profileimage from '../Images/profilepict.JPG';

function Home(){
    return(
    <div className = "Homepage">
        <h1>My Portfolio</h1>
            <div className = "profileimg"> 
                <img src = {profileimage} alt="image" width="280" height="220" />
            </div>
        <div className ="Title">
            <h2>Hi, I am Jayna Grace Tan</h2>
            <p>Student at SUSS, studying Business Analytics, minor in Psychology</p>
        </div>
        <div className = "WorkExperience">
            <h4>Work experience</h4>
            <h5>Digital Church Office</h5>
            <h5>Products and Operations Intern &emsp; 1st Oct 2021- 30th Mar 2022</h5>
            <ul className="a">
                <li>Optimised operation procedure by enhancing excel spreadsheet </li>
            </ul>
            <h5>SHAREit Technology</h5>
            <h5>Sales Business Analytics Intern &emsp; 1st Oct 2021- 30th Mar 2022</h5>
            <ul className="b">
                <li>Enhanced and redesign daily reports on Tableau software that stakeholders depend on for regular updates on the business revenue progressions</li>
	            <li>Enhance daily reports on excel to aid the salespersons on the overview of their country sales </li>
                <li>Identified main drivers for gaming campaigns allowing focus to be on popular games to increase revenue without exhausting inventory </li>
                <li>Designed and transferred daily reports from excel to Zoho Analytics dashboard for better visualization for salespersons and stakeholders. Increase and improve efficiency of the team as daily reporting will be automated.</li>
                <li>Created reporting template for bonus schemes, tracking of commission and for monthly financial analysis. This helps salespersons to track their performances during the quarter to hit their target.</li>
            </ul>
            <h5>SAS Institute PTE LTD</h5>
            <h5>Associate Data Analyst &emsp; 8th Aug 2017- 31st Apr 2018</h5>
            <ul className="c">
                <li>Designed the structure of graphs through JavaScript codes and inserting URL of codes into SAS Viya, to ensure that the graphs can take in any kind of data inputs.</li>
	            <li>Loaded unstructured data into Hadoop using Cloudera functions and Linux commands.</li>
                <li>Installed and configured SAS Enterprise Miner and other SAS products into clients’ machines and troubleshoot errors faced by the clients. </li>
                <li>Programed using base SAS language and macro for users without access permission to access SAS console to make required changes. And design structure of codes for access to take place.</li>
            </ul>
            <div className ="Activities">
                <h4>Activities</h4>

                <h5>SUSS Catholic Community Interest Group</h5>
                <h5>Coordinator &emsp; Aug 2019 - Aug 2021</h5>
                <ul className="d">
                <li>Manage a team of students that leads and build the community and focus on the growth of individuals </li>
                <li>Coordinated and led a camp for more than 60 people </li>
                </ul>

                <h5>SUSS Service Learning - Beyond Social Services &emsp; Jan 2019 - Dec 2019</h5>
                <ul className="e">
                <li>Tutored and mentored children from less-privileged backgrounds on their school homework bi-weekly. </li>
                </ul>

                <h5>School of Information Technology Committee Member</h5>
                <h5>Senior Exco &emsp; Aug 2015 - Apr 2016</h5>
                <ul className="f">
                <li>Coordinated and led a camp for leaders where activities are intentionally planned for students to work together as a team.</li>
                <li>Participated and helped out in camps that was organized for the students in NYP.  </li>
                </ul>
                
            </div>
        </div>
    </div>

        

    )
}

export default Home;