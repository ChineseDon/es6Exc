import yargs from 'yargs';
const args = yargs
.option('production', { // 开发环境
    boolean: true,
    default: false,
    describe: 'min all scripts'
})

.option('watch', {  // 是否监听所有文件
    boolean: true,
    default: false,
    describe: 'watch all files'
})

.option('verbose', {  //是否需要命令行输出详细的日志
    boolean: true,
    default: false,
    describe: 'log'
})

.option('sourcemaps', {
    describe: 'force the creation of sourcemaps'
})

.option('port', {
    String: true,
    default: 8080,
    describe: 'server port'
})

.argv  // 字符串进行解析
