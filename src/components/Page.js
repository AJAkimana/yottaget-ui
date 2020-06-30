import React from 'react';
import { Helmet } from 'react-helmet';

export const Page = ({ title, children, ...rest }) => {
  return (
    <div {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};
