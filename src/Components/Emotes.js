import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emoteImages from '../EmoteImages';
import Search from './Search';
import { useState } from 'react';
function Emotes() {
  let [searchedEmote, setSearch] = useState('');
  const copyImageUrl = async (url) => {
    await navigator.clipboard.writeText(url);
    toast.success('Copied', { duration: 1500 });
  };
  let emotesToDisplay =
    searchedEmote === ''
      ? emoteImages
      : emoteImages.filter((emote) =>
          emote.alt.toLowerCase().includes(searchedEmote.toLowerCase())
        );

  return (
    <div>
      <Toaster
        toastOptions={{
          className: 'notification',
        }}
      />

      <Search setSearched={{ searchedEmote, setSearch }} />
      <p>
        Click on an emote to copy it , paste it in dicord chat and press enter.
      </p>
      <div className="emote-section">
        {emotesToDisplay.map((emote, index) => (
          <img
            onClick={() => copyImageUrl(emote.src)}
            className="emote-image"
            src={emote.src}
            key={index}
            alt={emote.alt}
          />
        ))}
      </div>
    </div>
  );
}
export default Emotes;
