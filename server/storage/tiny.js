var chokidar = require('chokidar');
var tinify = require('tinify');
var exec = require('child_process').exec;

var storage_media = chokidar.watch('thumbs', {
    ignoreInitial: true,
    depth: 0
});

tinify.key = 'QASEScBa0GwkJ4ti2UMIteTjoCNHSqhK';

function compress(src, img, w, h) {
    console.log(img.slice(14))
    var source = tinify.fromFile(src);
    var resized = source.resize({
        method: 'cover',
        width: w,
        height: h
      });
    resized.toFile('mercas/' + 'thumb_' + img);    
}

storage_media.on('add', function(pathName) {
    console.log('Media pathName: added:  ', pathName);
    // exec('touch tiny_' + pathName.slice(14), function(
    //     err, stdout, stderr) {
    //         if (err) console.log(err);
    //         console.log('Added file: ', stdout)
    //     }
    // );
    setTimeout(function() {
        console.log('About to compress');
        var img = pathName.slice(7);
        console.log('hijo fe uta: ', img);
        compress(pathName, img, 800, 600);
    }, 10000);
});
