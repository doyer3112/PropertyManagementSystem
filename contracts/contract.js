// JS contract 
Duktape.modSearch = function (id) {
    var name;
    var src;
    var found = false;
    name = './vm/duktape/js_lib/' + id + '.js';
    src = load_js(name);
    if (typeof src === 'string') {
        print('loaded ECMAScript:', name);
        found = true;
    };
    if (!found) {
        throw new Error('module not found: ' + id);
    };
    return src;
}

var Bottos = require('index')
var Lib = Bottos.Lib
var Storage = Bottos.Storage
var console = Bottos.console

// regist user
function reguser(){
    var params = Lib.getParams()
    var table = "users"
    var key = params.account
    var packStr = Lib.getPack(params)
    Storage.set(table,key,packStr)
    return 0
}

// get user
function getuserinfo(){
    var params = Lib.getParams()
    var contract = params.account
    var table = "users"
    var key = params.account
    var userinfo = Storage.get(contract,table,key)
    var unpacnObj = Lib.getUnpack(userinfo.binValue)
    print(JSON.stringify(unpacnObj))
    return 0
}

// 费用缴纳（物业管理，水电费，租金等）
/**
 * params: amount  type(1:物业；2:水电，3:房租)
 */
function payFees(){
    var params = Lib.getParams()
    var table = "fees"
    var key = params.account
    var packStr = Lib.getPack(params)
    Storage.set(table,key,packStr)
    return 0
}

// 历史缴纳费用查询
function getFees(){
    var params = Lib.getParams()
    var contract = params.account
    var table = "fees"
    var key = params.account
    var feesInfo = Storage.get(contract,table,key)
    var unpacnObj = Lib.getUnpack(feesInfo.binValue)
    print(JSON.stringify(unpacnObj))
    return 0
}
