import React, { useState } from 'react';
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

type ShareContentProps = {
  url: string;
  onClose: () => void;
};

const ShareContent: React.FC<ShareContentProps> = ({ url, onClose }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          onClick={stopPropagation}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-2xl mb-4">Share this content</h3>
                <div className="flex justify-center w-3/4 mb-4">
                  <EmailShareButton url={url} className="mx-2">
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                  <LinkedinShareButton url={url} className="mx-2">
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                  <TwitterShareButton url={url} className="mx-2">
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                </div>
                <CopyToClipboard
                  text={url}
                  onCopy={() => setCopySuccess('URL copied to clipboard.')}
                >
                  <button className="w-40 py-2 text-center text-white rounded-md shadow-md bg-primary">
                    Copy to Clipboard
                  </button>
                </CopyToClipboard>
                {copySuccess && (
                  <span className="mt-2 text-green-500">{copySuccess}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareContent;
