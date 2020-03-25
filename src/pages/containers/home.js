import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import Sidebar from '../../components/layout/Sidebar';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/container/handle-error';
import VideoPlayer from '../../player/container/video-player';
import Categories from '../../components/Categories/index';

class Home extends Component {
  state = {
    modalVisible: false,
  };

  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media,
    });
  };

  handleCloseModal = event => {
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
                <VideoPlayer autoplay src={media.src} title={media.title} />
              </Modal>
            </ModalContainer>
          )}
        </Layout>
      </HandleError>
    );
  }
}
export default Home;
