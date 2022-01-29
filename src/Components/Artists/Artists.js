import './Artists.css';

function Artists() {
  return (
    <div className="content-container">
      <div className="artist-container">
        <div className="container-left">
          <div className="name">Burna Boy</div>
          <div className="fans">
            <span>382K</span> <span> fans</span>
          </div>
          <div className="divider"></div>
          <div className="description">Long description go here and many more lines</div>
        </div>
        <div className="container-right">
          <div className="subheading">Top tracks</div>
          <div className="tracks-row">
            <span>1</span>
            <span>You are my lady - Remastered</span>
            <span>02:54</span>
          </div>
          <div className="tracks-row">
            <span>2</span>
            <span>You are my lady - Remastered</span>
            <span>02:54</span>
          </div>
          <div className="tracks-row">
            <span>2</span>
            <span>You are my lady - Remastered</span>
            <span>02:54</span>
          </div>
        </div>
      </div>

      <div className="artist-container-mobile">
        <div className="container-top">
          <div className="artist-thumbnail"></div>
          <div className="name">Burna Boy</div>
          <div className="fans">
            <span>382K</span> <span> fans</span>
          </div>
          <div className="divider"></div>
          <div className="description">Long description go here and many more lines</div>
        </div>
        <div className="container-bottom">
          <div className="subheading">Top tracks</div>
          <div className="tracks-row">
            <span>1</span>
            <span>You are my lady - Remastered</span>
            <span>02:54</span>
          </div>
          <div className="tracks-row">
            <span>2</span>
            <span>You are my lady - Remastered</span>
            <span>02:54</span>
          </div>
          <div className="tracks-row">
            <span>2</span>
            <span>You are my lady - Remastered</span>
            <span>02:54</span>
          </div>
        </div>
      </div>

      <div className="album-container">
        <div className="subheading">Albums</div>

        <div className="album-row">
          <div className="album-card">
            <div className="album-thumbnail"></div>
            <div className="album-name">Outside</div>
            <div className="album-year">2019</div>
          </div>
          <div className="album-card">
            <div className="album-thumbnail"></div>
            <div className="album-name">Outside</div>
            <div className="album-year">2019</div>
          </div>
          <div className="album-card">
            <div className="album-thumbnail"></div>
            <div className="album-name">Outside</div>
            <div className="album-year">2019</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;
