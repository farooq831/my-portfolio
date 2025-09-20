import React, { useState } from 'react';



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
    <div style={styles.bg}>
      <div style={styles.card}>
        <img src={require('./assets/profile.jpg')} alt="Profile" style={styles.avatar}/>
        <div style={styles.name}>Muhammad Farooq</div>
        <div style={styles.subtitle}>
          <span style={styles.oneline}>Information Technology Student @ IIUI | Tech Enthusiast</span>
        </div>
        <div style={styles.linksBox}>
          {links.map((link, index) => (
            <div style={{ position: 'relative' }} key={link.label}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.linkItem}
                aria-label={`Open ${link.label}`}
              >
                <div style={styles.leftContent}>
                  <img
                    src={require(`./assets/${link.icon}`)}
                    alt={`${link.label} icon`}
                    style={styles.icon}
                  />
                  <span style={styles.label}>{link.label}</span>
                </div>
                <div
                  style={styles.moreIconWrapper}
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
                <div style={styles.shareMenu}>
                  {shareOptions.map(option => (
                    <div
                      key={option.label}
                      style={styles.shareOption}
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


const styles = {
  bg: {
    minHeight: '100vh',
    
    background: 'linear-gradient(135deg, #1b232c 60%, #295f95ff 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 10px'
  },
  card: {
    width: '628px',
    background: 'rgba(24,28,38,0.98)',
    borderRadius: '26px',
    boxShadow: '0 8px 36px rgba(30,40,60,0.19)',
    padding: '30px 18px 30px 18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px',
    border: '2px solid rgba(60,100,180,0.12)',
  },
  avatar: {
    width: '84px',
    height: '84px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(255,255,255,0.12)',
    marginBottom: '4px'
  },
  name: {
    fontWeight: 700,
    fontSize: '1.8rem',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '3px'
  },
  subtitle: {
    width: '100%',
    textAlign: 'center'
  },
  oneline: {
    fontSize: '1.09rem',
    fontWeight: 500,
    color: '#e5eaff',
    opacity: 0.93,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '95vw',
    display: 'inline-block'
  },
  linksBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: '1.05rem',
  },
  linkItem: {
    background: '#181f27',
    padding: '16px 22px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 600,
    fontSize: '1.08rem',
    boxShadow: '0px 2px 7px rgba(30, 30, 30, .07)',
    transition: 'background 0.2s',
    border: '1px solid #263242',
    cursor: 'pointer',
  },
  leftContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
  icon: {
    width: '27px',
    height: '27px',
    background: 'none'
  },
  label: {
    flex: 1,
  },
  moreIconWrapper: {
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#b6bed9',
    cursor: 'pointer',
  },
  shareMenu: {
    position: 'absolute',
    top: 44,
    right: 24,
    background: '#222c38',
    borderRadius: '12px',
    boxShadow: '0 4px 18px rgba(0,0,0,0.15)',
    zIndex: 100,
    padding: '6px 0',
    minWidth: '160px',
    color: '#fff',
  },
  shareOption: {
    padding: '10px 14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    borderBottom: '1px solid #334056',
  }
};
export default MainCard;
