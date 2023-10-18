'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const TabView = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Set default tab

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className=" mx-[128px] my-[56px] flex flex-col gap-[40px]">
        <div className="tab-buttons flex gap-[48px] font-bold text-[32px]">
          <button
            onClick={() => openTab('tab1')}
            className="tab-button ${activeTab === 'tab1' ? 'active' : ''} active:bg-blue-200 active:shadow-md py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"
          >
            <span>Academy</span>
          </button>
          <button
            onClick={() => openTab('tab2')}
            className="tab-button ${activeTab === 'tab2' ? 'active' : ''} active:bg-blue-200 active:shadow-md py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"
          >
            <span>Webinar</span>
          </button>
          <button
            onClick={() => openTab('tab3')}
            className="tab-button ${activeTab === 'tab3' ? 'active' : ''} active:bg-blue-200 active:shadow-md py-[16px] px-[16px] rounded-[8px] transition duration-300 cursor-pointer hover:bg-primer4"
          >
            <span>Counseling</span>
          </button>
        </div>
        <div
          id="tab1"
          className="tab-content"
          style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}
        >
          <div className="flex flex-col gap-[32px]">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={'/assets/ilustration/Effective Communication Skills.svg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px]">
                  <h4 className="text-[24px] font-bold">
                    Effective Communication Skills
                  </h4>
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                      <div className="flex gap-[8px]">
                        <Icon
                          icon="material-symbols:library-books-rounded"
                          className="text-primer1"
                          style={{ fontSize: '24px' }}
                        />
                        <p>7 modules</p>
                      </div>
                      <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                        Process
                      </p>
                    </div>
                    <p className="text-[14px]">
                      This training will help you grasp the fundamentals of
                      effective communication, including active listening, clear
                      speaking, and persuasive writing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={
                    '/assets/ilustration/Stress Management and Resilience.svg'
                  }
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px]">
                  <h4 className="text-[24px] font-bold">
                    Stress Management and Resilience
                  </h4>
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                      <div className="flex gap-[8px]">
                        <Icon
                          icon="material-symbols:library-books-rounded"
                          className="text-primer1"
                          style={{ fontSize: '24px' }}
                        />
                        <p>7 modules</p>
                      </div>
                      <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                        Passed
                      </p>
                    </div>
                    <p className="text-[14px]">
                      This training will help you manage stress and improve
                      mental resilience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={'/assets/ilustration/Ethical Decision-Making.svg'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px]">
                  <h4 className="text-[24px] font-bold">
                    Ethical Decision-Making
                  </h4>
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                      <div className="flex gap-[8px]">
                        <Icon
                          icon="material-symbols:library-books-rounded"
                          className="text-primer1"
                          style={{ fontSize: '24px' }}
                        />
                        <p>7 modules</p>
                      </div>
                      <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                        Process
                      </p>
                    </div>
                    <p className="text-[14px]">
                      This training will help you understand ethics in
                      decision-making and act ethically in the business world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={
                    '/assets/ilustration/Problem-Solving and Decision-Making.svg'
                  }
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px]">
                  <h4 className="text-[24px] font-bold">
                    Problem-Solving and Decision-Making
                  </h4>
                  <div className="flex flex-col gap-[16px]">
                    <div className="flex gap-[8px] text-[14px] justify-between items-center">
                      <div className="flex gap-[8px]">
                        <Icon
                          icon="material-symbols:library-books-rounded"
                          className="text-primer1"
                          style={{ fontSize: '24px' }}
                        />
                        <p>7 modules</p>
                      </div>
                      <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                        Passed
                      </p>
                    </div>
                    <p className="text-[14px]">
                      This training will sharpen your problem-solving and
                      decision-making abilities. You'll learn techniques for
                      analysis, identifying alternative solutions, and making
                      sound decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tab2"
          className="tab-content"
          style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}
        >
          <div className="flex flex-col gap-[32px]">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={'/assets/img/Effective Communication.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px]  w-[100%]">
                  <h4 className="text-[24px] font-bold">
                    Effective Communication
                  </h4>
                  <div className="flex text-[14px] justify-between items-center">
                    <div className="flex gap-[8px]">
                      <Icon
                        icon="uiw:date"
                        color="#0c356a"
                        width="20"
                        height="20"
                      />
                      <p>9/23/23 20:00</p>
                    </div>
                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                      Paid Off
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={'/assets/img/Stay Productive.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px]  w-[100%]">
                  <h4 className="text-[24px] font-bold">Stay Productive</h4>
                  <div className="flex text-[14px] justify-between items-center">
                    <div className="flex gap-[8px]">
                      <Icon
                        icon="uiw:date"
                        color="#0c356a"
                        width="20"
                        height="20"
                      />
                      <p>4/4/23 20:00</p>
                    </div>
                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                      Not Yet Paid
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={'/assets/img/Creativity and Innovation.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px] w-[100%]">
                  <h4 className="text-[24px] font-bold">
                    Creativity and Innovation
                  </h4>
                  <div className="flex text-[14px] justify-between items-center">
                    <div className="flex gap-[8px]">
                      <Icon
                        icon="uiw:date"
                        color="#0c356a"
                        width="20"
                        height="20"
                      />
                      <p>11/7/23 20:00</p>
                    </div>
                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                      Paid Off
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-[16px] items-start shadow-xl w-[337px]">
                <Image
                  src={'/assets/img/Presentation Public Speaking.png'}
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  alt={''}
                  loading="eager"
                />
                <div className="px-[16px] pb-[16px]  w-[100%]">
                  <h4 className="text-[24px] font-bold">
                    Presentation Public Speaking
                  </h4>
                  <div className="flex text-[14px] justify-between items-center">
                    <div className="flex gap-[8px]">
                      <Icon
                        icon="uiw:date"
                        color="#0c356a"
                        width="20"
                        height="20"
                      />
                      <p>8/16/23 20:00</p>
                    </div>
                    <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                      Paid Off
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="tab3"
          className="tab-content"
          style={{ display: activeTab === 'tab3' ? 'block' : 'none' }}
        >
          <div className="px-[24px] py-[16px] bg-primer4 rounded-[8px] flex gap-[48px] items-start shadow-xl w-[551px]">
            <div className="flex flex-col gap-[24px] justify-start items-start w-[162px]">
              <h4 className="text-[24px] font-bold">
                Career Counseling via Video Conference
              </h4>
              <p className="bg-primer1 text-white0 px-[16px] py-[8px] rounded-[8px]">
                Paid Off
              </p>
            </div>
            <ul className="list-disc">
              <li>
                Video conference sessions allow consumers to interact directly
                with counselors through video and audio, creating a more
                personal connection.
              </li>
              <li>
                In video conference, consumers can see the counselor's facial
                expressions and body language, allowing for important non-verbal
                communication and understanding.
              </li>
              <li>
                Due to real-time communication, consumers' questions and issues
                can be addressed more quickly in video sessions.
              </li>
              <li>
                Video conference enables more interactive discussions and active
                information sharing, providing consumers with deeper insights
                into their careers.
              </li>
              <li>
                Consumers can gain a deeper understanding of counselor advice
                and guidance through visual communication in video conference.
              </li>
              <li>
                Consumers can arrange video sessions according to their
                convenience, allowing them to receive career guidance without
                leaving their homes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabView;
