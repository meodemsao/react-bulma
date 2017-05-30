import React from 'react';
import {
  Col,
  Cols,
  Container,
  Content,
  Footer
} from 'reactbulma';

export default () => {
  return (
    <Footer>
      <Container>
        <Cols>
          <Col size="3">
            <Content id="about">
              <strong>Reactbulma</strong>
              {' '}
              by
              {' '}
              <a
                href="http://vgroup.vn"
                property="cc:attributionName"
                rel="cc:attributionURL"
              >
                Vu Cong Bang
              </a>
            </Content>
          </Col>
          <Col size="5" />
          <Col size="4" />
        </Cols>
      </Container>
    </Footer>
  );
};
