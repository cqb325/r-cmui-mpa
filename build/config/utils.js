var glob = require('glob');
var path = require('path');

exports.pickFiles = function(options) {
    var files = glob.sync(options.pattern);
    return files.reduce(function(data, filename) {
        if(filename.endsWith('.js')){
            var matched = filename.match(options.id);
            var name = matched[1];
            name = name.replace('.min', '');
            data[name] = path.resolve(__dirname, filename);
            return data;
        }else{
            return data;
        }
    }, {});
};


exports.fullPath = function(dir) {
    return path.resolve(__dirname, dir);
};


exports.getEntries = function(globPath) {
    var files = glob.sync(globPath),
        entries = {};

    files.forEach(function(filepath) {
        // 取倒数第二层(view下面的文件夹)做包名
        var split = filepath.split('/');
        var name = split[split.length - 2];

        entries[name] = './' + filepath;
    });

    return entries;
};
