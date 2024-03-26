import './DownloadButtons.scss'
import Windows from '@/images/windows.svg';
import macOS from '@/images/apple.svg';

export const DownloadButtons = () => {
  return (
    <div className="download-buttons">
      <a href="" className="download-buttons__link">
        <img
          src={Windows}
        />
        Windows
      </a>
      <a href="" className="download-buttons__link">
        <img
          src={macOS}
        />
        macOS
      </a>
    </div>
  );
};
