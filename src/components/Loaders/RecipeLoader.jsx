import React from 'react';
import ContentLoader from 'react-content-loader';
import { LoaderWrapper } from './Styles';

const RecipeLoader = (props) => (
  <LoaderWrapper>
    <ContentLoader
      speed={2}
      width={260}
      height={320}
      viewBox='0 0 260 320'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      {...props}>
      <rect x='0' y='0' rx='15' ry='15' width='260' height='320' />
    </ContentLoader>
  </LoaderWrapper>
);

export default RecipeLoader;
