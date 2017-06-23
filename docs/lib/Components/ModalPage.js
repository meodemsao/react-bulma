/**
 * Created by anvu69 on 6/10/17.
 */
import React from 'react';
import { PrismCode } from 'react-prism';
import {
  Container,
  Content,
  Box,
  Button,
  Delete,
  Icon,
  Image,
  Level,
  LevelItem,
  LevelLeft,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardFoot,
  ModalCardHead,
  ModalCardTitle,
  ModalClose,
  ModalContent,
  Media,
  Message,
  MessageBody,
  MessageHeader,
  Section,
  Subtitle,
  Title
} from 'reactbulma';

export default class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showImageModal: false,
      showModalCard: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.renderImageModal = this.renderImageModal.bind(this);
    this.renderModalCard = this.renderModalCard.bind(this);
  }
  closeModal(showModal, showImageModal, showModalCard) {
    this.setState({ showModal: showModal, showImageModal: showImageModal, showModalCard: showModalCard });
  }
  renderModal() {
    return (
      <Modal active={this.state.showModal}>
        <ModalBackground onClick={() => this.closeModal(false)} />
        <ModalContent>
          <Box>
            <Media>
              <Media left tag="div">
                <Image size="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
              </Media>
              <Media content>
                <Content>
                  <p>
                    <strong>John Smith</strong>
                    {' '}
                    <small>@johnsmith</small>
                    {' '}
                    <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                  </p>
                </Content>
                <Level>
                  <LevelLeft>
                    <LevelItem tag="a">
                      <Icon size="small" name="reply" />
                    </LevelItem>
                    <LevelItem tag="a">
                      <Icon size="small" name="retweet" />
                    </LevelItem>
                    <LevelItem tag="a">
                      <Icon size="small" name="heart" />
                    </LevelItem>
                  </LevelLeft>
                </Level>
              </Media>
            </Media>
          </Box>
        </ModalContent>
        <ModalClose onClick={() => this.closeModal(false)} />
      </Modal>
    );
  }
  renderImageModal() {
    return (
      <Modal active={this.state.showImageModal}>
        <ModalBackground onClick={() => this.closeModal(false)} />
        <ModalContent>
          <Image tag="p" size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />
        </ModalContent>
        <ModalClose onClick={() => this.closeModal(false)} />
      </Modal>
    );
  }
  renderModalCard() {
    return (
      <Modal active={this.state.showModalCard}>
        <ModalBackground onClick={() => this.closeModal(false)} />
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Modal title</ModalCardTitle>
            <Delete />
          </ModalCardHead>
          <ModalCardBody>
            <Content>
              <h1>Hello World</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
              </p>
              <h2>Second level</h2>
              <p>
                Curabitur accumsan turpis pharetra
                {' '}
                <strong>augue tincidunt</strong>
                {' '}
                blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
              </p>
              <ul>
                <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                <li>Ut non enim metus.</li>
              </ul>
              <h3>Third level</h3>
              <p>
                Quisque ante lacus, malesuada ac auctor vitae, congue
                {' '}
                <a href="">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.
              </p>
              <ol>
                <li>Donec blandit a lorem id convallis.</li>
                <li>Cras gravida arcu at diam gravida gravida.</li>
                <li>Integer in volutpat libero.</li>
                <li>Donec a diam tellus.</li>
                <li>Aenean nec tortor orci.</li>
                <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
                <li>Vivamus maximus ultricies pulvinar.</li>
              </ol>
              <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>
              <p>
                Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.
              </p>
              <p>
                Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.
              </p>
              <p>
                Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.
              </p>
              <h4>Fourth level</h4>
              <p>
                Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.
              </p>
              <p>
                Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.
              </p>
              <p>
                Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.
              </p>
              <h5>Fifth level</h5>
              <p>
                Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.
              </p>
              <h6>Sixth level</h6>
              <p>
                Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.
              </p>
            </Content>
          </ModalCardBody>
          <ModalCardFoot>
            <Button color="success" onClick={() => this.closeModal(false)}>Save changes</Button>
            <Button onClick={() => this.closeModal(false)}>Cancel</Button>
          </ModalCardFoot>
        </ModalCard>
      </Modal>
    );
  }
  render() {
    return (
      <div>
        <Section>
          <Container>
            <Title>Modal</Title>
            <Subtitle>A classic <strong>modal</strong> overlay, in which you can include <em>any</em> content you want</Subtitle>
            <hr />
            <Content>
              <p>The modal structure is very simple:</p>
              <ul>
                <li>
                  <code>{'<Modal />'}</code>: the main container
                  <ul>
                    <li>
                      <code>{'<ModalBackground />'}</code>: a transparent overlay that can act as a click target to close the modal
                    </li>
                    <li>
                      <code>{'<ModalContent />'}</code>: a horizontally and verticaly centered container, with a maximum width of 640px, in which you can include <em>any</em> content
                    </li>
                    <li>
                      <code>{'<ModalClose />'}</code>: a simple cross located in the top right corner
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                <Button size="large" color="primary" modalType="button" onClick={() => this.closeModal.showModal(true, false, false)}>Launch example modal</Button>
              </p>
            </Content>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {
                    '<Modal>\n' +
                    '\t<Modal type="background" />\n' +
                    '\t\t<Modal type="content">\n' +
                    '\t\t\t<!-- Any other React-Bulma elements you want -->\n' +
                    '\t\t</Modal>\n' +
                    '\t<ModalClose onClick="Any func..."></ModalClose>\n' +
                    '</Modal>\n'
                  }
                </PrismCode>
              </pre>
            </figure>
            <Content>
              <p>
                To
                {' '}
                <strong>activate</strong>
                {' '}
                the modal, just add the
                {' '}
                <code>active</code>
                {' '}
                modifier on the
                {' '}
                <code>{'<Modal />'}</code>
                {' '}
                container
              </p>
            </Content>
            <Message color="danger">
              <MessageHeader>
                No JavaScript
              </MessageHeader>
              <MessageBody>
                Bulma does <strong>not</strong> include any JavaScript interaction. You will have to implement the class toggle yourself.
              </MessageBody>
            </Message>
            <hr />
            <Title tag="h3">Image modal</Title>
            <Content>
              <p>
                Because a modal can contain
                {' '}
                <strong>anything you want</strong>, you can very simply use it to build an image gallery for example:
              </p>
              <p>
                <Button size="large" color="primary" modalType="button" onClick={() => this.closeModal(false, true, false)}>Launch image modal</Button>
              </p>
            </Content>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {
                    '<Modal active={this.state.showImageModal}>\n' +
                    '\t<ModalBackground onClick={() => this.closeModal(false)} />\n' +
                    '\t<ModalContent>\n' +
                    '\t\t<Image tag="p" size="4by3" src="http://bulma.io/images/placeholders/1280x960.png" />\n' +
                    '\t</ModalContent>\n' +
                    '\t<ModalClose onClick="Any func..."/>\n' +
                    '</Modal>'
                  }
                </PrismCode>
              </pre>
            </figure>
            <hr />
            <Title tag="h3">Modal card</Title>
            <Content>
              <p>
                If you want a more classic modal, with a
                {' '}
                <strong>head</strong>, a
                {' '}
                <strong>body</strong>
                {' '}
                and a
                {' '}
                <strong>foot</strong>, use the
                {' '}
                <code>{'<ModalCard />'}</code>,
                {' '}
                <code>{'<ModalCardHead />'}</code>,
                {' '}
                <code>{'<ModalCardBody />'}</code>,
                {' '}
                <code>{'<ModalCardFoot />'}</code>.
              </p>
              <p>
                <Button size="large" color="primary" modalType="button" onClick={() => this.closeModal(false, false, true)}>Launch modal card</Button>
              </p>
            </Content>
            <figure className="highlight">
              <pre>
                <PrismCode className="language-jsx">
                  {
                    '<Modal active={this.state.showModalCard}>\n' +
                    '\t<ModalBackground onClick="Any func..." />\n' +
                    '\t<ModalCard>\n' +
                    '\t\t<ModalCardHead>\n' +
                    '\t\t\t<ModalCardTitle>Modal title</ModalCardTitle>\n' +
                    '\t\t\t<Delete />\n' +
                    '\t\t</ModalCardHead>\n' +
                    '\t\t<ModalCardBody>\n' +
                    '\t\t\t<!-- Content ... -->\n' +
                    '\t\t</ModalCardBody>\n' +
                    '\t\t<ModalCardFoot>\n' +
                    '\t\t\t<Button color="success" onClick="Any func...">Save changes</Button>\n' +
                    '\t\t\t<Button onClick="Any func...">Cancel</Button>\n' +
                    '\t\t</ModalCardFoot>\n' +
                    '\t</ModalCard>\n' +
                    '</Modal>'
                  }
                </PrismCode>
              </pre>
            </figure>
          </Container>
        </Section>
        {this.renderModal()}
        {this.renderImageModal()}
        {this.renderModalCard()}
      </div>
    );
  }
}
