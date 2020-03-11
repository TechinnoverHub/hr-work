import React, { Component } from 'react';
import './index.scss';
// import marked from 'marked';
// import axios from 'axios';
import client from 'Components/Services/client';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import LatestBlog from 'Components/LatestBlog';
import { withRouter } from 'react-router';

class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = { article: null };
  }

  componentDidMount() {
    console.log(this.props, '+++ props +++');
    const { match } = this.props;
    if (match.params && match.params) {
      client.getEntry(match.params.id).then(response => {
        console.log('SINGLE ARTICLE', response);
        this.setState({ article: response });
      });
    }
  }
  // getParsedMarkdown(content) {
  //   return {
  //     __html: marked(content, { sanitize: true })
  //   };
  // }
  render() {
    if (!this.state.article) {
      return <h1>Loading......</h1>;
    }
    return (
      <div>
        <AltHeader />
        <div className="SinglePost-wrapper">
          <div className="SinglePost">
            <h2 className="Title">{this.state.article.fields.title}</h2>

            <p className="Post-body">{this.state.article.fields.content}</p>
          </div>
        </div>
        <LatestBlog />
        <Footer />
      </div>
    );
  }
}

export default withRouter(SingleBlog);
