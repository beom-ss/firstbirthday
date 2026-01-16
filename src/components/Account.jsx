import React, { useState } from 'react';
import './Account.css';
import { HiOutlineClipboardDocument, HiOutlineCheck } from 'react-icons/hi2';

const accounts = [
  { label: '아빠', name: '이범석', bank: '신한은행', number: '110-564-070338' },
  { label: '엄마', name: '권서희', bank: '신한은행', number: '110-317-986999' },
];

const Account = () => {
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (number, idx) => {
    navigator.clipboard.writeText(number);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className='account__container' id='account'>
      <h2 className='section__title'>마음 전하실 곳</h2>
      <div className='account__cards'>
        {accounts.map((acc, idx) => (
          <div key={idx} className='account__card'>
            <span className='account__label'>{acc.label}</span>
            <h3 className='account__name'>{acc.name}</h3>
            <p className='account__info'>{acc.bank} {acc.number}</p>
            <button className='account__copy' onClick={() => handleCopy(acc.number, idx)}>
              {copiedIdx === idx ? (
                <><HiOutlineCheck /> 복사됨</>
              ) : (
                <><HiOutlineClipboardDocument /> 복사</>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Account;
