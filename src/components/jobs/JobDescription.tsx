import React from "react";
import { IJob } from "../../context/jobs/interfaces";
import "../_styles.scss";
interface IProps {
  job: IJob;
}
const JobDescription = ({ job }: IProps) => {
  return (
    <div className="job-profile-container">
      <div className="logo-container">
        <img src={job.logo} alt="logo" />
      </div>
      <div className="info-container">
        <div className="title-job-container">
          <h3>{job.company}</h3>
          <div className="featured-new-desc">
            {job.new && <div className="is-new">NEW!</div>}
            {job.featured && <div className="is-featured">FEATURED!</div>}
          </div>
        </div>
        <div className="title-job-container">
          <span className="job-description">{job.role}</span>
        </div>
        <div className="title-job-container">
          <div className="job-desc-list">
            <span className="item-desc">{job.postedAt}</span>
            <span className="item-desc">{job.contract}</span>
            <span className="item-desc">{job.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
