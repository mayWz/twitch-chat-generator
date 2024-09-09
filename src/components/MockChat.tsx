export const MockChat = () => {
  return (
    <div className='Layout-sc-1xcs6mc-0 iynFwo stream-chat'>
      <div
        className='Layout-sc-1xcs6mc-0 fiHaCw stream-chat-header'
        role='region'
      >
        <div className='Layout-sc-1xcs6mc-0 xxjeD'>
          <h4
            data-test-selector='chat-room-header-label'
            id='chat-room-header-label'
            className='CoreText-sc-1txzju1-0 bzuOqI'
          >
            Stream Chat
          </h4>
        </div>
        <div className='Layout-sc-1xcs6mc-0 dpXUHc'>
          <div className='Layout-sc-1xcs6mc-0 kbdfeJ'></div>
          <div className='InjectLayout-sc-1i43xsx-0 kBtJDm'>
            <button
              className='ScCoreButton-sc-ocjdkq-0 ljgEdo ScButtonIcon-sc-9yap0r-0 eSFFfM'
              aria-label='Users in Chat'
              data-test-selector='chat-viewer-list'
            >
              <div className='ButtonIconFigure-sc-1emm8lf-0 buvMbr'>
                <div className='ScIconLayout-sc-1q25cff-0 cASLMj'>
                  <div className='ScAspectRatio-sc-18km980-1 doeqbO tw-aspect'>
                    <div className='ScAspectSpacer-sc-18km980-0 bIDIFh'></div>
                    <svg
                      width='100%'
                      height='100%'
                      version='1.1'
                      viewBox='0 0 20 20'
                      x='0px'
                      y='0px'
                      role='presentation'
                      aria-hidden='true'
                      focusable='false'
                      className='ScIconSVG-sc-1q25cff-1 jpczqG'
                    >
                      <g>
                        <path
                          fill-rule='evenodd'
                          d='M7 2a4 4 0 00-1.015 7.87c-.098.64-.651 1.13-1.318 1.13A2.667 2.667 0 002 13.667V18h2v-4.333c0-.368.298-.667.667-.667.908 0 1.732-.363 2.333-.953.601.59 1.425.953 2.333.953.369 0 .667.299.667.667V18h2v-4.333A2.667 2.667 0 009.333 11c-.667 0-1.22-.49-1.318-1.13A4.002 4.002 0 007 2zM5 6a2 2 0 104 0 2 2 0 00-4 0z'
                          clip-rule='evenodd'
                        ></path>
                        <path d='M14 11.83V18h4v-3.75c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75v-.42a3.001 3.001 0 10-2 0z'></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <section
        data-test-selector='chat-room-component-layout'
        className='InjectLayout-sc-1i43xsx-0 chat-room ghyOuh'
        aria-labelledby='chat-room-header-label'
        data-a-target='chat-theme-dark'
      >
        <div className='Layout-sc-1xcs6mc-0 fhQiFC chat-room__content'>
          <div className='Layout-sc-1xcs6mc-0'></div>
          <div className='Layout-sc-1xcs6mc-0'></div>
          <div>
            <div className='Layout-sc-1xcs6mc-0 lhaUqG'>
              <a
                aria-label='Skip reading chat messages'
                className='ScCoreLink-sc-16kq0mq-0 eFqEFL tw-link'
                href='/popout/maywz/chat#WYSIWGChatInputEditor_SkipChat'
              ></a>
            </div>
          </div>
          <div
            aria-label='Chat messages'
            aria-describedby='Exit-chat-container'
            className='Layout-sc-1xcs6mc-0 InjectLayout-sc-1i43xsx-0 chat-list--default font-scale--default iClcoJ'
            style={{ opacity: 1 }}
          >
            <div
              className='Layout-sc-1xcs6mc-0 InjectLayout-sc-1i43xsx-0 iWWhvN'
              style={{ position: 'relative' }}
            >
              <div className='resize-detector'>
                <div className='resize-detector'>
                  <div
                    className='resize-detector__grow'
                    style={{ width: '100000px', height: '100000px' }}
                  ></div>
                </div>
                <div className='resize-detector'>
                  <div className='resize-detector__shrink'></div>
                </div>
              </div>
              <div
                className='scrollable-area'
                data-a-target='chat-scroller'
                data-simplebar='init'
              >
                <div
                  className='simplebar-track vertical'
                  style={{ visibility: 'hidden' }}
                >
                  <div
                    className='simplebar-scrollbar'
                    style={{ top: '2px', height: '25px' }}
                  ></div>
                </div>
                <div
                  className='simplebar-track horizontal'
                  style={{ visibility: 'hidden' }}
                >
                  <div className='simplebar-scrollbar'></div>
                </div>
                <div
                  className='simplebar-scroll-content'
                  style={{ paddingRight: '15px', marginBottom: '-30px' }}
                >
                  <div
                    className='simplebar-content'
                    style={{ paddingBottom: '15px', marginRight: '-15px' }}
                  >
                    <div
                      className='Layout-sc-1xcs6mc-0 capulb chat-scrollable-area__message-container'
                      data-test-selector='chat-scrollable-area__message-container'
                      role='log'
                    >
                      <div
                        className='Layout-sc-1xcs6mc-0 chat-line__status'
                        data-a-target='chat-welcome-message'
                      >
                        <span className='CoreText-sc-1txzju1-0'>
                          Welcome to the chat room!
                        </span>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='philos006'
                        align-items='center'
                      >
                        <div className='Layout-sc-1xcs6mc-0 cwtKyw'>
                          <div className='Layout-sc-1xcs6mc-0 cwtKyw chat-line__message-container'>
                            <div className='Layout-sc-1xcs6mc-0'>
                              <div className='Layout-sc-1xcs6mc-0 cVmNmw chat-line__no-background'>
                                <div className='Layout-sc-1xcs6mc-0 kBzdhm'>
                                  <div className='Layout-sc-1xcs6mc-0 plvaC chat-line__username-container chat-line__username-container--hoverable'>
                                    <span></span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='philos006'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(255, 0, 0)' }}
                                        >
                                          philos006
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span
                                    className=''
                                    data-a-target='chat-line-message-body'
                                  >
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      123
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='Layout-sc-1xcs6mc-0 bbwsyT chat-line__icons'></div>
                        </div>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='maywz'
                        align-items='center'
                      >
                        <div className='Layout-sc-1xcs6mc-0 cwtKyw'>
                          <div className='Layout-sc-1xcs6mc-0 dSLhPJ chat-line__message-highlight'></div>
                          <div className='Layout-sc-1xcs6mc-0 cwtKyw chat-line__message-container'>
                            <div className='Layout-sc-1xcs6mc-0'>
                              <div className='Layout-sc-1xcs6mc-0 cVmNmw chat-line__no-background'>
                                <div className='Layout-sc-1xcs6mc-0 kBzdhm'>
                                  <div className='Layout-sc-1xcs6mc-0 plvaC chat-line__username-container chat-line__username-container--hoverable'>
                                    <span>
                                      <div className='InjectLayout-sc-1i43xsx-0 jbmPmA'>
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
                                      <div className='InjectLayout-sc-1i43xsx-0 jbmPmA'>
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
                                          data-a-user='maywz'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(180, 84, 255)' }}
                                        >
                                          mayWz
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span
                                    className=''
                                    data-a-target='chat-line-message-body'
                                  >
                                    <span
                                      className='text-fragment'
                                      data-a-target='chat-message-text'
                                    >
                                      1123
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
                        data-a-user='philos006'
                        align-items='center'
                      >
                        <div className='Layout-sc-1xcs6mc-0 cwtKyw'>
                          <div className='Layout-sc-1xcs6mc-0 cwtKyw chat-line__message-container'>
                            <div className='Layout-sc-1xcs6mc-0'>
                              <div className='Layout-sc-1xcs6mc-0 cVmNmw chat-line__no-background'>
                                <div className='Layout-sc-1xcs6mc-0 kBzdhm'>
                                  <div className='Layout-sc-1xcs6mc-0 plvaC chat-line__username-container chat-line__username-container--hoverable'>
                                    <span></span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='philos006'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(255, 0, 0)' }}
                                        >
                                          philos006
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span
                                    className=''
                                    data-a-target='chat-line-message-body'
                                  >
                                    <div
                                      className='chat-line__message--emote-button'
                                      data-test-selector='emote-button'
                                    >
                                      <div className='InjectLayout-sc-1i43xsx-0 jbmPmA'>
                                        <span data-a-target='emote-name'>
                                          <div className='Layout-sc-1xcs6mc-0 eRdKzO chat-image__container'>
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
                                      <div className='InjectLayout-sc-1i43xsx-0 jbmPmA'>
                                        <span data-a-target='emote-name'>
                                          <div className='Layout-sc-1xcs6mc-0 eRdKzO chat-image__container'>
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
                          <div className='Layout-sc-1xcs6mc-0 bbwsyT chat-line__icons'></div>
                        </div>
                      </div>
                      <div
                        className='chat-line__message'
                        data-a-target='chat-line-message'
                        data-a-user='philos006'
                        align-items='center'
                      >
                        <div className='Layout-sc-1xcs6mc-0 cwtKyw'>
                          <div className='Layout-sc-1xcs6mc-0 cwtKyw chat-line__message-container'>
                            <div className='Layout-sc-1xcs6mc-0'>
                              <div className='Layout-sc-1xcs6mc-0 cVmNmw chat-line__no-background'>
                                <div className='Layout-sc-1xcs6mc-0 kBzdhm'>
                                  <div className='Layout-sc-1xcs6mc-0 plvaC chat-line__username-container chat-line__username-container--hoverable'>
                                    <span></span>
                                    <span
                                      className='chat-line__username'
                                      role='button'
                                    >
                                      <span>
                                        <span
                                          className='chat-author__display-name'
                                          data-a-target='chat-message-username'
                                          data-a-user='philos006'
                                          data-test-selector='message-username'
                                          style={{ color: 'rgb(255, 0, 0)' }}
                                        >
                                          philos006
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <span aria-hidden='true'>: </span>
                                  <span
                                    className=''
                                    data-a-target='chat-line-message-body'
                                  >
                                    <div
                                      className='chat-line__message--emote-button'
                                      data-test-selector='emote-button'
                                    >
                                      <div className='InjectLayout-sc-1i43xsx-0 jbmPmA'>
                                        <span data-a-target='emote-name'>
                                          <div className='Layout-sc-1xcs6mc-0 eRdKzO chat-image__container'>
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
                                      aaasssddd
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='Layout-sc-1xcs6mc-0 bbwsyT chat-line__icons'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className='Layout-sc-1xcs6mc-0 sBfqH chat-room__notifications'></div>
          <div className='Layout-sc-1xcs6mc-0 kILIqT chat-input'>
            <div className='Layout-sc-1xcs6mc-0'></div>
            <div>
              <div className='InjectLayout-sc-1i43xsx-0 blcfev'>
                <div className='Layout-sc-1xcs6mc-0 cyDLBs'>
                  <div className='Layout-sc-1xcs6mc-0'></div>
                  <div
                    aria-live='polite'
                    className='Layout-sc-1xcs6mc-0 gbJVYO'
                  ></div>
                </div>
                <div className='Layout-sc-1xcs6mc-0 dsMzFl'>
                  <div className='Layout-sc-1xcs6mc-0 cwtKyw'>
                    <div className='Layout-sc-1xcs6mc-0 cafndC chat-input__textarea'>
                      <div className='InjectLayout-sc-1i43xsx-0 bTAXM'>
                        <div className='Layout-sc-1xcs6mc-0 gGTkSL font-scale--default'>
                          <div className='Layout-sc-1xcs6mc-0 cwtKyw'>
                            <div
                              id='WYSIWGChatInputEditor_SkipChat'
                              className='Layout-sc-1xcs6mc-0 pJTym'
                            >
                              <div className='chat-wysiwyg-input__box'>
                                <div
                                  className='chat-wysiwyg-input__placeholder'
                                  style={{
                                    paddingLeft: '38px',
                                    marginLeft: '2px',
                                  }}
                                >
                                  Send a message
                                </div>
                                <div
                                  role='textbox'
                                  aria-multiline='true'
                                  data-a-target='chat-input'
                                  data-test-selector='chat-input'
                                  aria-label='Send a message'
                                  data-placeholder='Send a message'
                                  className='chat-wysiwyg-input__editor'
                                  spellCheck='true'
                                  data-slate-editor='true'
                                  data-slate-node='value'
                                  contentEditable='true'
                                  data-zindex='-1'
                                  style={{
                                    position: 'relative',
                                    whiteSpace: 'pre-wrap',
                                    overflowWrap: 'break-word',
                                    paddingLeft: '38px',
                                    paddingRight: '35px',
                                    maxHeight: 'calc(97.5px + 2rem)',
                                    outline: 'none',
                                    paddingBottom: '1rem',
                                  }}
                                >
                                  <div data-slate-node='element'>
                                    <span data-slate-node='text'>
                                      <span
                                        data-slate-leaf='true'
                                        className='ScTransitionBase-sc-hx4quq-0 iEzfDB tw-transition'
                                        data-a-target='chat-input-text'
                                        aria-hidden='false'
                                      >
                                        <span
                                          data-slate-zero-width='n'
                                          data-slate-length='0'
                                        >
                                          &#xFEFF;
                                          <br />
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='Layout-sc-1xcs6mc-0 bNeotz chat-input__badge-carousel'>
                        <div
                          data-a-target='chat-badge-carousel'
                          className='Layout-sc-1xcs6mc-0 gkrCJN'
                        >
                          <div
                            aria-describedby='TbdGHsqCQ0DSoPHORwWDKn4tYeQPysiZ'
                            className='Layout-sc-1xcs6mc-0 ScAttachedTooltipWrapper-sc-1ems1ts-0 cxJwKj'
                          >
                            <div
                              data-toggle-balloon-id='4b1bd139-8f28-4a3b-930e-015caca67033'
                              className='Layout-sc-1xcs6mc-0 cwtKyw'
                            >
                              <div
                                data-test-selector='toggle-balloon-wrapper__mouse-enter-detector'
                                style={{ display: 'inherit' }}
                              >
                                <button
                                  className='ScCoreButton-sc-ocjdkq-0 ljgEdo ScButtonIcon-sc-9yap0r-0 eSFFfM'
                                  aria-label='ChatBadgeCarousel'
                                  data-a-target='chat-badge-carousel-badge-icon'
                                >
                                  <div className='ButtonIconFigure-sc-1emm8lf-0 buvMbr'>
                                    <div className='InjectLayout-sc-1i43xsx-0 hWukFy tw-transition-group'>
                                      <div
                                        className='ScTransitionBase-sc-hx4quq-0 gedjHf tw-transition'
                                        aria-hidden='false'
                                        style={{
                                          transitionProperty:
                                            'transform, opacity',
                                          transitionTimingFunction: 'ease',
                                        }}
                                      >
                                        <img
                                          alt='Custom/Vanity Badge'
                                          aria-label='Custom/Vanity Badge'
                                          className='chat-badge'
                                          src='https://assets.twitch.tv/assets/dark-649b4a4625649be7bf30.svg'
                                          style={{
                                            height: '2rem',
                                            width: '2rem',
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='Layout-sc-1xcs6mc-0 dIcAFo'>
                        <div className='Layout-sc-1xcs6mc-0 cvYRWc'>
                          <div className='Layout-sc-1xcs6mc-0 hatIYF'>
                            <button
                              className='ScCoreButton-sc-ocjdkq-0 ljgEdo ScButtonIcon-sc-9yap0r-0 eSFFfM'
                              aria-label='Emote picker'
                              data-a-target='emote-picker-button'
                            >
                              <div className='ButtonIconFigure-sc-1emm8lf-0 buvMbr'>
                                <div className='ScIconLayout-sc-1q25cff-0 cASLMj'>
                                  <div className='ScAspectRatio-sc-18km980-1 doeqbO tw-aspect'>
                                    <div className='ScAspectSpacer-sc-18km980-0 bIDIFh'></div>
                                    <svg
                                      width='100%'
                                      height='100%'
                                      version='1.1'
                                      viewBox='0 0 20 20'
                                      x='0px'
                                      y='0px'
                                      role='presentation'
                                      aria-hidden='true'
                                      focusable='false'
                                      className='ScIconSVG-sc-1q25cff-1 jpczqG'
                                    >
                                      <g>
                                        <path d='M7 11a1 1 0 100-2 1 1 0 000 2zM14 10a1 1 0 11-2 0 1 1 0 012 0zM10 14a2 2 0 002-2H8a2 2 0 002 2z'></path>
                                        <path
                                          fill-rule='evenodd'
                                          d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z'
                                          clip-rule='evenodd'
                                        ></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='Layout-sc-1xcs6mc-0 eWfUfi chat-input__buttons-container'
                data-test-selector='chat-input-buttons-container'
              >
                <div className='Layout-sc-1xcs6mc-0 cNKHwD'>
                  <div className='Layout-sc-1xcs6mc-0 gcEJjU'>
                    <div></div>
                  </div>
                </div>
                <div className='Layout-sc-1xcs6mc-0 kEPLoI'>
                  <div className='Layout-sc-1xcs6mc-0 kbdfeJ'>
                    <p className='CoreText-sc-1txzju1-0 jSkguG'></p>
                  </div>
                  <div className='Layout-sc-1xcs6mc-0 cwtKyw'>
                    <div className='InjectLayout-sc-1i43xsx-0 kBtJDm'>
                      <div className='Layout-sc-1xcs6mc-0 jsQYQ'>
                        <button
                          className='ScCoreButton-sc-ocjdkq-0 ljgEdo ScButtonIcon-sc-9yap0r-0 eSFFfM'
                          data-a-target='chat-settings'
                          aria-label='Chat settings'
                        >
                          <div className='ButtonIconFigure-sc-1emm8lf-0 buvMbr'>
                            <div className='ScFigure-sc-wkgzod-0 fewniq tw-svg'>
                              <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                focusable='false'
                                aria-hidden='true'
                                role='presentation'
                              >
                                <path d='M10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'></path>
                                <path
                                  fill-rule='evenodd'
                                  d='M9 2h2a2.01 2.01 0 0 0 1.235 1.855l.53.22a2.01 2.01 0 0 0 2.185-.439l1.414 1.414a2.01 2.01 0 0 0-.439 2.185l.22.53A2.01 2.01 0 0 0 18 9v2a2.01 2.01 0 0 0-1.855 1.235l-.22.53a2.01 2.01 0 0 0 .44 2.185l-1.415 1.414a2.01 2.01 0 0 0-2.184-.439l-.531.22A2.01 2.01 0 0 0 11 18H9a2.01 2.01 0 0 0-1.235-1.854l-.53-.22a2.009 2.009 0 0 0-2.185.438L3.636 14.95a2.009 2.009 0 0 0 .438-2.184l-.22-.531A2.01 2.01 0 0 0 2 11V9c.809 0 1.545-.487 1.854-1.235l.22-.53a2.009 2.009 0 0 0-.438-2.185L5.05 3.636a2.01 2.01 0 0 0 2.185.438l.53-.22A2.01 2.01 0 0 0 9 2zm-4 8 1.464 3.536L10 15l3.535-1.464L15 10l-1.465-3.536L10 5 6.464 6.464 5 10z'
                                  clip-rule='evenodd'
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='Layout-sc-1xcs6mc-0 jOVwMQ'>
                    <div className='InjectLayout-sc-1i43xsx-0 kBtJDm'>
                      <button
                        data-a-target='chat-send-button'
                        aria-label='Send Chat'
                        className='ScCoreButton-sc-ocjdkq-0 ScCoreButtonPrimary-sc-ocjdkq-1 ljgEdo gmCwLG'
                      >
                        <div className='ScCoreButtonLabel-sc-s7h2b7-0 gPDjGr'>
                          <div
                            data-a-target='tw-core-button-label-text'
                            className='Layout-sc-1xcs6mc-0 bFxzAY'
                          >
                            Chat
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='Layout-sc-1xcs6mc-0 llkQnO chat-room__viewer-card'
            data-a-target='chat-user-card'
          >
            <div className='InjectLayout-sc-1i43xsx-0 fzpA-DP viewer-card-layer'></div>
          </div>
        </div>
      </section>
    </div>
  )
}
