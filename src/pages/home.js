import React, { Component } from "react";
import Layout from "../components/layout/Layout";
import Sidebar from "../components/layout/Sidebar";
// import ModalContainer from "../widgets/containers/modal";
import Modal from "../components/Modal";
import Categories from "../components/Categories";
import VideoPlayerContainer from "../containers/VideoPlayerContainer";
// import ErrorBoundary from "../components/Error/ErrorBoundary";
type HomeProps = {|
  data: Object
|};

const Home = (props: HomeProps) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [media, setMedia] = React.useState(null);
  const [collapsed, setCollapsed] = React.useState(true);

  const handleOpenModal = media => {
    setModalVisible(true);
    setMedia(media);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const toggleBar = () => {
    setCollapsed(!collapsed);
  };
  const {
    data: { categories }
  } = props;
  return (
    <Layout>
      <Sidebar toggle={collapsed} onClick={toggleBar} />
      <Categories
        toggle={collapsed}
        handleOpenModal={handleOpenModal}
        categories={categories}
      />
      {modalVisible && (
        <Modal handleClick={handleCloseModal}>
          <VideoPlayerContainer autoplay src={media.src} title={media.title} />
        </Modal>
      )}
    </Layout>
  );
};

export default Home;
