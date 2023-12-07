import React, { useEffect } from 'react';

const AdsComponent = ({ dataAdSlot }) => {
  useEffect(() => {
    const loadAds = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    if (window.adsbygoogle) {
      loadAds();
    } else {
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.onload = loadAds;
      document.head.appendChild(script);
    }

  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ 
        display: 'block', 
        width: 728, 
        height: 90,
        margin: 'auto'
      }}
      data-ad-client="ca-pub-1400916298755008"
      data-ad-slot='7188598646'
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdsComponent;
