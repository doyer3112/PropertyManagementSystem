// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const userInformData = function () {
  let userInform = []
  for (let i = 0; i < 50; i++) {
    var tel = Mock.mock({
      mobile: /^1[5-7]{1}[0-9]{9}$/
    })
    var lane = Mock.mock({
      'number|1-40': 1
    })
    var floor = Mock.mock({
      'number|1-10': 1
    })
    var level = Mock.mock({
      'number|1-7': 1
    })
    var room = Mock.mock({
      'number|1-5': 1
    })
    let newArticleObject = {
      name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      sex: Random.cword('男女'),
      tel: tel.mobile,
      date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      address: '上海市徐汇区乐山六七村 ' + lane.number + '弄 ' + floor.number + '号楼 ' + level.number + '0' + room.number
    }
    userInform.push(newArticleObject)
  }

  return {
    userInform: userInform
  }
}

// Mock.mock( url, post/get , 返回的数据)
Mock.mock('/user/inform', 'post', userInformData)
