var {onePlusOne, jump} = require('src/hello')


describe('hello', function() {
  it('1 + 1 =', function() {
    expect(onePlusOne(100, 100)).toBe(2)
  })

  it('jump to baidu', function() {
    const url = 'baidu'
    jump(url)
    expect(document.querySelector('.jump').textContent).toBe(url)
  })
})