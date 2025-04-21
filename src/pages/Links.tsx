import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Disc, Youtube, Music, Cloud, Twitter } from 'lucide-react';
import { toast } from 'sonner';

interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  copyable?: boolean;
}

const Links: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: 'Discord',
      username: '@1024ping',
      url: '#',
      icon: <Disc size={24} />,
      color: '#5865F2',
      copyable: true
    },
    {
      platform: 'Twitter',
      username: '@1024ping',
      url: 'https://twitter.com/1024ping',
      icon: <Twitter size={24} />,
      color: '#1DA1F2'
    },
    {
      platform: 'YouTube',
      username: '@jamiw1',
      url: 'https://www.youtube.com/@jamiw1',
      icon: <Youtube size={24} />,
      color: '#FF0000'
    },
    {
      platform: 'Spotify',
      username: '1024ping',
      url: 'https://open.spotify.com/artist/1skIDnrbDDR08NRiwXYyAx',
      icon: <Music size={24} />,
      color: '#1DB954'
    },
    {
      platform: 'SoundCloud',
      username: '1024ping',
      url: 'https://soundcloud.com/1024ping/',
      icon: <Cloud size={24} />,
      color: '#FF5500'
    }
  ];

  const handleLinkClick = async (link: SocialLink, e: React.MouseEvent) => {
    if (link.copyable) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(link.username);
        toast.success('Username copied to clipboard!');
      } catch (err) {
        toast.error('Failed to copy username');
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-xl mx-auto"
    >
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
        links to stuff
      </h1>

      <div className="space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-card group ${link.copyable ? 'cursor-copy' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            style={{ borderLeft: `4px solid ${link.color}` }}
            onClick={(e) => handleLinkClick(link, e)}
          >
            <div className="p-2 rounded-full bg-dark-700 group-hover:bg-opacity-50 transition-colors">
              {React.cloneElement(link.icon as React.ReactElement, { 
                className: `transition-colors`,
                style: { color: link.color }
              })}
            </div>
            
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{link.platform}</h3>
              <p className="text-dark-400">{link.username}</p>
            </div>
            
            <ExternalLink size={18} className="text-dark-500 group-hover:text-accent transition-colors" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Links;
