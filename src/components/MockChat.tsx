/* eslint-disable @next/next/no-img-element */
export const MockChat = () => {
  return (
    <div className='stream-chat'>
      <section
        data-test-selector='chat-room-component-layout'
        className='chat-room'
        data-a-target='chat-theme-dark'
      >
        <div className='chat-room__content'>
          <div
            aria-label='Chat messages'
            aria-describedby='Exit-chat-container'
            className='chat-list--default'
            style={{ opacity: 1 }}
          >
            <div className='iWWhvN' style={{ position: 'relative' }}>
              <div
                className='scrollable-area'
                data-a-target='chat-scroller'
                data-simplebar='init'
              >
                <div
                  className='simplebar-scroll-content'
                  style={{ paddingRight: '15px', marginBottom: '-30px' }}
                >
                  <div
                    className='simplebar-content'
                    style={{ paddingBottom: '15px', marginRight: '-15px' }}
                  >
                    <div
                      className='chat-scrollable-area__message-container'
                      data-test-selector='chat-scrollable-area__message-container'
                      role='log'
                    >
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='Alice'
                        align-items='center'
                      >
                        <div className='p-relative'>
                          <div className='chat-line__message-container'>
                            <div>
                              <div className='chat-line__no-background'>
                                <div className='d-inline'>
                                  <div className='chat-line__username-container chat-line__username-container--hoverable'>
                                    <span></span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='Alice'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(255, 0, 0)' }}
                                        >
                                          Alice
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span data-a-target='chat-line-message-body'>
                                    <span
                                      className='mention-fragment mention-fragment--sender'
                                      data-a-target='chat-message-mention'
                                    >
                                      @bob
                                    </span>
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      {' '}
                                      Hello
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='bob'
                        align-items='center'
                      >
                        <div className='p-relative'>
                          <div className='chat-line__message-highlight'></div>
                          <div className='chat-line__message-container'>
                            <div>
                              <div className='chat-line__no-background'>
                                <div className='d-inline'>
                                  <div className='chat-line__username-container chat-line__username-container--hoverable'>
                                    <span>
                                      <div className='d-inline'>
                                        <button data-a-target='chat-badge'>
                                          <img
                                            alt='Broadcaster'
                                            aria-label='Broadcaster badge'
                                            className='chat-badge'
                                            src='https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1'
                                            srcSet='https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1 1x, https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2 2x, https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3 4x'
                                          />
                                        </button>
                                      </div>
                                      <div className='d-inline'>
                                        <button data-a-target='chat-badge'>
                                          <img
                                            alt='Prime Gaming'
                                            aria-label='Prime Gaming badge'
                                            className='chat-badge'
                                            src='https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1'
                                            srcSet='https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1 1x, https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/2 2x, https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3 4x'
                                          />
                                        </button>
                                      </div>
                                    </span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='bob'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(180, 84, 255)' }}
                                        >
                                          bob
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span data-a-target='chat-line-message-body'>
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      Hi
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='Alice'
                        align-items='center'
                      >
                        <div className='p-relative'>
                          <div className='chat-line__message-container'>
                            <div>
                              <div className='chat-line__no-background'>
                                <div className='d-inline'>
                                  <div className='chat-line__username-container chat-line__username-container--hoverable'>
                                    <span></span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='Alice'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(255, 0, 0)' }}
                                        >
                                          Alice
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span data-a-target='chat-line-message-body'>
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      123456789
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='Alice'
                        align-items='center'
                      >
                        <div className='p-relative'>
                          <div className='chat-line__message-container'>
                            <div>
                              <div className='chat-line__no-background'>
                                <div className='d-inline'>
                                  <div className='chat-line__username-container chat-line__username-container--hoverable'>
                                    <span></span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='Alice'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(255, 0, 0)' }}
                                        >
                                          Alice
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span data-a-target='chat-line-message-body'>
                                    <div
                                      className='chat-line__message--emote-button'
                                      data-test-selector='emote-button'
                                    >
                                      <div className='d-inline'>
                                        <span data-a-target='emote-name'>
                                          <div className='chat-image__container'>
                                            <img
                                              alt='VoHiYo'
                                              className='chat-image chat-line__message--emote'
                                              src='https://static-cdn.jtvnw.net/emoticons/v2/81274/default/dark/1.0'
                                              srcSet='https://static-cdn.jtvnw.net/emoticons/v2/81274/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/81274/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/81274/default/dark/3.0 4x'
                                            />
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      {' '}
                                    </span>
                                    <div
                                      className='chat-line__message--emote-button'
                                      data-test-selector='emote-button'
                                    >
                                      <div className='d-inline'>
                                        <span data-a-target='emote-name'>
                                          <div className='chat-image__container'>
                                            <img
                                              alt='NotLikeThis'
                                              className='chat-image chat-line__message--emote'
                                              src='https://static-cdn.jtvnw.net/emoticons/v2/58765/default/dark/1.0'
                                              srcSet='https://static-cdn.jtvnw.net/emoticons/v2/58765/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/58765/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/58765/default/dark/3.0 4x'
                                            />
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='Alice'
                        align-items='center'
                      >
                        <div className='p-relative'>
                          <div className='chat-line__message-container'>
                            <div>
                              <div className='chat-line__no-background'>
                                <div className='d-inline'>
                                  <div className='chat-line__username-container chat-line__username-container--hoverable'>
                                    <span></span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='Alice'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(255, 0, 0)' }}
                                        >
                                          Alice
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span data-a-target='chat-line-message-body'>
                                    <div
                                      className='chat-line__message--emote-button'
                                      data-test-selector='emote-button'
                                    >
                                      <div className='d-inline'>
                                        <span data-a-target='emote-name'>
                                          <div className='chat-image__container'>
                                            <img
                                              alt='HungryPaimon'
                                              className='chat-image chat-line__message--emote'
                                              src='https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_535e40afa0b34a9481997627b1b47d96/default/dark/1.0'
                                              srcSet='https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_535e40afa0b34a9481997627b1b47d96/default/dark/1.0 1x,https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_535e40afa0b34a9481997627b1b47d96/default/dark/2.0 2x,https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_535e40afa0b34a9481997627b1b47d96/default/dark/3.0 4x'
                                            />
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      {' '}
                                      lorem ipsum
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='bob'
                        align-items='center'
                      >
                        <div className='p-relative'>
                          <div className='chat-line__message-highlight'></div>
                          <div className='chat-line__message-container'>
                            <div className='reply-icon'>
                              <div className='tw-svg'>
                                <svg width='16' height='16' viewBox='0 0 16 16'>
                                  <path d='M5 6h2v2H5V6Zm4 0h2v2H9V6Z'></path>
                                  <path
                                    fill-rule='evenodd'
                                    d='m8 14 2-2h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3l2 2Zm-1.172-4H4V4h8v6H9.172L8 11.172 6.828 10Z'
                                    clip-rule='evenodd'
                                  ></path>
                                </svg>
                              </div>
                              <div className='ijgHIL'>
                                <p className='CoreText-sc-1txzju1-0 cCvSAC'>
                                  Replying to{' '}
                                  <span className='reply-line--mentioned'>
                                    @Alice
                                  </span>
                                  : 123456789
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className='chat-line__no-background'>
                                <div className='d-inline'>
                                  <div className='chat-line__username-container chat-line__username-container--hoverable'>
                                    <span>
                                      <div className='d-inline'>
                                        <button data-a-target='chat-badge'>
                                          <img
                                            alt='Broadcaster'
                                            aria-label='Broadcaster badge'
                                            className='chat-badge'
                                            src='https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1'
                                            srcSet='https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1 1x, https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/2 2x, https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3 4x'
                                          />
                                        </button>
                                      </div>
                                      <div className='d-inline'>
                                        <button data-a-target='chat-badge'>
                                          <img
                                            alt='Prime Gaming'
                                            aria-label='Prime Gaming badge'
                                            className='chat-badge'
                                            src='https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1'
                                            srcSet='https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/1 1x, https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/2 2x, https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3 4x'
                                          />
                                        </button>
                                      </div>
                                    </span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='bob'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(180, 84, 255)' }}
                                        >
                                          bob
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span data-a-target='chat-line-message-body'>
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      test
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
