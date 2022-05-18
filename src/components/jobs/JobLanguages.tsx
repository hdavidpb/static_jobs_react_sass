import { useContext } from "react";
import { JobsState } from "../../context/jobs/JobsContext";
import "../_styles.scss";

interface IProps {
  languages: string[];
}

const JobLanguages = ({ languages }: IProps) => {
  const { handleSetFilterValues } = useContext(JobsState);

  return (
    <div className="job-skills-container">
      {languages.map((language) => (
        <span
          key={language}
          className="skills-item"
          onClick={() => handleSetFilterValues(language)}
        >
          {language}
        </span>
      ))}
    </div>
  );
};

export default JobLanguages;
