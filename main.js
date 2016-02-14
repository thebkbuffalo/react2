var data = [
  {id: 1, artist: "The Clash", video: <iframe width="420" height="315" src="https://www.youtube.com/embed/AL8chWFuM-s" frameborder="0" allowfullscreen></iframe>},
  {id: 2, artist: "Pantera", video: <iframe width="420" height="315" src="https://www.youtube.com/embed/7m7njvwB-Ks" frameborder="0" allowfullscreen></iframe>}
]

var VideoPlayer = React.createClass({
  render: function() {
    return (
      <div className="videoBox">
        <h1>Videos!!</h1>
        <ListOfVideos data={this.props.data}/>
        <VideoForm />
      </div>
    );
  }
});

var ListOfVideos = React.createClass({
  render: function() {
    var videoNodes = this.props.data.map(function(video) {
      return (
        <Video artist={video.artist} key={video.id}>
          {video.video}
        </Video>
      );
    });
    return (
      <div class="videoList">
        {videoNodes}
      </div>
    );
  }
});

var VideoForm = React.createClass({
  render: function() {
    var newVideoInput = <input className="newVideo" type="text" placeholder="video" />
    var newArtistInput = <input className="newArtist" type="text" placeholder="artist" />
    var newVideoSubmitButton = <button className="addVideo">Add A New Video!</button>
    return (
      <div className="videoForm">
        <h1>Add A New Video!</h1>
        {newVideoInput}
        <br/><br/>
        {newArtistInput}
        <br/><br/>
        {newVideoSubmitButton}
      </div>
    );
  }
});

var Video = React.createClass({
  render: function() {
    return (
      <div className="video">
        <h2 className="artist">
          {this.props.artist}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

ReactDOM.render(
  <VideoPlayer data={data}/>,
  document.getElementById('content')
);
