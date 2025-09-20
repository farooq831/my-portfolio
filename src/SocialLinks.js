import React, { useState } from 'react';
import './SocialLinks.css'; // Import the CSS file



// Clipboard Fallback
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    alert('Link copied!');
  } catch {
    alert('Could not copy the link!');
  }
  document.body.removeChild(textArea);
}

const links = [
  { label: 'GitHub', url: 'https://github.com/farooq831', icon: 'github.svg' },
  { label: 'StackOverflow', url: 'https://stackoverflow.com/users/27325831/muhammad-farooq', icon: 'stackoverflow.svg' },
  { label: 'Twitter', url: 'https://twitter.com/farooq831', icon: 'twitter.svg' },
  { label: 'Discord', url: 'https://discord.com/muhammadfarooq/85025', icon: 'discord.svg' },
  { label: 'Facebook', url: 'https://www.facebook.com/share/1F4pzcwBDx/', icon: 'facebook.svg' },
  { label: 'Instagram', url: 'https://www.instagram.com/btw_farooq/', icon: 'instagram.svg' },
  { label: 'WhatsApp', url: 'https://wa.me/+3438805832', icon: 'whatsapp.svg' },
  { label: 'Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=muhammadfarooq904011@gmail.com', icon: 'email.svg' },
  { label: 'Telegram', url: 'https://t.me/farooq831', icon: 'telegram.svg' },
];

const MoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2"/>
    <circle cx="12" cy="12" r="2"/>
    <circle cx="12" cy="19" r="2"/>
  </svg>
);

const shareOptions = [
  { label: 'Copy Link', icon: '🔗', getUrl: link => link.url },
  { label: 'Share via WhatsApp', icon: '🟢', getUrl: link => `https://wa.me/?text=${encodeURIComponent(link.url)}` },
  { label: 'Share via Facebook', icon: '🔵', getUrl: link => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link.url)}` },
  { label: 'Share on X', icon: '❌', getUrl: link => `https://twitter.com/intent/tweet?url=${encodeURIComponent(link.url)}` },
];

const MainCard = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleShare = (option, link) => {
    if (option.label === 'Copy Link') {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        navigator.clipboard.writeText(link.url)
          .then(() => alert('Link copied!'))
          .catch(() => fallbackCopyTextToClipboard(link.url));
      } else {
        fallbackCopyTextToClipboard(link.url);
      }
    } else {
      window.open(option.getUrl(link), '_blank');
    }
    setOpenIndex(null);
  };

  return (
    <div className="bg">
      <div className="card">
        <img src={require('./assets/profile.jpg')} alt="Profile" className="avatar" />
        <div className="name">Muhammad Farooq</div>
        <div className="subtitle">
          <span className="oneline">Information Technology Student @ IIUI | Tech Enthusiast</span>
        </div>
        <div className="linksBox">
          {links.map((link, index) => (
            <div style={{ position: 'relative' }} key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="linkItem"
                aria-label={`Open ${link.label}`}
              >
                <div className="leftContent">
                  <img
                    src={require(`./assets/${link.icon}`)}
                    alt={`${link.label} icon`}
                    className="icon"
                  />
                  <span className="label">{link.label}</span>
                </div>
                <div
                  className="moreIconWrapper"
                  title="Share"
                  tabIndex={0}
                  onClick={e => {
                    e.preventDefault();
                    setOpenIndex(openIndex === index ? null : index);
                  }}
                >
                  <MoreIcon />
                </div>
              </a>
              {openIndex === index && (
                <div className="shareMenu">
                  {shareOptions.map(option => (
                    <div
                      key={option.label}
                      className="shareOption"
                      onClick={() => handleShare(option, link)}
                    >
                      <span style={{ marginRight: '10px' }}>{option.icon}</span>
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MainCard;
