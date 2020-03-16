import React, { Component } from 'react';
import './index.scss';
// import marked from 'marked';
// import axios from 'axios';
import client from 'Components/Services/client';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import LatestBlog from 'Components/LatestBlog';
import { withRouter } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import MyCommentBox from 'Components/MyComment';
import * as Markdown from 'react-markdown';

class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = { article: null };
  }

  componentDidMount() {
    console.log(this.props, '+++ props +++');
    const { match } = this.props;
    if (match.params && match.params.id) {
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
      return (
        <div className="skeleton" style={{ fontSize: 20, lineHeight: 2 }}>
          <h1>
            <Skeleton height={100} width={500} />
          </h1>
          <p>
            <Skeleton count={20} />
          </p>
        </div>
      );
    }
    return (
      <div>
        <AltHeader />
        <div className="SinglePost-wrapper">
          <div className="SinglePost">
            <h2 className="Title">{this.state.article.fields.title}</h2>

            <p className="Post-body">
              <Markdown source={this.state.article.fields.content} />
            </p>
          </div>

          <MyCommentBox />
        </div>
        <LatestBlog />
        <Footer />
      </div>
    );
  }
}

export default withRouter(SingleBlog);
