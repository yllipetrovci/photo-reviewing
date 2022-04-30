import React from 'react';
import ApprovedImagesScroller from './components/ApprovedImagesScroller';
import Button from './components/Button';
import MainImage from './components/MainImage';
function App() {
  return (
    <div className="App">
      <ApprovedImagesScroller />
      <MainImage />

      <Button/>
      <Button/>
    </div>
  );
}

export default App;
