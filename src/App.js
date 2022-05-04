import React, { useCallback, useEffect, useState } from 'react';
/**
 * Styles
 */
import { Layout } from './components/styles/Layout.styled';
import { GlobalStyle } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styles/Theme';
/**
 * Assets
 */
import { assets } from './assets';
/**
 * Service
 */
import photoService from './services/photoService';
/**
 * Components
 */
import ApprovedImagesScroller from './components/ApprovedImagesScroller';
import Button from './components/Button';
import MainImage from './components/MainPhoto';
import Panel from './components/Panel';
import Header from './components/Header';
/**
 * Constants
 */
import { BUTTON_LABELS } from './const/buttonLabels';

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Panel>
          <Header />
          <div className="content">
            <ApprovedImagesScroller items={approvedPhotos} />
            {currentRandomPhoto.urls && <MainImage isLoading={loadingMainImage} imageURL={currentRandomPhoto.urls.small} />}
            <div className='buttons'>
              <Button label={BUTTON_LABELS.REJECTED} onClickEvent={onClickRejected} icon={assets.RejectedIcon} />
              <Button label={BUTTON_LABELS.APPROVED} onClickEvent={onClickApproved} icon={assets.ApprovedIcon} />
            </div>
          </div>
        </Panel>
      </Layout>
    </ThemeProvider>
  );
};

export default App;