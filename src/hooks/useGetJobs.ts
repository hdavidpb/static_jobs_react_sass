import React, { useEffect, useState } from "react";
import { IJob } from "../context/jobs/interfaces";

interface IProps {
  filterValues: string[];
  jobs: IJob[];
}

const useGetJobs = ({ filterValues, jobs }: IProps) => {
  const [jobsRes, setJobsRes] = useState<IJob[]>([]);

  useEffect(() => {
    let jobResults: IJob[] = [];
    filterValues.forEach((value) => {
      const jobsRes = jobs.filter((job) => job.languages.includes(value));
      jobResults = [...jobResults, ...jobsRes];
    });
    let norepeat: IJob[] = [];
    jobResults.forEach((job) => {
      if (norepeat.includes(job)) {
        return;
      } else {
        norepeat.push(job);
      }
    });

    if (norepeat.length === 0) {
      setJobsRes(jobs);
    } else {
      setJobsRes(norepeat);
    }
  }, [filterValues]);

  return { jobsRes };
};

export default useGetJobs;
