'user client';
import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Button from './btn';
export default function Card({
  img,
  header,
  modules,
  price,
  description,
  isPaid = false,
  isPass = false,
  href,
  inProcess,
}) {
  if (isPaid === true && inProcess === false) {
    return (
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={img.src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={img.alt}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
        <div className="mx-4 mb-4 flex justify-center items-center">
          <Button
            type="link"
            className="btn-primary-sm w-[100%] text-center"
            href={href}
          >
            Start
          </Button>
        </div>
      </div>
    );
  }

  if (inProcess === true && isPass === false) {
    return (
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={img.src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={img.alt}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-4 py-2 rounded-[8px] bg-primer1 text-white0 text-center">
              Process
            </span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
      </div>
    );
  }
  if (inProcess === true && isPass === true) {
    return (
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={img.src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={img.alt}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <span className="px-4 py-2 rounded-[8px] bg-primer1 text-white0 text-center">
              Passed
            </span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="inline-flex flex-col gap-4 rounded-[8px] shadow-xl max-w-[337px] overflow-hidden">
        <div className="relative w-full">
          <Image
            src={img.src}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={img.alt}
            loading="eager"
          />
        </div>
        <header className="shrink-0 basis-0 text-[24px] leading-[24.6px] px-4 font-bold ">
          {header}
        </header>
        <div className="flex justify-between items-center px-[16px]">
          <div className="shrink-0 flex items-center justify-between gap-2">
            <Icon
              icon="material-symbols:library-books-rounded"
              className="text-primer1"
            />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px] text-primer1">
              {modules}
            </span>
          </div>
          <div className="shrink-0 flex items-center gap-2">
            <Icon icon="bx:purchase-tag" />
            <span className="shrink-0 text-[14px] font-normal leading-[19.6px]">{`Rp. ${price.toLocaleString(
              'id-ID',
            )}`}</span>
          </div>
        </div>
        <p className="shrink-0 text-[14px] font-normal leading-[19.6px] px-4 pb-4">
          {description}
        </p>
      </div>
    </>
  );
}

Card.propTypes = {
  isPaid: PropTypes.bool,
  isPass: PropTypes.bool,
  inProcess: PropTypes.bool,
  header: PropTypes.string,
  modules: PropTypes.number,
  price: PropTypes.string,
  href: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.object,
};
