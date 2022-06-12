import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { emoteImages, notFoundImages } from '../EmoteImages';
import Search from './Search';
import { useState } from 'react';
function Emotes() {
  let [searchedEmote, setSearch] = useState('');
  const copyImageUrl = async (emote) => {
    await navigator.clipboard.writeText(emote.src);
    toast.success(emote.alt + ' copied to clipboard !', { duration: 1500 });
  };
  let emotesToDisplay =
    searchedEmote === ''
      ? emoteImages
      : emoteImages.filter((emote) => {
          return emote.alt.toLowerCase().includes(searchedEmote.toLowerCase());
        });

  return (
    <div className="emote-container">
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: '#32363d',
            padding: '8px 16px',
            color: '#fff',
            fontSize: '16px',
          },
        }}
      />

      <Search setSearched={{ searchedEmote, setSearch }} />
      <p>
        Click on an emote to copy it, paste it in discord chat and press enter.
        <br />
        Try not to include image url and text in one line otherwise the url will
        be visible.
        <br/>If you like this website, 
        <a href="https://www.paypal.com/paypalme/sougataghar47" 
           style={{color: white}}>it would help me alot if you can donate by clicking here.  
        <img src="https://cdn.discordapp.com/emojis/870246404172431423.webp?size=32" style={{verticalAlign:'sub'}} />
        </a>
      </p>
      <div className="emote-section">
        {emotesToDisplay.length > 0 ? (
          emotesToDisplay.map((emote, index) => (
            <img
              onClick={(e) => copyImageUrl(emote)}
              className="emote-image"
              src={emote.src}
              key={index}
              alt={emote.alt}
              title={emote.alt}
            />
          ))
        ) : (
          <p>
            Sorry, couldn't find what you were looking for{'. '}
            {/* <img
              src={emoteImages.find((emote) => emote.alt === 'NotLikeThis').src}
              alt={'NotLikeThis'}
            /> */}
            <img
              src={notFoundImages[Math.round(Math.random())].src}
              alt={'NotFound'}
            />
          </p>
        )}
      </div>
    </div>
  );
}
export default Emotes;
