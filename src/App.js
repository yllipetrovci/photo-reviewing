import React, { useEffect, useState } from 'react';
import ApprovedImagesScroller from './components/ApprovedImagesScroller';
import Button from './components/Button';
import MainImage from './components/MainImage';
import Panel from './components/Panel';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { GlobalStyle } from './components/styles/Global';
import CrossIcon from './assets/cross.svg';
import TickIcon from './assets/tick.svg';
import axios from 'axios';
import config from './config';
// import randomPhotos from './mock-random-photos';

function App() {

  const [approvedPhotos, setApprovedPhotos] = useState([]);
  const [rejectedPhotos, setRejectedPhotos] = useState([]);
  const [currentRandomPhoto, setCurrentRandomPhoto] = useState({});
  const [loadingMainImage, setLoadingMainImage] = useState(true);

  // id: "h0Urf4P6cC8"

  const hasItemRejectedOrApproved = (id) => {
    
    console.log("==============================")
    let rejectedOrApprovedItems = [...rejectedPhotos, ...approvedPhotos];
    const result = rejectedOrApprovedItems.filter((rejectedOrApprovedItem) => rejectedOrApprovedItem.id === id);
    console.log({id,result});
    console.log( result.length > 0 ? "MATCHHH":"NOT MATCHHHHHH")
    return result.length > 0;
  }

  const getRandomPhoto = async () => {
    try {
      setLoadingMainImage(true);
      const response = await axios.get(config.baseURL
        , { params: { client_id: config.clientID } });
      setCurrentRandomPhoto(response.data);

    } catch (e) {
      console.log(e);
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
              <Button onClickEvent={onClickRejected} icon={CrossIcon} bgColor="rgb(69,69,69)" />
              <Button onClickEvent={onClickApproved} icon={TickIcon} bgColor="rgb(64,83,220)" />
            </div>
          </div>
        </Panel>
      </Container>
    </>

  );
}

export default App;
