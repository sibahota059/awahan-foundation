import React, { useState } from 'react';

const MediaSection = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data.activeTab);

  return (
    <section className="media" style={{ padding: '0 0 60px', background: '#2e8094' }}>
      <div className="media-tabs" style={{ background: 'white', padding: '30px 100px', display: 'flex', gap: '24px' }}>
        {data.tabs.map(tab => (
          <button 
            key={tab}
            className={`media-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: '16px 32px',
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              borderRadius: '4px',
              transition: 'all 0.3s',
              background: activeTab === tab ? '#2e8094' : 'white',
              color: activeTab === tab ? 'white' : '#000',
              border: activeTab === tab ? 'none' : '1px solid #2e8094'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="media-content" style={{ padding: '36px 100px', display: 'flex', gap: '20px' }}>
        <div className="media-main" style={{ flex: 2 }}>
          <div className="video-container" style={{
            height: '923px',
            background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div className="play-button" style={{
              width: '108px',
              height: '108px',
              background: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '48px',
              color: '#2e8094'
            }}>▶</div>
            <div className="video-info" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '48px',
              background: 'linear-gradient(180deg, transparent, rgba(18,18,18,1))',
              borderRadius: '0 0 8px 8px'
            }}>
              <h3 style={{ fontSize: '28px', fontWeight: 500, color: 'white', lineHeight: '1.4' }}>{data.mainVideo.title}</h3>
            </div>
          </div>
        </div>
        <div className="media-sidebar" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {data.sideVideos.map(video => (
            <div key={video.id} className="media-thumb" style={{
              height: '295px',
              background: 'linear-gradient(135deg, #3aa4be, #2e8094)',
              borderRadius: '8px',
              cursor: 'pointer'
            }}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;