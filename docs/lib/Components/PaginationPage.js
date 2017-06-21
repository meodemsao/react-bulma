/**
 * Created by anvu69 on 6/13/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Pagination,
  PaginationEllipsis,
  PaginationLink,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

export default class PaginationPage extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Title>Pagination</Title>
          <Subtitle>A responsive, usable, and flexible <strong>pagination</strong></Subtitle>
          <hr />
          <Content>
            <p>
              The pagination component consists of several elements:
            </p>
            <ul>
              <li>
                <code>{'<PaginationPrevious />'}</code> and <code>{'<PaginationNext />'}</code> for incremental navigation
              </li>
              <li>
                <code>{'<PaginationList />'}</code> which displays page items:
                <ul>
                  <li>
                    <code>{'<PaginationLink />'}</code> for the page numbers
                  </li>
                  <li>
                    <code>{'<PaginationEllipsis />'}</code> for range separators
                  </li>
                </ul>
              </li>
            </ul>
            <p>
              All elements are optional so you can compose your pagination as you wish.
            </p>
          </Content>
          <div className="example">
            <Pagination>
              <PaginationPrevious>Previous</PaginationPrevious>
              <PaginationNext>Next page</PaginationNext>
              <PaginationList>
                <li>
                  <PaginationLink>1</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>45</PaginationLink>
                </li>
                <li>
                  <PaginationLink>46</PaginationLink>
                </li>
                <li>
                  <PaginationLink>47</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>86</PaginationLink>
                </li>
              </PaginationList>
            </Pagination>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Pagination>\n' +
                  '\t<PaginationPrevious>Previous</PaginationPrevious>\n' +
                  '\t<PaginationNext>Next page</PaginationNext>\n' +
                  '\t<PaginationList>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>1</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationEllipsis>&hellip;</PaginationEllipsis>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>45</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>46</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>47</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationEllipsis>&hellip;</PaginationEllipsis>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>86</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t</PaginationList>\n' +
                  '</Pagination>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              The pagination component consists of several elements:
            </p>
          </Content>
          <div className="example">
            <Pagination>
              <PaginationPrevious title="This is the first page" disabled>Previous</PaginationPrevious>
              <PaginationNext>Next page</PaginationNext>
              <PaginationList>
                <li>
                  <PaginationLink current>1</PaginationLink>
                </li>
                <li>
                  <PaginationLink>2</PaginationLink>
                </li>
                <li>
                  <PaginationLink>3</PaginationLink>
                </li>
              </PaginationList>
            </Pagination>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Pagination>\n' +
                  '\t<PaginationPrevious title="This is the first page" disabled>Previous</PaginationPrevious>\n' +
                  '\t<PaginationNext>Next page</PaginationNext>\n' +
                  '\t<PaginationList>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink current>1</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>2</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>3</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t</PaginationList>\n' +
                  '</Pagination>'
                }
              </PrismCode>
            </pre>
          </figure>
          <Content>
            <p>
              By default, the list is located on the left, and the previous/next buttons on the right. But you can change the
              {' '}
              <strong>order</strong>
              {' '}
              of these elements by using the
              {' '}
              <code>position="centered"</code>
              {' '}
              and
              {' '}
              <code>position="right"</code>
              {' '}
              modifiers.
            </p>
          </Content>
          <div className="example">
            <Pagination position="centered">
              <PaginationPrevious>Previous</PaginationPrevious>
              <PaginationNext>Next page</PaginationNext>
              <PaginationList>
                <li>
                  <PaginationLink>1</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>45</PaginationLink>
                </li>
                <li>
                  <PaginationLink current>46</PaginationLink>
                </li>
                <li>
                  <PaginationLink>47</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>86</PaginationLink>
                </li>
              </PaginationList>
            </Pagination>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Pagination position="centered">\n' +
                  '\t<PaginationPrevious>Previous</PaginationPrevious>\n' +
                  '\t<PaginationNext>Next page</PaginationNext>\n' +
                  '\t<PaginationList>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>1</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationEllipsis>&hellip;</PaginationEllipsis>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>45</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink current>46</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>47</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationEllipsis>&hellip;</PaginationEllipsis>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>86</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t</PaginationList>\n' +
                  '</Pagination>'
                }
              </PrismCode>
            </pre>
          </figure>
          <div className="example">
            <Pagination position="right">
              <PaginationPrevious>Previous</PaginationPrevious>
              <PaginationNext>Next page</PaginationNext>
              <PaginationList>
                <li>
                  <PaginationLink>1</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>45</PaginationLink>
                </li>
                <li>
                  <PaginationLink current>46</PaginationLink>
                </li>
                <li>
                  <PaginationLink>47</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>86</PaginationLink>
                </li>
              </PaginationList>
            </Pagination>
          </div>
          <figure className="highlight">
            <pre>
              <PrismCode className="language-jsx">
                {
                  '<Pagination position="right">\n' +
                  '\t<PaginationPrevious>Previous</PaginationPrevious>\n' +
                  '\t<PaginationNext>Next page</PaginationNext>\n' +
                  '\t<PaginationList>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>1</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationEllipsis>&hellip;</PaginationEllipsis>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>45</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink current>46</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>47</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationEllipsis>&hellip;</PaginationEllipsis>\n' +
                  '\t\t</li>\n' +
                  '\t\t<li>\n' +
                  '\t\t\t<PaginationLink>86</PaginationLink>\n' +
                  '\t\t</li>\n' +
                  '\t</PaginationList>\n' +
                  '</Pagination>'
                }
              </PrismCode>
            </pre>
          </figure>
          <hr />
          <Title tag="h2">Size</Title>
          <Content tag="p">
            The pagination comes in <strong>3 additional sizes</strong>.<br />
            You only need to append the <strong>modifier</strong>
            {' '}
            <code>size="small"</code>,
            {' '}
            <code>size="medium"</code>, or
            {' '}
            <code>size="large"</code>
            {' '}
            to the
            {' '}
            <code>{'<Pagination />'}</code>
            {' '}
            component.
          </Content>
          <div className="example">
            <Pagination size="small">
              <PaginationPrevious>Previous</PaginationPrevious>
              <PaginationNext>Next page</PaginationNext>
              <PaginationList>
                <li>
                  <PaginationLink>1</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>45</PaginationLink>
                </li>
                <li>
                  <PaginationLink current>46</PaginationLink>
                </li>
                <li>
                  <PaginationLink>47</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>86</PaginationLink>
                </li>
              </PaginationList>
            </Pagination>
          </div>
          <div className="example">
            <Pagination size="medium">
              <PaginationPrevious>Previous</PaginationPrevious>
              <PaginationNext>Next page</PaginationNext>
              <PaginationList>
                <li>
                  <PaginationLink>1</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>45</PaginationLink>
                </li>
                <li>
                  <PaginationLink current>46</PaginationLink>
                </li>
                <li>
                  <PaginationLink>47</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>86</PaginationLink>
                </li>
              </PaginationList>
            </Pagination>
          </div>
          <div className="example">
            <Pagination size="large">
              <PaginationPrevious>Previous</PaginationPrevious>
              <PaginationNext>Next page</PaginationNext>
              <PaginationList>
                <li>
                  <PaginationLink>1</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>45</PaginationLink>
                </li>
                <li>
                  <PaginationLink current>46</PaginationLink>
                </li>
                <li>
                  <PaginationLink>47</PaginationLink>
                </li>
                <li>
                  <PaginationEllipsis>&hellip;</PaginationEllipsis>
                </li>
                <li>
                  <PaginationLink>86</PaginationLink>
                </li>
              </PaginationList>
            </Pagination>
          </div>
        </Container>
      </Section>
    );
  }
}
