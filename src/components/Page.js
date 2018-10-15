import React from 'react';
import PropTypes from 'prop-types';

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };

  renderButtons = () => {
    const years = [2015, 2014, 2013, 2012, 2011];

    return years.map((item, index) => {
      // [1]
      return (
        <button key={index} className="btn" onClick={this.onBtnClick}>
          {item}
        </button>
      );
    });
  };

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props;

    if (error) {
      return <p className="error">An error happened while loading photos.</p>;
    }

    if (isFetching) {
      return <p>Loading…</p>;
    } else {
      return photos.map(entry => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ));
    }
  };

  render() {
    const { year, photos } = this.props;
    return (
      <div className="ib page">
        <p>{this.renderButtons()}</p>
        <h3>
          {year} [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};
