import "./Filter.css";

const DashFilter = ({id}) => {
    

  return (

    <div className="flex justify-content-end">
    <div className="filter flex">
      <label className="flex" htmlFor={id}>Filter:
      <select name="filter" id={id}>
        <option value="all">Alle</option>
        <option value="popular">Wiskunde</option>
        <option value="recent">Nederlands</option>
        <option value="rating">Top Rated</option>
      </select>
      </label>
    </div>
  </div>
  );
};

export default DashFilter;
