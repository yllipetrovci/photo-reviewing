import React, { useState } from 'react';
import ApprovedImagesScroller from './components/ApprovedImagesScroller';
import Button from './components/Button';
import MainImage from './components/MainImage';
import Panel from './components/Panel';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { GlobalStyle } from './components/styles/Global';
import CrossIcon from './assets/cross.svg';
import TickIcon from './assets/tick.svg';


function App() {

  const [approvedPhotos, setApprovedPhotos] = useState([{}]);

  const onClickApproved = () => {
    console.log('onClickApproved');

    setApprovedPhotos([...approvedPhotos, {}]);
  }

  const onClickRejected = () => {
    console.log('onClickRejected')

  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Panel>
          <Header />
          <div className="content">
            <ApprovedImagesScroller items={approvedPhotos} />
            <MainImage />
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
