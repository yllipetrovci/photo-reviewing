import React, { useEffect, useState } from 'react';
import ApprovedImagesScroller from './components/ApprovedImagesScroller';
import Button from './components/Button';
import MainImage from './components/MainImage';
import Panel from './components/Panel';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { GlobalStyle } from './components/styles/Global';

import { assets } from './assets';
import photoService from './services/photoService';

function App() {
  const [approvedPhotos, setApprovedPhotos] = useState([]);
  const [rejectedPhotos, setRejectedPhotos] = useState([]);
  const [currentRandomPhoto, setCurrentRandomPhoto] = useState({});
  const [loadingMainImage, setLoadingMainImage] = useState(true);

  const hasItemRejectedOrApproved = (id) => {
    let rejectedOrApprovedItems = [...rejectedPhotos, ...approvedPhotos];

    const result = rejectedOrApprovedItems.filter((rejectedOrApprovedItem) => rejectedOrApprovedItem.id === id);
    return result.length > 0;
  }

  const getRandomPhoto = async () => {
    try {
      setLoadingMainImage(true);
      const response = await photoService.getRandomPhoto();
      if (hasItemRejectedOrApproved(response.data.id)) {
        getRandomPhoto();
      } else {
        setCurrentRandomPhoto(response.data);
      }

    } catch (e) {
      console.error(e);
    } finally {
      setLoadingMainImage(false);
    }

  }

  useEffect(() => {
    getRandomPhoto();
  }, []);

  const onClickApproved = () => {
    setApprovedPhotos([...approvedPhotos, { id: currentRandomPhoto.id, urls: currentRandomPhoto.urls }]);
    getRandomPhoto();

  }

  const onClickRejected = () => {
    setRejectedPhotos([...rejectedPhotos, { id: currentRandomPhoto.id, urls: currentRandomPhoto.urls }]);
    getRandomPhoto();
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Panel>
          <Header />
          <div className="content">
            <ApprovedImagesScroller items={approvedPhotos} />
            {currentRandomPhoto.urls && <MainImage isLoading={loadingMainImage} imageURL={currentRandomPhoto.urls.small} />}
            <div className='buttons'>
              <Button onClickEvent={onClickRejected} icon={assets.RejectedIcon} bgColor="rgb(69,69,69)" />
              <Button onClickEvent={onClickApproved} icon={assets.ApprovedIcon} bgColor="rgb(64,83,220)" />
            </div>
          </div>
        </Panel>
      </Container>
    </>

  );
}

export default App;
