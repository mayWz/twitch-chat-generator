import { useState } from 'react'
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head'

import { MockChat } from '@/components'

export default function Index() {
  const [css] = useState(baseOverideCss)

  return (
    <>
      <Head>
        <style>{css}</style>
      </Head>
      <div className='Index'>
        <div className='Index__left'>
          <MockChat />
        </div>
        <div className='Index__right'>TODO: form to custom here</div>
      </div>
    </>
  )
}

const baseOverideCss = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap');

* {
 background: transparent !important;
 font-family: "Noto Sans Thai" !important;
 scroll-behavior: smooth;
}

.stream-chat-header,
#chat-room-header-label,
.chat-input,
.community-highlight-stack__scroll-area--disable,
div[data-a-target="chat-welcome-message"],
div[data-a-target="moderation-action"],
.chat-line__status,
.chat-scrollable-area__message-container [aria-hidden="true"] {
 display: none !important;
}

.chat-scrollable-area__message-container {
 position: relative;
 font-size: 2em !important;
 line-height: 1em;
}

.text-fragment {
 color: black !important;
}

.mention-fragment{
  color: navy !important;
}

.reply-line--mentioned {
  color: navy !important;
}

.chat-line__username-container {
  position: absolute;
  top: -1.15em;
  left: -0.25em;
  display: block !important;
  border: 3px solid black;
  width: fit-content;
  padding: 0.1em 0.5em;
  background-color: black !important;
}

.chat-line__message-container {
  margin: 1.25em 0 0 0.25em;
  padding: 0.5em 0.25em 0.25em;
  position: relative;
  border: 3px solid black;
  background-color: #ffffffbb !important;
  border-radius: 0.5em;
}

.chat-line__message-container p[class^="CoreText-"] {
  color: midnightblue !important;
}

.chat-badge {
  width: 1em;
  height: 1em;
  margin-right: 0.2em;
}

.chat-line__message--emote-button img {
  vertical-align: unset;
  margin: 0;
}

.pinned-chat__scrollable-area .text-fragment {
  color: white !important
}
`
