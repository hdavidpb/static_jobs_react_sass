import JobLanguages from "./JobLanguages";
import JobDescription from "./JobDescription";
import { IJob } from "../../context/jobs/interfaces";
import "../_styles.scss";

interface IProps {
  job: IJob;
}
const JobItem = ({ job }: IProps) => {
  return (
    <div className="job-item-container">
      <JobDescription job={job} />
      <JobLanguages languages={job.languages} />
    </div>
  );
};

export default JobItem;
