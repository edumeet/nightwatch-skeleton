module.exports = {
  'letsmeet.hu test': function (browser) {
    const randomId = Math.random().toString(36).substring(2, 5)
    browser
      .url('https://letsmeet.hu/nightwatch')
      .waitForElementVisible('body', 15000)
      .assert.titleContains('Multiparty Meeting')
      .waitForElementVisible('#displayname', 15000)
      .assert.visible('#displayname')
      .setValue('#displayname', `-${randomId}`)
      .waitForElementVisible('button.MuiButtonBase-root:nth-child(2)')
      .click('button.MuiButtonBase-root:nth-child(2)')
      .waitForElementVisible('.webcam', 150000)
      .waitForMediaPlaybackReady('.isMe', 10000)
      .pause(3000)
      .saveScreenshot(`tmp/screencapture-${randomId}.png`)
      .end()
  }
}
