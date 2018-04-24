import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <ul>
        <li><a href="http://vimeo.com/user12035599/videos" title="Vimeo" className="icon-vimeo" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Vimeo']);"></a></li>
        <li><a href="http://se.linkedin.com/in/peterlagerstrom" title="LinkedIn" className="icon-linkedin" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'LinkedIn']);"></a></li>
        <li><a href="https://twitter.com/peterlagerstrom" title="Twitter" className="icon-twitter" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Twitter']);"></a></li>
        <li><a href="http://instagram.com/peterlagerstrom" title="Instagram" className="icon-instagram" target="_blank" onclick="_gaq.push(['_trackEvent', 'ExternalLink', 'Instagram']);"></a></li>
        <li><a href="https://foursquare.com/peterlagerstrom" title="Foursquare" className="icon-foursquare" target="_blank" onlick="_gaq.push(['_trackEvent', 'ExternalLink', 'Foursquare']);"></a></li>
      </ul>
    );
  }
}

export default App;
