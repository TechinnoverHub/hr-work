import React, { useEffect, useState } from 'react';
import './index.scss';
import client from 'Components/Services/client';

import AltHeader from 'Components/AltHeader';
import Footer from 'Components/Footer';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import MyCommentBox from 'Components/MyComment';
import * as Markdown from 'react-markdown';
import * as contentful from 'contentful-management';

const ACCESS_KEY = process.env.REACT_APP_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;
const SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const newClient = contentful.createClient({
  accessToken: ACCESS_KEY
});

const SingleBlog = () => {
  const [article, setArticle] = useState({});
  const [artLoadingStatus, setArtLoadingStatus] = useState('FETCHING');
  const [comLoadingStatus, setComLoadingStatus] = useState('');
  const params = useParams();

  const getEntries = async () => {
    try {
      const blogEntry = await client.getEntry(params.id);
      if (!article.sys) {
        setArtLoadingStatus('SUCCESS');
      }
      setArticle(blogEntry);
    } catch (error) {
      if (!article.sys) {
        setArtLoadingStatus('ERROR');
      }
      console.error('error fetching entry');
    }
  };

  useEffect(() => {
    if (params && params.id) {
      getEntries();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const updateEntry = async (e, { name, comment }) => {
    e.preventDefault();
    try {
      setComLoadingStatus('FETCHING');
      const getSpace = await newClient.getSpace(SPACE_ID);
      const createdComment = await getSpace.createEntry('comment', {
        fields: {
          name: {
            'en-US': name
          },
          body: {
            'en-US': comment
          }
        }
      });
      const newComment = await createdComment.publish();

      const itemToUpdate = await getSpace.getEntry(params.id);
      let updatedItem;
      if (
        itemToUpdate.fields.userComments &&
        itemToUpdate.fields.userComments['en-US']
      ) {
        itemToUpdate.fields.userComments['en-US'].push({
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: newComment.sys.id
          }
        });
        updatedItem = await itemToUpdate.update();
      } else {
        itemToUpdate.fields['userComments'] = {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: newComment.sys.id
              }
            }
          ]
        };
        updatedItem = await itemToUpdate.update();
      }
      await updatedItem.publish();
      getEntries();
      setComLoadingStatus('SUCCESS');
    } catch (error) {
      setComLoadingStatus('ERROR');
    }
  };

  const Loader = () => {
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
  };

  const comments = article.fields
    ? article.fields.userComments
    : article.fields;

  return (
    <div>
      <AltHeader />
      {artLoadingStatus === 'FETCHING' ? (
        <Loader />
      ) : (
        <div className="SinglePost-wrapper">
          <div className="SinglePost">
            <h2 className="Title">{article.fields && article.fields.title}</h2>
            <div className="single-post--image">
              <img
                src={
                  article.fields &&
                  article.fields.featured &&
                  article.fields.featured.fields &&
                  article.fields.featured.fields.file.url
                }
                alt=""
              />
            </div>

            <div className="Post-body">
              <Markdown source={article.fields && article.fields.content} />
            </div>
          </div>

          <MyCommentBox
            submitArticle={updateEntry}
            comments={comments}
            createStatus={comLoadingStatus}
          />
        </div>
      )}
      {/* <LatestBlog /> */}
      <Footer />
    </div>
  );
};

export default SingleBlog;
