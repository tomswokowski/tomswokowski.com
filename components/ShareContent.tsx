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
  contentName: string;
  onClose: () => void;
};

const ShareContent: React.FC<ShareContentProps> = ({
  url,
  contentName,
  onClose,
}) => {
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
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
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
          className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full"
          onClick={stopPropagation}
        >
          <div className="relative">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-2 ml-auto flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                aria-hidden="true"
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 pb-6">
              <div className="flex flex-col items-center mt-3 text-center">
                <div className="text-2xl">Share this content:</div>
                <h3 className="mb-4 text-secondary font-semibold">
                  {contentName}
                </h3>
                <div className="flex justify-center w-full mb-4">
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
                  <div className="mt-2 text-green-500">{copySuccess}</div>
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
