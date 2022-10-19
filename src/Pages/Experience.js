import React from 'react';
import {VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
	return (
		<div className="experience">
		    <VerticalTimeline lineColor="#3e497a">
		        <VerticalTimelineElement
		          	className="vertical-timeline-element--education"
		          	date="2001 - 2011"
		          	iconStyle={{ background: "#3e497a", color: "#fff" }}
		          	icon={<SchoolIcon />}
		        >
			        <h3 className="vertical-timeline-element-title">
			            5th School, Ulaanbaatar, Mongolia
			        </h3>
			        <p> High School Diploma</p>
		        </VerticalTimelineElement>
		        <VerticalTimelineElement
			        className="vertical-timeline-element--education"
			        date="2011 - 2015"
			        iconStyle={{ background: "#3e497a", color: "#fff" }}
			        icon={<SchoolIcon />}
		        >
		          	<h3 className="vertical-timeline-element-title">
		            	School of Information and Telecommunication Technology University, Ulaanbaatar, Mongolia
		          	</h3>

		          	<h4 className="vertical-timeline-element-subtitle">
		            	Bachelor's Degree
		          	</h4>

		          	<p> Information Technology Engineer</p>
		        </VerticalTimelineElement>
		        <VerticalTimelineElement
		          	className="vertical-timeline-element--work"
		          	date="2015 - 2017"
		          	iconStyle={{ background: "#e9d35b", color: "#fff" }}
		          	icon={<WorkIcon />}
		        >
		          	<h3 className="vertical-timeline-element-title">
		            	Engineer for Company
		          	</h3>
		          	<h4 className="vertical-timeline-element-subtitle">
		            	Ulaanbaatar, Mongolia
		          	</h4>
		          	<p>Developed the frontend 1 project</p>
		        </VerticalTimelineElement>
		        <VerticalTimelineElement
			        className="vertical-timeline-element--education"
			        date="2017 - 2019"
			        iconStyle={{ background: "#3e497a", color: "#fff" }}
			        icon={<SchoolIcon />}
		        >
		          	<h3 className="vertical-timeline-element-title">
		            	Edo Culture Center Japanese Language School
		          	</h3>

		          	<h4 className="vertical-timeline-element-subtitle">
		            	Tokyo, Japan
		          	</h4>

		          	<p> N3 Degree</p>
		        </VerticalTimelineElement>
		        <VerticalTimelineElement
		          	className="vertical-timeline-element--work"
		          	date="2019 - 2021"
		          	iconStyle={{ background: "#e9d35b", color: "#fff" }}
		          	icon={<WorkIcon />}
		        >
		          	<h3 className="vertical-timeline-element-title">
		            	Sales Service Staff for Skytel
		          	</h3>
		          	<h4 className="vertical-timeline-element-subtitle">
		            	Ulaanbaatar, Mongolia
		          	</h4>
		          	<p>
		            	Helped the people, product sales.
		          	</p>
		        </VerticalTimelineElement>
		        <VerticalTimelineElement
		          	className="vertical-timeline-element--work"
		          	date="2021 - present"
		          	iconStyle={{ background: "#e9d35b", color: "#fff" }}
		          	icon={<WorkIcon />}
		        >
		          	<h3 className="vertical-timeline-element-title">
		            	Developer for Khabuko
		          	</h3>
		          	<h4 className="vertical-timeline-element-subtitle">
		            	Ulaanbaatar, Mongolia
		          	</h4>
		          	<p>
		            	Developed the frontend infrastructure for 3 projects
		          	</p>
		        </VerticalTimelineElement>
		    </VerticalTimeline>
    </div>
	);
}

export default Experience;