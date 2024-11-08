import "./OverviewLessons.css";

const OverviewLessons = () => {
  return (
    <section className="box box-2 w-100 ">
      <div className="box-top flex">
        <h2>Mijn lessen</h2>
        <button className="button">Bekijk al mijn lessen</button>
      </div>
      <div className="box-top flex ptb-1">
        <h2>Lessen Vandaag</h2>
        <div class="filter">
          <label for="filter-options">Filter op:</label>
          <select id="filter-options">
            <option value="all">All</option>
            <option value="popular">Most Popular</option>
            <option value="recent">Most Recent</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
      <div className="lessons flex w-100">
        <div className="box lessons-item w-100 p-1">
          <div className="box-top">
            <h3>Wiskunde <span className="date">7/11/2024</span></h3>
            <div className="time">16:00 - 18:00</div>
          </div>
          <div className="box-info ptb-1">
            <ul>
              <li>Onderwerp</li>
              <li>Docent</li>
              <li>Onderwerp</li>
            </ul>
          </div>
          <div className="box-top">
            <button className="button">Bekijk details</button> 
            <button className="button">Annuleer</button>
          </div>
        </div>
        <div className="box lessons-item w-100 p-1">
          <div className="box-top">
            <h3>Wiskunde <span className="date">7/11/2024</span></h3>
            <div className="time">16:00 - 18:00</div>
          </div>
          <div className="box-info ptb-1">
            <ul>
              <li>Onderwerp</li>
              <li>Docent</li>
              <li>Onderwerp</li>
            </ul>
          </div>
          <div className="box-top">
            <button className="button">Bekijk details</button> 
            <button className="button">Annuleer</button>
          </div>
        </div>        <div className="box lessons-item w-100 p-1">
          <div className="box-top">
            <h3>Wiskunde <span className="date">7/11/2024</span></h3>
            <div className="time">16:00 - 18:00</div>
          </div>
          <div className="box-info ptb-1">
            <ul>
              <li>Onderwerp</li>
              <li>Docent</li>
              <li>Onderwerp</li>
            </ul>
          </div>
          <div className="box-top">
            <button className="button">Bekijk details</button> 
            <button className="button">Annuleer</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewLessons;
