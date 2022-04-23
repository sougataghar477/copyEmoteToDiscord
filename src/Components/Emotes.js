import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emoteImages from '../EmoteImages';
import Search from './Search';
import { useState } from 'react';
function Emotes() {
  let [searchedEmote, setSearch] = useState('');
  const copyImageUrl = async (url) => {
    await navigator.clipboard.writeText(url);
    toast.success('Copied to clipboard !', { duration: 1500 });
  };
  let emotesToDisplay =
    searchedEmote === ''
      ? emoteImages.slice(0, 36)
      : emoteImages.filter((emote) => {
          return emote.alt.toLowerCase().includes(searchedEmote.toLowerCase());
        });

  return (
    <div className="emote-container">
      <Toaster
        toastOptions={{
          className: '',
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
        Click on an emote to copy it , paste it in discord chat and press enter
        .
        <br /> Not all emotes will be shown at first , please search to get what
        you want. More emotes to be added .
      </p>
      <div className="emote-section">
        {emotesToDisplay.length > 0 ? (
          emotesToDisplay.map((emote, index) => (
            <img
              onClick={() => copyImageUrl(emote.src)}
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
            <img
              src={emoteImages.find((emote) => emote.alt === 'NotLikeThis').src}
              alt={'NotLikeThis'}
            />
          </p>
        )}
      </div>
    </div>
  );
}
export default Emotes;
