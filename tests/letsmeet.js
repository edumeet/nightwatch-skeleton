module.exports = {
  'letsmeet.hu test': function (browser) {
    const randomId = Math.random().toString(36).substring(2, 5)
    browser
      .url('https://letsmeet.no/nightwatch')
      .waitForElementVisible('body', 15000)
      .assert.titleContains('Multiparty Meeting')
      .waitForElementVisible('#displayname', 15000)
      .assert.visible('#displayname')
      .setValue('#displayname', `-${randomId}`)
      .waitForElementVisible('button.MuiButtonBase-root:nth-child(2)')
      .click('button.MuiButtonBase-root:nth-child(2)')
      .waitForElementVisible('.webcam', 15000)
      .waitForMediaPlaybackReady('.isMe', 10000)
      .pause(30000)
      .saveScreenshot(`tmp/screencapture-${randomId}.png`)
      .end()
  }
}
