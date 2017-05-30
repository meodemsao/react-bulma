import React from 'react';
import { Box, Col, Cols } from 'reactbulma';

export const ColsNarrowColumn = () => {
  return (
    <Cols>
      <Col narrow="narrow">
        <Box style={{ width: 200 }}>
          <p className="title is-5">Narrow column</p>
          <p className="subtitle">This column is only 200px wide.</p>
        </Box>
      </Col>
      <Col>
        <Box>
          <p className="title is-5">Flexible column</p>
          <p className="subtitle">This column will take up the remaining space available.</p>
        </Box>
      </Col>
    </Cols>
  );
};

export default ColsNarrowColumn;
