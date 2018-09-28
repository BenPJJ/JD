var mongoose = require('mongoose');

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost/jd_clo1_db');

// 创建模型
var Schema = mongoose.Schema;
var jd_clo1_db_Schema = new Schema({
    sidesLists: String
});

// 直接导出模型构造函数
module.exports = mongoose.model('Clo1', jd_clo1_db_Schema)

