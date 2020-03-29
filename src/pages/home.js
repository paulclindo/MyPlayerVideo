import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import Sidebar from '../components/layout/Sidebar';
import ModalContainer from '../widgets/containers/modal';
import Modal from '../widgets/components/modal';
import HandleError from '../error/container/handle-error';
import Categories from '../components/Categories/index';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';

type HomeProps = {|
  data: Object,
|};
type HomeState = {|
  modalVisible: boolean,
  media: any,
|};
class Home extends Component<HomeProps, HomeState> {
  state = {
    modalVisible: false,
  };

  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media,
    });
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const {
      data: { categories },
    } = this.props;
    const { modalVisible, media } = this.state;
    return (
      <HandleError>
        <Layout>
          <Sidebar />
          <Categories
            handleOpenModal={this.handleOpenModal}
            categories={categories}
          />
          {modalVisible && (
            <ModalContainer>
              <Modal handleClick={this.handleCloseModal}>
                <VideoPlayerContainer
                  autoplay
                  src={media.src}
                  title={media.title}
                />
              </Modal>
            </ModalContainer>
          )}
        </Layout>
      </HandleError>
    );
  }
}
export default Home;
