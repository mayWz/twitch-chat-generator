export const importOverideCss = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&display=swap');
`

export const preOverideCss = `
* {
 background: transparent !important;
 scroll-behavior: smooth;
}
`

export const mainOverideCss = `
.stream-chat {
  font-family: "Noto Sans Thai" !important;
}

.stream-chat-header,
#chat-room-header-label,
div[data-a-target="chat-welcome-message"],
div[data-a-target="moderation-action"],
.community-highlight-stack__scroll-area--disable,
.chat-input,
.chat-line__status,
.chat-scrollable-area__message-container [aria-hidden="true"],
.pinned-chat {
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

.mention-fragment {
  color: navy !important;
}

.chat-line__message-container .tw-svg {
  color: navy !important;
}

.reply-line--mentioned {
  color: navy !important;
  background: transparent !important;
}

.chat-line__message-container {
  margin: 1.25em 0 0 0.25em;
  padding: 0.5em 0.25em 0.25em;
  position: relative;
  border: 3px solid var(--textbox-border-color);
  background-color: var(--textbox-bg-color) !important;
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

.chat-author__display-name {
  color: auto !important;
}

.chat-line__message--emote-button img {
  vertical-align: unset;
  margin: 0;
}
`

export const defaultCssValue = {
  '--textbox-bg-color': '#ffffffbb',
  '--textbox-border-color': '#000000ff',
}
