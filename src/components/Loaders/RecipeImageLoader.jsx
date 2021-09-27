import React from 'react';
import ContentLoader from 'react-content-loader';
import { LoaderWrapper } from './Styles';

const RecipeImageLoader = (props) => (
  <LoaderWrapper>
    <ContentLoader
      speed={2}
      width={605}
      height={400}
      viewBox='0 0 605 405'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}>
      <rect x='0' y='0' rx='15' ry='15' width='600' height='300' />
      <rect x='90' y='310' rx='10' ry='15' width='415' height='25' />
      <rect x='160' y='342' rx='10' ry='15' width='270' height='20' />
      <rect x='205' y='370' rx='10' ry='15' width='190' height='20' />
    </ContentLoader>
  </LoaderWrapper>
);

export default RecipeImageLoader;
