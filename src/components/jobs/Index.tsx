import FilterJobs from "./FilterJobs";
import JobItem from "./JobItem";
import "../_styles.scss";
import { useContext } from "react";
import { JobsState } from "../../context/jobs/JobsContext";

const Jobs = () => {
  const { jobs, filterValues } = useContext(JobsState);

  return (
    <div className="jobs-container">
      {filterValues.length !== 0 && <FilterJobs />}

      <div className="jobs-list-container">
        {jobs.map((job) => (
          <JobItem job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
