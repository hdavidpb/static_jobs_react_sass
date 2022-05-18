import { createContext, useState } from "react";
import { IJob, IJobcontext } from "./interfaces";
import dataJobs from "../../data";
import useGetJobs from "../../hooks/useGetJobs";

export const JobsState = createContext({} as IJobcontext);

const JobsContext = ({ children }: { children: JSX.Element }) => {
  // const [jobs, setJobs] = useState<IJob[]>(dataJobs);
  const [filterValues, setFilterValues] = useState<string[]>([]);
  const { jobsRes } = useGetJobs({ jobs: dataJobs, filterValues });
  console.log(dataJobs);
  const handleSetFilterValues = (language: string) => {
    setFilterValues((prev) => {
      let newFilterValues: string[] = [];

      if (prev.includes(language)) {
        newFilterValues = prev;
      } else {
        newFilterValues = [...prev, language];
      }
      return newFilterValues;
    });
  };
  const handleClearFilter = (isAll: boolean, language?: string) => {
    if (!isAll) {
      setFilterValues((prev) => {
        const newFilterValues = prev.filter((value) => value !== language);
        return newFilterValues;
      });
    } else {
      setFilterValues([]);
    }
  };

  return (
    <JobsState.Provider
      value={{
        jobs: jobsRes,
        filterValues,
        handleSetFilterValues,
        handleClearFilter,
      }}
    >
      {children}
    </JobsState.Provider>
  );
};

export default JobsContext;
