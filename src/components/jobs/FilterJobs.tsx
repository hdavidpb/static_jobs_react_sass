import { useContext } from "react";
import { JobsState } from "../../context/jobs/JobsContext";
import "../_styles.scss";

const FilterJobs = () => {
  const { filterValues, handleClearFilter } = useContext(JobsState);

  return (
    <div className="filter-container">
      <div className="filter-items-container">
        {filterValues.map((value) => (
          <div key={value} className="item">
            <span>{value}</span>
            <button onClick={() => handleClearFilter(false, value)}>X</button>
          </div>
        ))}
      </div>
      <span className="clear-btn" onClick={() => handleClearFilter(true)}>
        clear
      </span>
    </div>
  );
};

export default FilterJobs;
