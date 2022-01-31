import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Spinner
} from 'reactstrap';

function Home({ searchValue }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [searchValue]);

  function getData() {
    if (songs.length === 0) setLoading(true);

    axios.get(`https://musicdb-api.herokuapp.com/search?q=${searchValue}`).then((res) => {
      setLoading(false);
      setSongs([...res.data.data]);
    });
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        {songs &&
          songs.map((song, index) => (
            <Col xs="12" lg="3" key={index}>
              <Card className="mb-5">
                <CardImg alt="Card image cap" src={song.artist.picture} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">{song.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    By <Link to={`/artists/${song.artist.id}`}>{song.artist.name}</Link>
                  </CardSubtitle>
                  <CardTitle tag="h6">{song.album.title}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        {loading && <Spinner type="grow" color="warning" />}
      </Row>
    </Container>
  );
}

Home.propTypes = {
  searchValue: PropTypes.string
};

export default Home;
